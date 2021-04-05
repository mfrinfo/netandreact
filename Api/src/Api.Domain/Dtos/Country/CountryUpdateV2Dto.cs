using System;
using System.ComponentModel.DataAnnotations;

namespace src.Api.Domain.Dtos.Country
{
    public class CountryUpdateV2Dto
    {

        [Required(ErrorMessage = "Id é um campo obrigatório")]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Área é um campo obrigatório")]
        public long Area { get; set; }

        [Required(ErrorMessage = "População é um campo obrigatório")]
        public long Population { get; set; }
        [Required(ErrorMessage = "Densidade demográfica é um campo obrigatório")]
        public decimal PopulationDensity { get; set; }

        [Required(ErrorMessage = "Capital é um campo obrigatório")]
        public string Capital { get; set; }

        [Required(ErrorMessage = "Idioma Oficial é um campo obrigatório")]
        public string OfficialLanguage { get; set; }
    }
}
