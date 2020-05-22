using Microsoft.EntityFrameworkCore;
using QuizManager.Data.Models;

namespace QuizManager.Data.Context
{
    public class QuizManagerContext : DbContext
    {
        public QuizManagerContext(DbContextOptions<QuizManagerContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(d => d.Username)
                .IsUnique();

            modelBuilder.Entity<Question>()
                .HasOne<Quiz>()
                .WithMany(q => q.Questions)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Answer>()
                .HasOne<Question>()
                .WithMany(q => q.Answers)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}