using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Provider;
using QuizManager.Services;

namespace QuizManager.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public User Login(User userInfo)
        {

            var tokenProvider = new TokenProvider();
            var user = _userService.GetUserInfo(userInfo);

            var userToken = tokenProvider.LoginUser(user);
            HttpContext.Session.SetString("JWToken", userToken);

            return user;
        }

        [HttpPost]
        [Route("logout")]
        public void Logoff()
        {
            HttpContext.Session.Clear();
        }
    }
}