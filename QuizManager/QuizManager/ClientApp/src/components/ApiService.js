import $ from 'jquery';
window.jQuery = window.$ = $;

export class ApiService {

  login(userLogin) {
    return new Promise((resolve, reject) =>
      fetch('login', {
         method: 'POST',
         body: JSON.stringify(userLogin),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkResponse(response))
       .then(users => resolve(extractUserInfo(users)))
       .catch(e => reject(e))
     );
  }

  saveQuizChanges(quiz) {
    return new Promise(resolve  =>
      fetch('quiz', {
         method: 'POST',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => resolve(response))
     );
  }

  getAllQuizzes() {
    return new Promise(resolve  =>
      fetch('quiz')
       .then(response => response.json())
       .then(allQuizzes => resolve(allQuizzes))
     );
  }
  
}

const checkResponse = response => {
  if(!response.ok){
    throw new Error('Login failed');
  }
  return response.json()
}

const extractUserInfo = user => {
  console.log(user);
  return {
    username: user.username,
    userPermission: user.permissionLevel
  };
};