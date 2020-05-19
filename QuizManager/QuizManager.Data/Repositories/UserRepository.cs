using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using QuizManager.Data.Context;
using QuizManager.Data.Models;
using QuizManager.Data.Exceptions;

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
            var user = await _context.Users
                .SingleOrDefaultAsync(u => u.Username == userLogin.Username && u.Password == userLogin.Password);

            if (user == null) throw new LoginFailedException();
            user.Password = null;

            return user;
        }
    }
}
