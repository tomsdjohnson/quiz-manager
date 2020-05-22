export class ApiService {

  login(userLogin) {
    return new Promise(resolve =>
      fetch('user/login', {
         method: 'POST',
         body: JSON.stringify(userLogin),
         headers: {
          'Content-Type': 'application/json'
         }
       })
       .then(response => checkResponse(response))
       .then(response => resolve(response.json()))
       .catch(error => alert(error))
     )
  }

  logout() {
      fetch('user/logout', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        }
      })
  }

  saveQuizChanges(quiz) {
    fetch('quiz', {
        method: 'POST',
        body: JSON.stringify(quiz),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => checkResponse(response))
      .catch(error => alert(error))
  }

  deleteQuizContent(quiz) {
    return new Promise( resolve  =>
      fetch('quiz/delete-quiz-content', {
         method: 'DELETE',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
       .then(response => resolve(response.text()))
       .catch(error => alert(error))
     );
  }

  deleteQuiz(quiz) {
      fetch('quiz/delete-quiz', {
         method: 'DELETE',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
  }

  getAllQuizzes(userInfo) {
    var path = userInfo.permissionLevel < 3 ? "all-quizzes-and-answers" : "all-quizzes";
    return new Promise(resolve  =>
      fetch('quiz/' + path)
       .then(response => response.json())
       .then(quizzes => resolve(quizzes))
     )
  }
}

const checkResponse = response => {
  if(response.ok){
    return response
  }
  return response.text()
  .then(e =>{throw new Error(e)})
}
