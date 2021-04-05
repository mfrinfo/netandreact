using Api.Domain.Dtos.User;
using Api.Domain.Models;
using AutoMapper;
using src.Api.Domain.Dtos.Country;

namespace Api.CrossCutting.Mappings
{
    public class DtoToModelProfile : Profile
    {
        public DtoToModelProfile()
        {
            CreateMap<UserModel, UserDto>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoCreate>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoUpdate>()
                .ReverseMap();
            CreateMap<CountryModel, CountryUpdateDto>()
                .ReverseMap();
            CreateMap<CountryModel, CountryUpdateV2Dto>()
                .ReverseMap();
        }
    }
}
