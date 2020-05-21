using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuizManager.Data.Models;
using QuizManager.Data.Repositories;
using QuizManager.Exceptions;

namespace QuizManager.Services
{
    public interface IQuizService
    {
        void DeleteQuizContent(Quiz quiz);
        void DeleteQuiz(Quiz quiz);
        void UploadQuiz(Quiz quiz);
        List<Quiz> GetAllQuizzes();
    }

    public class QuizService : IQuizService
    {
        private readonly IQuizRepository _quizRepository;
        public QuizService(IQuizRepository quizRepository)
        {
            _quizRepository = quizRepository;
        }

        public void DeleteQuiz(Quiz quiz)
        {
            _quizRepository.DeleteQuiz(quiz.Id);
        }

        public void DeleteQuizContent(Quiz quiz)
        {
            UploadValidation(quiz);
            _quizRepository.DeleteQuestionsAndAnswers(quiz);
        }

        public List<Quiz> GetAllQuizzes()
        {
           return _quizRepository.GetAllQuizzes();
        }

        public void UploadQuiz(Quiz quiz)
        {
            UploadValidation(quiz);
            _quizRepository.UploadQuiz(quiz);
        }

        private static void UploadValidation(Quiz quiz)
        {
            if (string.IsNullOrEmpty(quiz.Name))
            {
                throw new ValidationException("A quiz must have a name");
            }

            foreach (var question in quiz.Questions)
            {
                if (string.IsNullOrEmpty(question.QuestionText))
                {
                    throw new ValidationException("There must be question text");
                }

                if (question.Answers.Where(a => a != null).Count(a => a.IsCorrect == true) != 1)
                {
                    throw new ValidationException("There must be exactly one correct answer for a given question");
                }

                if (question.Answers.Count(a => a != null) < 3 || question.Answers.Count(a => a != null) > 5)
                {
                    throw new ValidationException("There must be between 3 and 5 answers for each question");
                }
            }

        }
    }
}