using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Services;

namespace QuizManager.Controllers
{
    [ApiController]
    [Route("quiz")]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService _userService;

        public QuizController(IQuizService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public Task UploadQuiz(Quiz quiz)
        {
            _userService.UploadQuiz(quiz);
            return Task.CompletedTask;
        }
    }
}