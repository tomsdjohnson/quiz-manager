import React, { Component } from 'react';
import { Navbar, NavbarLink, UserContainer, UserIcon, UsernameTag, LogOutButton } from './NavComponents.js';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export class NavMenu extends Component {

  render () {
    return (
      <header>
        <Navbar>
            <NavbarLink tag={Link} to="/">Home</NavbarLink>
            <UserContainer>
              <UserIcon icon={faUser} />
              <UsernameTag>
                {this.props.username}
              </UsernameTag>
              <LogOutButton onClick={this.props.logout}>
                Logout
              </LogOutButton>
            </UserContainer>
        </Navbar>
      </header>
    );
  }
}
