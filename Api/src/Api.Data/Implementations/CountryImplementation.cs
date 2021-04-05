using System.Threading.Tasks;
using Api.Data.Context;
using Api.Data.Repository;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Implementations
{
    public class CountryImplementation : BaseRepository<CountryEntity>, ICountryRepository
    {
        private DbSet<CountryEntity> _dataset;
        public CountryImplementation(MyContext context) : base(context)
        {
            _dataset = context.Set<CountryEntity>();
        }
        public async Task<CountryEntity> SelectByName(string name)
        {
            return await _dataset.FirstOrDefaultAsync(c => c.Name.Equals(name));
        }
    }
}
