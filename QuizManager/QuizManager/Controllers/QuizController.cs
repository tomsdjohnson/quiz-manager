using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;
using QuizManager.Exceptions;
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
        [Authorize(Policy = "Edit")]
        public IActionResult UploadQuiz(Quiz quiz)
        {
            try
            {
                _quizService.UploadQuiz(quiz);
                return new OkResult();
            }
            catch (ValidationException exception)
            {
                return new BadRequestObjectResult(exception.Message);
            }
        }

        [HttpDelete]
        [Authorize(Policy = "Edit")]
        [Route("delete-quiz-content")]
        public IActionResult DeleteQuizContent(Quiz quiz)
        {
            try
            {
                _quizService.DeleteQuizContent(quiz);
                return new OkObjectResult("Quiz saved successfully!");
            }
            catch (ValidationException exception)
            {
                return new BadRequestObjectResult(exception.Message);
            }
        }

        [HttpGet]
        [Authorize]
        [Route("all-quizzes")]
        public List<Quiz> GetAllQuizzes()
        {
            return _quizService.GetAllQuizzes();
        }

        [HttpGet]
        [Authorize(Policy = "View")]
        [Route("all-quizzes-and-answers")]
        public List<Quiz> GetAllQuizzesWithAnswers()
        {
            return _quizService.GetAllQuizzesWithAnswers();
        }

        [HttpDelete]
        [Authorize(Policy = "Edit")]
        [Route("delete-quiz")]
        public void DeleteQuiz(Quiz quiz)
        {
            _quizService.DeleteQuiz(quiz);
        }
    }
}