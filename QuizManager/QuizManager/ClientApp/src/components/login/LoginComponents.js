import styled, { css } from 'styled-components';
import { QUIZ_MANAGER_COLORS } from '../colorPalette.js';

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginBox = styled.div`
  background-color: white;
  width: 454px;
  min-height: 160px;
  padding: 4px 12px 20px;
  justify-content: center;
  margin: 0 20px;
`;

export const LoginHeader = styled.div`
  text-align: center;
  display: block;
  color: black;
  font-size: 2em;
  margin: 20px;
  fo
`;

const genericInputStyle = css`
    margin: 0 auto;
    display: block;
    background-color: #eeeeee;
    width: 50%;
    font-size: 16px;
    padding: 6px 2px;
    border: none;
    outline: none;
    margin-bottom: 10px;
`;


export const UsernameInput = styled.input.attrs({ type: 'text' })`
    ${genericInputStyle};
`;

export const PasswordInput = styled.input.attrs({ type: 'password' })`
    ${genericInputStyle};
    margin-bottom: 20px;
`;

export const LogInButton = styled.button`
  background: ${QUIZ_MANAGER_COLORS.PrimaryComponentColor};
  color: ${QUIZ_MANAGER_COLORS.PrimaryComponentTextColor};
  display: block;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  padding: 4px 8px;
  border: 0;
  border-radius: 0px;
  font-size: 16px;
`;
