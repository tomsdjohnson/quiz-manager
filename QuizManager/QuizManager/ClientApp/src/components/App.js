import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';

import '../custom.css'

export default class App extends Component {
  static displayName = App.name;

  // componentDidMount = () => {
  //   this.initialize();

  //   this.state = BLANK_STATE;
  //   this.toastClient.subscribeToUpdateCurrentUser(user =>
  //     this.updateUserData(user)
  //   );
  // };



  // initialize = token => {
  //   this.toastClient.start().then(() => {
  //     if (this.state.loginState === LOADING) {
  //       this.login().catch(() => this.updateLoginState(LOGGED_OUT));
  //     }
  //   });
  // };

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
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