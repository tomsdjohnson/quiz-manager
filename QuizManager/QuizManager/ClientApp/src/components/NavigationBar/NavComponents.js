import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.div`
  background-color: lightblue;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  height: 70px;
`;

export const UserContainer = styled.div`
  float: right;
  display: flex;
  flex-wrap: wrap;
`;

export const UserDiv = styled.div`
  width:100%;
`;

export const UsernameTag = styled.span`
  float: right;
  margin-right: 10px;
  font-size: 1.5em;
`;

export const LogOutButton = styled(NavLink)`
  float: right;
  font-size: 0.8em;
  color: black;
`;

export const UserIcon = styled(FontAwesomeIcon)`
  float: right;
  color: black;
  font-size: 1.5rem;
  margin-right: 5px;
  margin-top: 5px;
`;

export const HomeIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 2.8rem;
  margin-top: 5px;
`;
