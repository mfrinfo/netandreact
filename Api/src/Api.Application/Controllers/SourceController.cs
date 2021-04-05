using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using src.Api.Domain.Dtos;

namespace Api.Application.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class SourceController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetSource()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = new ReturnLinkDto()
            {
                LinkSource = "https://github.com/mfrinfo/netandreact"
            };

            return Ok(result);
        }

    }
}
