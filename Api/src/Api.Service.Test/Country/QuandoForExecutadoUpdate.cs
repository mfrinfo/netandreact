using System.Threading.Tasks;
using Moq;
using src.Api.Domain.Interfaces.Services.v1;
using Xunit;

namespace Api.Service.Test.Country
{
    public class QuandoForExecutadoUpdate : CountryTestes
    {
        private ICountryConsumerService _service;
        private Mock<ICountryConsumerService> _serviceMock;

        [Fact(DisplayName = "É Possivel executar o Método Update.")]
        public async Task E_Possivel_Executar_Metodo_Update()
        {

            _serviceMock = new Mock<ICountryConsumerService>();
            _serviceMock.Setup(m => m.Put(countryUpdateDto)).ReturnsAsync(countryDtoResult);
            _service = _serviceMock.Object;

            var resultUpdate = await _service.Put(countryUpdateDto);
            Assert.NotNull(resultUpdate);
        }
    }
}

