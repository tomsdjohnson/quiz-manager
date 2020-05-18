using System.Threading.Tasks;
using QuizManager.Data.Models;
using QuizManager.Data.Repositories;

namespace QuizManager.Services
{
    public interface IUserService
    {
        Task<User> GetUserInfo(User user);
    }

    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;
        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public async Task<User> GetUserInfo(User user)
        {
            return await userRepository.GetUserInfo(user);
        }
    }
}
