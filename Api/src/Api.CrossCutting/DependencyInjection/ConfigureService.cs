using Api.Domain.Interfaces.Services.User;
using Api.Service.Services;
using Api.Service.Services.v1;
using Api.Service.Services.v2;
using Microsoft.Extensions.DependencyInjection;
using src.Api.Domain.Interfaces.Services.v1;
using src.Api.Domain.Interfaces.Services.v2;

namespace Api.CrossCutting.DependencyInjection
{
    public class ConfigureService
    {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IUserService, UserService>();
            serviceCollection.AddTransient<ILoginService, LoginService>();
            serviceCollection.AddTransient<ICountryConsumerService, CountryConsumerService>();
            serviceCollection.AddTransient<ICountryConsumerV2Service, CountryConsumerV2Service>();
        }
    }
}
