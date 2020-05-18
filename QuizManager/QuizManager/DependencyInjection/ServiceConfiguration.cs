using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QuizManager.Data.Context;
using QuizManager.Data.Repositories;
using QuizManager.Services;

namespace QuizManager.DependencyInjection
{
    public static class ServiceConfiguration
    {
        public static void RegisterDataServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();

            services.AddScoped(sp =>
            {
                var persistentConnectionString = sp.GetService<IConfiguration>().GetSection("ConnectionStrings")["Sql"];
                return new ContextFactory().Create("Server=(localdb)\\MSSQLLocalDB;Database=QuizManager;Trusted_Connection=True;");
            });
        }
    }
}
