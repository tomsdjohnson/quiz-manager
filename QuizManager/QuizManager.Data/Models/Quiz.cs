using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuizManager.Data.Models
{
    public class Quiz
    {
        public int? Id { get; set; }

        [Required] public string Name { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
    }
}