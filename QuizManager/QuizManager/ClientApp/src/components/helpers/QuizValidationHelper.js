const isQuestionValid = (question) => {
  if (question.questionText) {
    if (
      !question.answers.includes(null) &&
      !question.answers.filter((answer) => answer.answerText === "")
    ) {
      return true;
    }
  }
  return false;
};

export const isNameValid = (name) => {
  return name ? true : false;
};

export const areQuestionsValid = (questions) => {
  var response = questions.map((question) => isQuestionValid(question));
  return response.includes(false) ? false : true;
};
