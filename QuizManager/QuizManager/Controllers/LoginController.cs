using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Services;

namespace QuizManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IUserService userService;

        public LoginController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public async Task<User> Get()
        {
            var rng = new Random();
            await userService.GetUserInfo(new User()
            {
                Username = "test",
                Password = "test",
                PermissionLevel = Permission.Edit
            });
            return new User();
        }
    }
}
