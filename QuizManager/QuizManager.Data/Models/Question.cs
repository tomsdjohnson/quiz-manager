using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuizManager.Data.Models
{
    public class Question
    {
        public int Id { get; set; }

        public Quiz Quiz { get; set; }

        [Required] public string QuestionText { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
    }
}