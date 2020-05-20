using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuizManager.Data.Context;
using QuizManager.Data.Models;

namespace QuizManager.Data.Repositories
{
    public interface IQuizRepository
    {
        void UploadQuiz(Quiz quiz);
        List<Quiz> GetAllQuizzes();
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
                var databaseQuiz = _context.Quizzes.Where(q => q.Id == quiz.Id)
                    .Include(q => q.Questions)
                    .ThenInclude(q => q.Answers).Single();

                databaseQuiz.Questions = quiz.Questions;
                databaseQuiz.Name = quiz.Name;



                // var databaseQuiz = _context.Quizzes.Single(q => q.Id == quiz.Id);
                // databaseQuiz.Questions = quiz.Questions;
                // databaseQuiz.Name = quiz.Name;
            }
            _context.SaveChanges();
        }

        public List<Quiz> GetAllQuizzes()
        {
            return _context.Quizzes
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers).ToList();
        }
    }
}