using System.Collections.Generic;
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

        [HttpDelete]
        [Route("delete-quiz-content")]
        public Task DeleteQuizContent(Quiz quiz)
        {
             _quizService.DeleteQuizContent(quiz);
            return Task.CompletedTask;
        }


        [HttpGet]
        public List<Quiz> GetAllQuizzes()
        {
            return _quizService.GetAllQuizzes();
        }

        [HttpDelete]
        [Route("delete-quiz")]
        public Task DeleteQuiz(Quiz quiz)
        {
            _quizService.DeleteQuiz(quiz);
            return Task.CompletedTask;
        }
    }
}