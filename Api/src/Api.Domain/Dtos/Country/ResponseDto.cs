using System.Collections.Generic;

namespace src.Api.Domain.Dtos.Country
{
    public class ResponseDto
    {
        public IEnumerable<FlagDto> Flag { get; set; }
    }
}
