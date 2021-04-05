using System.Threading.Tasks;
using Moq;
using src.Api.Domain.Interfaces.Services.v2;
using Xunit;

namespace Api.Service.Test.Country
{
    public class QuandoForExecutadoUpdatev2 : CountryTestes
    {
        private ICountryConsumerV2Service _service;
        private Mock<ICountryConsumerV2Service> _serviceMock;

        [Fact(DisplayName = "É Possivel executar o Método Update.")]
        public async Task E_Possivel_Executar_Metodo_Update()
        {

            _serviceMock = new Mock<ICountryConsumerV2Service>();
            _serviceMock.Setup(m => m.Put(countryUpdateV2Dto)).ReturnsAsync(countryDtoResult);
            _service = _serviceMock.Object;

            var resultUpdate = await _service.Put(countryUpdateV2Dto);
            Assert.NotNull(resultUpdate);
        }
    }
}

