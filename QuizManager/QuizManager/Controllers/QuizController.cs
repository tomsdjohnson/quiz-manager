using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizManager.Data.Models;

namespace QuizManager.Controllers
{
    [ApiController]
    [Route("quiz")]
    public class QuizController : ControllerBase
    {

        [HttpPost]
        public Task uploadQuiz(Quiz quiz)
        {

            Console.WriteLine(quiz);
            return null;
        }
    }
}