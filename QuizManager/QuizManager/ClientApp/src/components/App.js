import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container } from 'reactstrap';
import { NavMenu } from './NavigationBar/NavMenu'
import { HomePage } from './homePage/HomePage';
import { LoginScreen } from './login/LoginScreen'
import { ApiService } from './ApiService';
import { EditQuizPage } from './editQuiz/EditQuizPage';

export default class App extends Component {
  constructor() {
    super();

    this.apiService = new ApiService();
    this.state = BLANK_STATE;
  }

  login = (password, username) => {
    this.apiService.login(password, username)
    .then(userInfo => {
      this.setState({userInfo});
      this.updateLoginState(LOGGED_IN);
    })
    .catch(e => {alert(e);})
  };

  updateUserData = userData => {
    console.log(userData);
  };

  updateLoginState = newState => {
    this.setState({
      loginState: newState
    });
  };

  render () {
    if (this.state.loginState !== LOGGED_IN) {
      return <LoginScreen login={this.login} loginState={this.state.loginState} />;
    }

    return (
      <div>
        <NavMenu />
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/edit' component={EditQuizPage} />
        </Container>
      </div>
    );
  }
}

// Login states
const LOGGED_OUT = 'LOGGED_OUT';
const LOGGED_IN = 'LOGGED_IN';

const BLANK_STATE = {
  loginState: LOGGED_OUT,
  userInfo: {
    username: null,
    userPermission: null,
  }
};