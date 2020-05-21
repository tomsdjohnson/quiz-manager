using System;

namespace QuizManager.Data.Exceptions
{
    [Serializable]
    public class LoginFailedException : Exception
    {
        public LoginFailedException() : base("Incorrect username or password")
        {
        }
    }
}