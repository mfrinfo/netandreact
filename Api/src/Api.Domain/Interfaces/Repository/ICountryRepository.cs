using System.Threading.Tasks;
using Api.Domain.Entities;
using Api.Domain.Interfaces;

namespace Api.Domain.Interfaces.Repository
{
    public interface ICountryRepository : IRepository<CountryEntity>
    {
        Task<CountryEntity> SelectByName(string name);
    }
}
