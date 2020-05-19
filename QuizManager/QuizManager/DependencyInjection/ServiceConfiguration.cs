using Microsoft.Extensions.DependencyInjection;
using QuizManager.Data.Context;
using QuizManager.Data.Repositories;
using QuizManager.Services;

namespace QuizManager.DependencyInjection
{
    public static class ServiceConfiguration
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();


            services.AddScoped<IQuizService, QuizService>();
            services.AddScoped<IQuizRepository, QuizRepository>();

            services.AddTransient(sp =>
            {
                var persistentConnectionString = "Server=(localdb)\\MSSQLLocalDB;Database=QuizManager;Trusted_Connection=True;";
                return new ContextFactory().Create(persistentConnectionString);
            });
        }
    }
}
