using System;
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
using src.Api.Domain.Interfaces.Services.v2;

namespace Api.Service.Services.v2
{
    public class CountryConsumerV2Service : ICountryConsumerV2Service
    {
        private readonly IGraphQLClient _client;
        private ICountryRepository _repository;
        private readonly IMapper _mapper;
        public CountryConsumerV2Service(IGraphQLClient client, ICountryRepository repository, IMapper mapper)
        {
            _client = client;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CountryDtoResult> Put(CountryUpdateV2Dto dto)
        {
            var model = _mapper.Map<CountryModel>(dto);
            var entity = _mapper.Map<CountryEntity>(model);
            var oldRecord = await _repository.SelectAsync(entity.Id);
            entity.Name = oldRecord.Name;
            entity.SvgFile = oldRecord.SvgFile;
            entity.ObjectJson = oldRecord.ObjectJson;
            entity.OriginalInfo = false;
            if (entity.OfficialLanguage == null)
            {
                entity.OfficialLanguage = oldRecord.OfficialLanguage;
            }
            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<CountryDtoResult>(result);
        }

        public async Task<CountryDtoResult> GetById(Guid id)
        {
            var result = await _repository.SelectAsync(id);
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
                                officialLanguages {
                                    name
                                }
                            }
                        }
                    } "
            };

            var response = await _client.SendQueryAsync<ResponseDto>(query);
            var resultApi = response.Data.Flag;

            foreach (var item in resultApi)
            {
                var country = await _repository.SelectByName(item.Country.Name);

                if (country == null)
                {
                    await _repository.InsertAsync(new CountryEntity
                    {
                        Name = item.Country.Name,
                        Capital = item.Country.Capital,
                        Population = item.Country.Population,
                        Area = item.Country.Area,
                        PopulationDensity = item.Country.PopulationDensity,
                        OfficialLanguage = item.Country.OfficialLanguages.FirstOrDefault().name,
                        SvgFile = item.SvgFile,
                        OriginalInfo = true,
                        ObjectJson = JsonConvert.SerializeObject(item)
                    });
                }
                else
                {
                    if (country.OfficialLanguage == null)
                    {
                        await _repository.UpdateAsync(new CountryEntity
                        {
                            Id = country.Id,
                            Name = country.Name,
                            Capital = country.Capital,
                            Population = country.Population,
                            Area = country.Area,
                            PopulationDensity = country.PopulationDensity,
                            OfficialLanguage = item.Country.OfficialLanguages.FirstOrDefault().name,
                            SvgFile = country.SvgFile,
                            OriginalInfo = true,
                            ObjectJson = JsonConvert.SerializeObject(item)
                        });
                    }
                }
            }

            return _mapper.Map<IEnumerable<CountryDtoResult>>(await _repository.SelectAsync());
        }
    }
}

