using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using src.Api.Domain.Dtos.Country;
using src.Api.Domain.Interfaces.Services.v2;

namespace src.Api.Application.Controllers.v2
{
    [Route("api/v2/[controller]")]
    [ApiVersion("2", Deprecated = false)]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly ICountryConsumerV2Service _service;
        public CountriesController(ICountryConsumerV2Service service)
        {
            _service = service;
        }

        [HttpGet]
        [Authorize("Bearer")]
        public async Task<IActionResult> Get()
        {
            var result = await _service.GetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}", Name = "GetCountryWithId")]
        [Authorize("Bearer")]
        public async Task<IActionResult> GetCountryWithId([FromRoute] Guid id)
        {
            var result = await _service.GetById(id);
            return Ok(result);
        }

        [HttpPut]
        [Authorize("Bearer")]
        public async Task<ActionResult> Put([FromBody] CountryUpdateV2Dto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var result = await _service.Put(dto);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
            }
        }
    }
}
