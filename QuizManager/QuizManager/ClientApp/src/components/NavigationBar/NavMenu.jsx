import React, { Component } from "react";
import {
  Navbar,
  LogOutButton,
  UserContainer,
  HomeIcon,
  UserIcon,
  UsernameTag,
  UserDiv,
} from "./NavComponents.js";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <NavLink tag={Link} to="/">
            <HomeIcon icon={faHome} />
          </NavLink>
          <UserContainer>
            <UserDiv>
              <UserIcon icon={faUser} />
              <UsernameTag>{this.props.username}</UsernameTag>
            </UserDiv>
            <UserDiv>
              <LogOutButton onClick={this.props.logout} tag={Link} to="/">
                Logout
              </LogOutButton>
            </UserDiv>
          </UserContainer>
        </Navbar>
      </header>
    );
  }
}
