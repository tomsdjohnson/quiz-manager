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
        public User GetUserInfo(User user)
        {
            return _userService.GetUserInfo(user);
        }
    }
}
