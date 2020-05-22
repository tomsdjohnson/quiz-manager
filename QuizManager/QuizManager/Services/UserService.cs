using System;
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
            using var sha = new System.Security.Cryptography.SHA256Managed();
            var textData = System.Text.Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(textData);
            return BitConverter.ToString(hash).Replace("-", String.Empty);
        }
    }
}