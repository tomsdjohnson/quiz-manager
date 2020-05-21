export class ApiService {

  login(userLogin) {
    return new Promise(resolve =>
      fetch('login', {
         method: 'POST',
         body: JSON.stringify(userLogin),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
       .then(response => resolve(response.json()))
     )
  }

  saveQuizChanges(quiz) {
    return new Promise(resolve  =>
      fetch('quiz', {
         method: 'POST',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
       .then(response => resolve(response))
     );
  }

  deleteQuizContent(quiz) {
    return new Promise(resolve  =>
      fetch('quiz/delete-quiz-content', {
         method: 'DELETE',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
       .then(response => resolve(response))
     );
  }

  deleteQuiz(quiz) {
    return new Promise(resolve  =>
      fetch('quiz/delete-quiz', {
         method: 'DELETE',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
     );
  }

  getAllQuizzes() {
    return new Promise(resolve  =>
      fetch('quiz')
       .then(response => checkResponse(response))
       .then(response => resolve(response.json()))
     )
  }
}

const checkResponse = response => {
  if(!response.ok){
    throw new Error();
  }
  return response;
}
