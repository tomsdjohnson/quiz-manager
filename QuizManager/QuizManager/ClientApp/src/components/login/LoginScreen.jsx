import React, { Component } from 'react';
import {
  LoginBox,
  LoginHeader,
  LoginDiv,
  UsernameInput,
  PasswordInput,
  LogInButton

} from './LoginComponants';

export class LoginScreen extends Component {
    constructor() {
      super();
  
      this.state = {
        username: '',
        password: '',
      };
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState({
          password: event.target.value
        });
    };

    handleSubmit = () => {
    

        // return new Promise(resolve =>
        //     fetch('login')
        //     .then(result => {
        //     console.log(result);
        //     })
        // );
    };

  render() {
    return (
      <LoginDiv>
        <LoginBox>
          <LoginHeader>
            User Login
          </LoginHeader>
          <UsernameInput 
                value={this.state.username}
                onChange={this.handleUsernameChange} />
          <PasswordInput 
                value={this.state.password}
                onChange={this.handlePasswordChange}/>
            <LogInButton onClick={this.handleSubmit}>
              Login
            </LogInButton>
        </LoginBox>
      </LoginDiv>
    );
  }
}
