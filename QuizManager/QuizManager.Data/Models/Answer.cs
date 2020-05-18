using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuizManager.Data.Models
{
    public class Answer
    {
        public int Id { get; set; }

        [ForeignKey("QuestionId")]
        public Question Question { get; set; }

        public bool IsCorrect { get; set; }

        [Required]
        public string AnswerText { get; set; }
    }
}
