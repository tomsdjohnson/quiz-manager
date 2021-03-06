﻿using System.Linq;
using QuizManager.Data.Context;
using QuizManager.Data.Exceptions;
using QuizManager.Data.Models;

namespace QuizManager.Data.Repositories
{
    public interface IUserRepository
    {
        User GetUserInfo(User userLogin);
    }

    public class UserRepository : IUserRepository
    {
        private readonly QuizManagerContext _context;

        public UserRepository(QuizManagerContext context)
        {
            _context = context;
        }

        public User GetUserInfo(User userLogin)
        {
            var user = _context.Users
                .SingleOrDefault(u => u.Username == userLogin.Username && u.Password == userLogin.Password);

            if (user == null) throw new LoginFailedException();

            return user;
        }
    }
}