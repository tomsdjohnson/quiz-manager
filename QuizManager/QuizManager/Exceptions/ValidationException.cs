using System;

namespace QuizManager.Exceptions
{
    [Serializable]
    public class ValidationException : Exception
    {
        public ValidationException() : base("Validation of request failed")
        {
        }

        public ValidationException(string reason)
            : base($"Validation of request failed: {reason}")
        {
        }
    }
}