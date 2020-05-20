import React, { Component } from 'react';
import {
  LoginBox,
  LoginHeader,
  LoginDiv,
  UsernameInput,
  PasswordInput,
  LogInButton

} from './LoginComponents';

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
      this.props.login(this.state)
    };

  render() {
    return (
      <LoginDiv>
        <LoginBox>
          <LoginHeader>
            User Login
          </LoginHeader>
          <UsernameInput 
                placeholder={"Username"}
                value={this.state.username}
                onChange={this.handleUsernameChange} />
          <PasswordInput 
                placeholder={"Password"}
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
