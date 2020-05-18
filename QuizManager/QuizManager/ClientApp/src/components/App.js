import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { LoginScreen } from './login/LoginScreen'
import { ApiService } from './ApiService';

import '../custom.css'

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
    .catch(e => {
      alert(e);
      this.updateLoginState(LOGIN_FAILED);
    })
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
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}

// Login states
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGGED_OUT = 'LOGGED_OUT';
const LOGGED_IN = 'LOGGED_IN';

const BLANK_STATE = {
  loginState: LOGGED_OUT,
  userInfo: {
    username: null,
    userPermission: null,
  }
};