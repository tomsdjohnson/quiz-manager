using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Services;

namespace QuizManager.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {
        private readonly IUserService _userService;

        public LoginController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<User> GetUserInfo(User user)
        {
            return await _userService.GetUserInfo(user);
        }
    }
}
