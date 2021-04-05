using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using src.Api.Domain.Dtos.Country;
using src.Api.Domain.Interfaces.Services.v2;

using Xunit;

namespace Api.Service.Test.Country
{
    public class QuandoForExecutadoGetAllv2 : CountryTestes
    {
        private ICountryConsumerV2Service _service;
        private Mock<ICountryConsumerV2Service> _serviceMock;

        [Fact(DisplayName = "É Possivel Executar o Método GETAll.")]
        public async Task E_Possivel_Executar_Metodo_GetAll()
        {
            _serviceMock = new Mock<ICountryConsumerV2Service>();
            _serviceMock.Setup(m => m.GetAll()).ReturnsAsync(listaCountryDto);
            _service = _serviceMock.Object;

            var result = await _service.GetAll();
            Assert.NotNull(result);
            Assert.True(result.Count() == 10);

            var _listResult = new List<CountryDtoResult>();
            _serviceMock = new Mock<ICountryConsumerV2Service>();
            _serviceMock.Setup(m => m.GetAll()).ReturnsAsync(_listResult.AsEnumerable);
            _service = _serviceMock.Object;

            var _resultEmpty = await _service.GetAll();
            Assert.Empty(_resultEmpty);
            Assert.True(_resultEmpty.Count() == 0);
        }
    }
}

