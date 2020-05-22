import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container } from 'reactstrap';
import { NavMenu } from './NavigationBar/NavMenu';
import { HomePage } from './homePage/HomePage';
import { ApiService } from './ApiService';
import { LoginScreen } from './login/LoginScreen'
import { EditQuizPage } from './editQuiz/EditQuizPage';
import { ViewQuizPage } from './viewQuiz/ViewQuizPage';

export default class App extends Component {
  constructor() {
    super();
    
    this.apiService = new ApiService();
    this.state = BLANK_STATE;
  }

  login = (userLogin) => {
    this.apiService.login(userLogin)
    .then(userInfo => {
      this.initialize(userInfo);
    })
    .catch(e => alert('Login failed'))
  };

  logout = () => {
    this.updateLoginState(LOGGED_OUT);
  };

  initialize = userInfo => {
    this.setState({userInfo});
    this.updateLoginState(LOGGED_IN);
  }

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
        <NavMenu 
          username={this.state.userInfo.username}
          logout={this.logout}
        />
        <Container>
          <Route exact path='/'> 
          <HomePage userInfo={this.state.userInfo}/>
          </Route>
          <Route exact path='/edit' component={EditQuizPage} />
          <Route exact path='/view' component={ViewQuizPage} />
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
    userPermission: null
  }
};