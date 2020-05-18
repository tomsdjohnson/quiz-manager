using Microsoft.EntityFrameworkCore;
using QuizManager.Data.Models;

namespace QuizManager.Data.Context
{
    public class QuizManagerContext : DbContext
    {
        public QuizManagerContext(DbContextOptions<QuizManagerContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(d => d.Username)
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
    }
}
