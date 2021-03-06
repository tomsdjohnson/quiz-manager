﻿using System.ComponentModel.DataAnnotations;

namespace QuizManager.Data.Models
{
    public class Answer
    {
        public int Id { get; set; }

        public Question Question { get; set; }

        [Required] public string AnswerText { get; set; }
    }
}