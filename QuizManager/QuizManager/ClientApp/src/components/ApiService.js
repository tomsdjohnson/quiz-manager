import $ from 'jquery';
window.jQuery = window.$ = $;

export class ApiService {

  login(password, username) {
    return new Promise((resolve, reject) =>
      fetch('login', {
         method: 'POST',
         body: JSON.stringify({ Username: username, Password: password }),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkIfSuccessful(response))
       .then(newProject => resolve(extractUserInfo(newProject)))
       .catch(e => reject(e))
     );
  }

  saveQuizChanges(quiz) {
    console.log("HERE", quiz)
    return new Promise((resolve, reject) =>
      fetch('quiz', {
         method: 'POST',
         body: JSON.stringify(quiz),
         headers: {'Content-Type': 'application/json'}
       })
       .then(response => checkIfSuccessful(response))
       .then(newProject => resolve(extractUserInfo(newProject)))
       .catch(e => reject(e))
     );
  }
  
}

const checkIfSuccessful = response => {
  if(response.ok){
    return response.json();
  }
  throw new Error("Incorrect username or password.");
}

const extractUserInfo = user => {
  return {
    username: user.username,
    userPermission: user.permissionLevel
  };
};