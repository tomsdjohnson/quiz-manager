import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const genericInputStyle = css`
  margin: 0 auto;
  background-color: #eeeeee;
  width: 100%;
  padding-left: 8px;
  border: none;
  outline: none;
  white-space: nowrap;
`;

// Components for EditQuestionForm.jsx

export const QuestionDiv = styled.div`
  width: 50%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  display: flex;
  margin:20px;
`;

export const QuestionInput = styled.input.attrs({ type: 'text' })`
  ${genericInputStyle};
  margin-left: 5px;
  font-size: 1.5rem;
`;

export const CorrectInput = styled.input.attrs({ type: 'text' })`
  ${genericInputStyle};
  margin-left: 5px;
  font-size: 1rem;
`;

export const QuestionTag = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

export const WrongAnswerTag = styled.span`
  font-size: 1em;
  white-space: nowrap;
  margin:5px 20px;
`;

export const CorrectAnswerTag = styled.span`
  font-size: 1em;
  white-space: nowrap;
`;

export const DeleteQuestionButton = styled(FontAwesomeIcon)`
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  right: 30px;
  margin-left: 10px;
`;

// Components for EditWrongAnswers.jsx

export const MultipleInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 15px 20px 20px;
  border-bottom: 3px solid #dddddd;
`;

export const WrongInput = styled.input.attrs({ type: 'text' })`
  ${genericInputStyle};
  max-width: 100%;
  font-size: 1rem;
  margin-right: 5px;
`;

export const AddAnswerButton = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const DeleteAnswerButton = styled(FontAwesomeIcon)`
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  margin-right: 5px;
`;

export const WrongAnswerContainer = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 5px;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;