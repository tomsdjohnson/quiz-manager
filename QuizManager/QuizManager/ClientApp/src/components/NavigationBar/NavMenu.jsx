import React, { Component } from 'react';
import { Navbar, NavbarLink } from './NavComponents.js';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar>
            <NavbarLink tag={Link} to="/edit">QuizManager</NavbarLink>
            <NavbarLink tag={Link} to="/">Home</NavbarLink>
        </Navbar>
      </header>
    );
  }
}
