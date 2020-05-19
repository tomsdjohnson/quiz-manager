using System;
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
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> GetUserInfo(User user)
        {
            user.Password = HashPassword(user.Password);
            return await _userRepository.GetUserInfo(user);
        }

        private static string HashPassword(string password)
        {
            using var sha = new System.Security.Cryptography.SHA256Managed();
            var textData = System.Text.Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(textData);
            return BitConverter.ToString(hash).Replace("-", String.Empty);
        }
    }
}
