using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using src.Api.Domain.Dtos.Country;

namespace src.Api.Domain.Interfaces.Services.v2
{
    public interface ICountryConsumerV2Service
    {
        Task<CountryDtoResult> GetById(Guid id);
        Task<IEnumerable<CountryDtoResult>> GetAll();
        Task<CountryDtoResult> Put(CountryUpdateV2Dto dto);

    }
}
