import styled, { css } from 'styled-components';

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
  font-size: 30px;
  margin: 20px;
`;

const genericInputStyle = css`
    margin: 0 auto;
    display: block;
    background-color: gainsboro;
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
`;

export const LogInButton = styled.button`
  margin-bottom: 20px;
  margin-top: 10px;
  display: block;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  padding: 4px 8px;
  border: 0;
  border-radius: 0px;
  background: PaleGreen;
  color: white;
  font-size: 16px;
`;
