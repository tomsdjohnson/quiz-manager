import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.div`
  background-color: lightblue;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  max-height: 60px;
`;

export const NavbarLink = styled(NavLink)`
  
`;