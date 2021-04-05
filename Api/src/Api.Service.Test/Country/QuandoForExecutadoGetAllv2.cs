using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using src.Api.Domain.Dtos.Country;
using src.Api.Domain.Interfaces.Services.v1;
using Xunit;

namespace Api.Service.Test.Country
{
    public class QuandoForExecutadoGetAll : CountryTestes
    {
        private ICountryConsumerService _service;
        private Mock<ICountryConsumerService> _serviceMock;

        [Fact(DisplayName = "É Possivel Executar o Método GETAll.")]
        public async Task E_Possivel_Executar_Metodo_GetAll()
        {
            _serviceMock = new Mock<ICountryConsumerService>();
            _serviceMock.Setup(m => m.GetAll()).ReturnsAsync(listaCountryDto);
            _service = _serviceMock.Object;

            var result = await _service.GetAll();
            Assert.NotNull(result);
            Assert.True(result.Count() == 10);

            var _listResult = new List<CountryDtoResult>();
            _serviceMock = new Mock<ICountryConsumerService>();
            _serviceMock.Setup(m => m.GetAll()).ReturnsAsync(_listResult.AsEnumerable);
            _service = _serviceMock.Object;

            var _resultEmpty = await _service.GetAll();
            Assert.Empty(_resultEmpty);
            Assert.True(_resultEmpty.Count() == 0);
        }
    }
}

