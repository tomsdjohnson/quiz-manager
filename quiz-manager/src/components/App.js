import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.initialize();

    this.toastClient.subscribeToUpdateCurrentUser(user =>
      this.updateUserData(user)
    );
  };
  
  render() {
    if (this.state.loginState === LOGGED_OUT) {
      return <LoginScreen />;
    }

    return (
      <HomePage
        logOut={this.logOut}
        showInstallPrompt={this.showInstallPrompt}
        installPrompt={this.state.installPrompt}
        userInfo={this.state.userInfo}
        toastClient={this.toastClient}
      />
    );
  }
}

// Login states
const LOADING = 'LOADING';
const LOGGED_OUT = 'LOGGED_OUT';
const PENDING = 'PENDING';
const LOGGED_IN = 'LOGGED_IN';

const BLANK_STATE = {
  installPrompt: false,
  loginState: LOGGED_OUT,
  userInfo: {
    userName: null,
    userId: null,
  }
};

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );