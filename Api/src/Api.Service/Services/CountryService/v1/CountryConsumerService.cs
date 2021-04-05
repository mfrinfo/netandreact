using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Repository;
using Api.Domain.Models;
using AutoMapper;
using GraphQL;
using GraphQL.Client.Abstractions;
using Newtonsoft.Json;
using src.Api.Domain.Dtos.Country;
using src.Api.Domain.Interfaces.Services.v1;

namespace Api.Service.Services.v1
{
    public class CountryConsumerService : ICountryConsumerService
    {
        private readonly IGraphQLClient _client;
        private ICountryRepository _repository;
        private readonly IMapper _mapper;
        public CountryConsumerService(IGraphQLClient client, ICountryRepository repository, IMapper mapper)
        {
            _client = client;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CountryDtoResult> Put(CountryUpdateDto dto)
        {
            var model = _mapper.Map<CountryModel>(dto);
            var entity = _mapper.Map<CountryEntity>(model);
            var oldRecord = await _repository.SelectAsync(entity.Id);
            entity.Name = oldRecord.Name;
            entity.SvgFile = oldRecord.SvgFile;
            entity.ObjectJson = oldRecord.ObjectJson;
            entity.OfficialLanguage = oldRecord.OfficialLanguage;
            entity.OriginalInfo = false;
            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<CountryDtoResult>(result);
        }

        public async Task<IEnumerable<CountryDtoResult>> GetAll()
        {
            var query = new GraphQLRequest
            {
                Query = @"
                    query {
                        Flag {
                            svgFile
                            country {
                            name
                            capital
                            population
                            area
                            populationDensity
                            }
                        }
                    } "
            };

            var list = await _repository.SelectAsync();
            if (list.Count() > 0)
            {
                return _mapper.Map<IEnumerable<CountryDtoResult>>(list);
            }

            var response = await _client.SendQueryAsync<ResponseDto>(query);
            var resultApi = response.Data.Flag;

            foreach (var item in resultApi)
            {
                if (await _repository.SelectByName(item.Country.Name) == null)
                {
                    await _repository.InsertAsync(new CountryEntity
                    {
                        Name = item.Country.Name,
                        Capital = item.Country.Capital,
                        Population = item.Country.Population,
                        Area = item.Country.Area,
                        PopulationDensity = item.Country.PopulationDensity,
                        SvgFile = item.SvgFile,
                        OriginalInfo = true,
                        ObjectJson = JsonConvert.SerializeObject(item)
                    });
                }
            }

            return _mapper.Map<IEnumerable<CountryDtoResult>>(await _repository.SelectAsync());
        }
    }
}

