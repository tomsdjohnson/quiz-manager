using System.ComponentModel.DataAnnotations;

namespace QuizManager.Data.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public Permission PermissionLevel { get; set; }

    }
}
