using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Exceptions;
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
        public IActionResult Login(User userInfo)
        {
            try
            {
                var tokenProvider = new TokenProvider();
                var user = _userService.GetUserInfo(userInfo);

                var userToken = tokenProvider.LoginUser(user);
                HttpContext.Session.SetString("JWToken", userToken);

                return new OkObjectResult(user);
            }
            catch (LoginFailedException exception)
            {
                return new NotFoundObjectResult(exception.Message);
            }
        }

        [HttpPost]
        [Route("logout")]
        public void Logout()
        {
            HttpContext.Session.Clear();
        }
    }
}