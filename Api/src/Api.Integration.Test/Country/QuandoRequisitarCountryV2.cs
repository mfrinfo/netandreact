using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Api.Domain.Dtos.User;
using Newtonsoft.Json;
using src.Api.Domain.Dtos.Country;
using Xunit;

namespace Api.Integration.Test.Country
{
    public class QuandoRequisitarCountry : BaseIntegration
    {
        private string _name { get; set; }

        [Fact]
        public async Task E_Possivel_Realizar_Crud_Usuario()
        {
            await AdicionarToken();
            _name = Faker.Name.First();

            //Get All
            response = await client.GetAsync($"{hostApi}v1/Countries");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            var jsonResult = await response.Content.ReadAsStringAsync();
            var listaFromJson = JsonConvert.DeserializeObject<IEnumerable<CountryDtoResult>>(jsonResult);
            Assert.NotNull(listaFromJson);
            Assert.True(listaFromJson.Count() > 0);
            Assert.True(listaFromJson.Where(r => r.Name == "Brazil").Count() == 1);

            var updateCountryDto = new CountryUpdateDto()
            {
                Id = listaFromJson.Where(r => r.Name == "Brazil").FirstOrDefault().Id,
                Area = 15,
                Capital = "São Paulo",
                Population = 123213213,
                PopulationDensity = 321
            };

            //PUT
            var stringContent = new StringContent(JsonConvert.SerializeObject(updateCountryDto),
                                    Encoding.UTF8, "application/json");
            response = await client.PutAsync($"{hostApi}v1/Countries", stringContent);
            jsonResult = await response.Content.ReadAsStringAsync();
            var registroAtualizado = JsonConvert.DeserializeObject<CountryDtoResult>(jsonResult);

            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            Assert.Equal("Brazil", registroAtualizado.Name);
            Assert.Equal("São Paulo", registroAtualizado.Capital);

        }
    }
}
