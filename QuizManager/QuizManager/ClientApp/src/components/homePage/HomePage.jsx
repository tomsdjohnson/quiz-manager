import React, { Component } from 'react';
import { ApiService } from '../ApiService';
import {
  HomeDiv

} from './HomeComponents';

export class HomePage extends Component {
  constructor() {
    super();

    this.apiService = new ApiService();
  }

  componentDidMount = () => {
    this.apiService.getAllQuizzes()
  };

  render () {
    return (
      <HomeDiv>
        <h1>Hello, world!</h1>
      </HomeDiv>
    );
  }
}
