import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.div`
  background-color: lightblue;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  max-height: 60px;
`;

export const UserContainer = styled.div`
  margin-top: 8px;
  float: right;
`;

export const NavbarLink = styled(NavLink)`
  font-size: 2em;
  font-weight: bold;
  color: black;
`;

export const UserIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 1.5rem;
  margin-right: 5px;
  margin-top: 5px;
`;

export const UsernameTag = styled.span`
  margin-right: 10px;
  font-size: 1.5em;
`;

export const LogOutButton = styled.span`
  margin-right: 10px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 0.8em;
`;