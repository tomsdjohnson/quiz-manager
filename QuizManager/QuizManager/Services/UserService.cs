using System;
using System.Security.Cryptography;
using System.Text;
using QuizManager.Data.Models;
using QuizManager.Data.Repositories;

namespace QuizManager.Services
{
    public interface IUserService
    {
        User GetUserInfo(User user);
    }

    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User GetUserInfo(User user)
        {
            user.Password = HashPassword(user.Password);
            user = _userRepository.GetUserInfo(user);
            user.Password = null;
            return user;
        }

        private static string HashPassword(string password)
        {
            using var sha = new SHA256Managed();
            var textData = Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(textData);
            return BitConverter.ToString(hash).Replace("-", string.Empty);
        }
    }
}