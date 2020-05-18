using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizManager.Data.Models
{
    public class Question
    {
        public int Id { get; set; }

        [ForeignKey("QuizId")]
        public Quiz Quiz { get; set; }

        public int Position { get; set; }

        [Required]
        public int QuestionText { get; set; }
    }
}
