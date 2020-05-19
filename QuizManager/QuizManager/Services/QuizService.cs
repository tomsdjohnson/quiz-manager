using System;
using System.Linq;
using System.Threading.Tasks;
using QuizManager.Data.Models;
using QuizManager.Data.Repositories;
using QuizManager.Exceptions;

namespace QuizManager.Services
{
    public interface IQuizService
    {
        void UploadQuiz(Quiz quiz);
    }

    public class QuizService : IQuizService
    {
        private readonly IQuizRepository _quizRepository;
        public QuizService(IQuizRepository quizRepository)
        {
            _quizRepository = quizRepository;
        }

        public void UploadQuiz(Quiz quiz)
        {
            UploadValidation(quiz);
             _quizRepository.UploadQuiz(quiz);
        }

        private static void UploadValidation(Quiz quiz)
        {
            if (quiz.Name == null)
            {
                throw new ValidationException("A quiz must have a name");
            }

            foreach (var question in quiz.Questions)
            {
                if (question.QuestionText == null)
                {
                    throw new ValidationException("There must be question text");
                }

                if (question.Answers.Where(a => a.IsCorrect == true).Count() != 1)
                {
                    throw new ValidationException("There must be exactly one correct answer for a given question");
                }

                if (question.Answers.Count() < 3 || question.Answers.Count() > 5)
                {
                    throw new ValidationException("There must be between 3 and 5 answers for each question");
                }
            }

        }
    }
}