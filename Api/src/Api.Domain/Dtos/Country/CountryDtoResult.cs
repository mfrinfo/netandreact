using System;

namespace src.Api.Domain.Dtos.Country
{
    public class CountryDtoResult
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Capital { get; set; }
        public long? Population { get; set; }
        public long? Area { get; set; }
        public decimal? PopulationDensity { get; set; }
        public string OfficialLanguage { get; set; }
        public string SvgFile { get; set; }
        public bool OriginalInfo { get; set; }
    }
}
