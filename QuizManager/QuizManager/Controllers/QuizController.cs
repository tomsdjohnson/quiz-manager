using System.Collections.Generic;
using System.Linq;
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
        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpPost]
        public Task UploadQuiz(Quiz quiz)
        {
            _quizService.UploadQuiz(quiz);
            return Task.CompletedTask;
        }


        [HttpGet]
        public List<Quiz> GetAllQuizzes()
        {
            var re = _quizService.GetAllQuizzes();
            return re;
        }
    }
}