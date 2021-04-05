using System;
using System.Collections.Generic;
using src.Api.Domain.Dtos.Country;

namespace Api.Service.Test.Country
{
    public class CountryTestes
    {
        private Guid _id { get; set; }

        public List<CountryDtoResult> listaCountryDto = new List<CountryDtoResult>();
        public CountryUpdateDto countryUpdateDto;
        public CountryUpdateV2Dto countryUpdateV2Dto;
        public CountryDtoResult countryDtoResult;

        public CountryTestes()
        {
            _id = Guid.NewGuid();

            for (int i = 0; i < 10; i++)
            {
                var dto = new CountryDtoResult()
                {
                    Id = Guid.NewGuid(),
                    Name = Faker.Name.FullName(),
                    Area = 100,
                    Capital = Faker.Name.First(),
                    OfficialLanguage = "Lingua",
                    Population = 1111,
                    PopulationDensity = 50
                };
                listaCountryDto.Add(dto);
            }

            countryDtoResult = new CountryDtoResult
            {
                Id = _id,
                Name = "Brasil",
                Area = 100,
                Capital = Faker.Name.First(),
                OfficialLanguage = "Lingua",
                Population = 1111,
                PopulationDensity = 50,
            };

            countryUpdateDto = new CountryUpdateDto
            {
                Id = _id,
                Area = 100,
                Capital = Faker.Name.First(),
                Population = 1111,
                PopulationDensity = 50,
            };
        }
    }
}
