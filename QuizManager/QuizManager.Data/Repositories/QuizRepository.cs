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
        void DeleteQuiz(int? quizId);
        void DeleteQuestionsAndAnswers(Quiz quiz);
        List<Quiz> GetAllQuizzes();
        List<Quiz> GetAllQuizzesWithAnswers();
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
                _context.Update(quiz);
            }

            _context.SaveChanges();
        }

        public void DeleteQuiz(int? quizId)
        {
            var quiz = _context.Quizzes.Single(q => q.Id == quizId);
            _context.Quizzes.Remove(quiz);
            _context.SaveChanges();
        }

        public List<Quiz> GetAllQuizzesWithAnswers()
        {
            return _context.Quizzes
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers).ToList();
        }

        public List<Quiz> GetAllQuizzes()
        {
            return _context.Quizzes
                .Include(q => q.Questions)
                .ToList();
        }

        public void DeleteQuestionsAndAnswers(Quiz quiz)
        {
            var oldQuiz = _context.Quizzes
                .Include(q => q.Questions)
                .ThenInclude(q => q.Answers)
                .Single(r => r.Id == quiz.Id);

            foreach (var question in oldQuiz.Questions)
            {
                var newQuestion = quiz.Questions.SingleOrDefault(q => q.Id == question.Id);

                if (newQuestion == null)
                {
                    _context.Questions.Remove(question);
                }
                else
                {
                    foreach (var answer in question.Answers)
                    {
                        if (newQuestion.Answers.SingleOrDefault(a => a.Id == answer.Id) == null)
                        {
                            _context.Answers.Remove(answer);
                        }
                    }
                }
            }

            _context.SaveChanges();
        }
    }
}