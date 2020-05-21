using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Provider;
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
        public User Login(User userInfo)
        {
            var tokenProvider = new TokenProvider();
            var user = _userService.GetUserInfo(userInfo);

            var userToken = tokenProvider.LoginUser(user);
            HttpContext.Session.SetString("JWToken", userToken);

            return user;
        }

        public void Logoff()
        {
            HttpContext.Session.Clear();
        }
    }
}