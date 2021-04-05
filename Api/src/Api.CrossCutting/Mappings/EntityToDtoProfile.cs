using Api.Domain.Dtos.User;
using Api.Domain.Entities;
using AutoMapper;
using src.Api.Domain.Dtos.Country;

namespace Api.CrossCutting.Mappings
{
    public class EntityToDtoProfile : Profile
    {
        public EntityToDtoProfile()
        {
            CreateMap<UserDto, UserEntity>()
               .ReverseMap();

            CreateMap<UserDtoCreateResult, UserEntity>()
               .ReverseMap();

            CreateMap<UserDtoUpdateResult, UserEntity>()
               .ReverseMap();

            CreateMap<CountryDtoResult, CountryEntity>()
               .ReverseMap();



        }
    }
}
