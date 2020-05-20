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

  login = (userLogin) => {
    this.apiService.login(userLogin)
    .then(userInfo => {
      this.initialize(userInfo);
    })
    .catch(e => {alert(e);})
  };

  initialize = userInfo => {
    this.setState({userInfo});
    this.apiService.getAllQuizzes()
    .then(quizzes => this.updateQuizzesState(quizzes));
    
    this.updateLoginState(LOGGED_IN);
  }

  updateQuizzesState = quizzes => {
    console.log(quizzes)
    this.setState({
      quizzes: quizzes
    });
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
    console.log(this.state.quizzes);

    return (
      <div>
        <NavMenu />
        <Container>
          <Route exact path='/'> 
            <HomePage quizzes={this.state.quizzes}/>
          </Route>
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
  quizzes: null,
  userInfo: {
    username: null,
    userPermission: null,
  }
};