import React, { Component } from 'react';
import { LoginScreen } from './login/LoginScreen'

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  render() {
    return (
      <LoginScreen />
    );
  }

  async populateWeatherData() {
    return new Promise(resolve =>
        fetch('login')
        .then(result => {
        console.log(result);
        })
    );
  }
}
