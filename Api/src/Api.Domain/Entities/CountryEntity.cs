using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Domain.Entities
{
    public class CountryEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Capital { get; set; }
        public long? Population { get; set; }
        public long? Area { get; set; }
        public decimal? PopulationDensity { get; set; }
        public string OfficialLanguage { get; set; }
        public string SvgFile { get; set; }
        public string ObjectJson { get; set; }
        public bool OriginalInfo { get; set; }
    }
}
