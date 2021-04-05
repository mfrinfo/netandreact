using System.Collections.Generic;
using System.Threading.Tasks;
using src.Api.Domain.Dtos.Country;

namespace src.Api.Domain.Interfaces.Services.v1
{
    public interface ICountryConsumerService
    {
        Task<IEnumerable<CountryDtoResult>> GetAll();
        Task<CountryDtoResult> Put(CountryUpdateDto dto);

    }
}
