using System.Linq;
using QuizManager.Data.Context;
using QuizManager.Data.Models;

namespace QuizManager.Data.Repositories
{
    public interface IQuizRepository
    {
        void UploadQuiz(Quiz quiz);
    }

    public class QuizRepository : IQuizRepository
    {
        private readonly QuizManagerContext _context;

        public QuizRepository(QuizManagerContext context)
        {
            _context = context;
        }

        public void UploadQuiz(Quiz quiz)
        {
            if (quiz.Id == null)
            { 
                _context.Quizzes.Add(quiz);
            }
            else
            {
                var databaseQuiz = _context.Quizzes.Single(q => q.Id == quiz.Id);
                databaseQuiz.Questions = quiz.Questions;
                databaseQuiz.Name = quiz.Name;
            }
            _context.SaveChanges();
        }
    }
}