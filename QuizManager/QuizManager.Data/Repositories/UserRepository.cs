using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QuizManager.Data.Context;
using QuizManager.Data.Models;

namespace QuizManager.Data.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserInfo(User userLogin);
    }

    public class UserRepository : IUserRepository
    {
        private readonly QuizManagerContext _context;

        public UserRepository(QuizManagerContext context)
        {
            this._context = context;
        }

        public async Task<User> GetUserInfo(User userLogin)
        {
            var user = await _context.Users.SingleAsync(r => r.Username == userLogin.Username && r.Password == userLogin.Password);
            return user;
        }
    }
}
