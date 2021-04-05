using System.Collections.Generic;

namespace src.Api.Domain.Dtos.Country
{
    public class CountryDto
    {
        public string Name { get; set; }
        public string Capital { get; set; }
        public long? Population { get; set; }
        public long? Area { get; set; }
        public decimal? PopulationDensity { get; set; }
        public IEnumerable<OfficialLanguagesDto> OfficialLanguages { get; set; }

    }
}
