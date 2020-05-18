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
  
}

const checkIfSuccessful = response => {
  if(response.ok){
    return response.json();
  }
  throw new Error("Wrong Password");
}

const extractUserInfo = user => {
  return {
    username: user.username,
    userPermission: user.permissionLevel
  };
};