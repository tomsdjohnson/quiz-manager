using System;

namespace QuizManager.Exceptions
{
    [Serializable]
    public class LoginFailedException : Exception
    {
        public LoginFailedException() : base("Incorrect username or password")
        {
        }
    }
}