import styled, { css } from "styled-components";
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

export const EditQuizDiv = styled.div`
  background-color: white;
  position: relative;
  height: 100%;
`;

// Components for EditQuizTitle.jsx

export const QuizTitleContainer = styled.div`
  display block;
  height: 180px;
  padding: 12px;
  margin:20px;
  border-bottom: 3px solid #dddddd;
`;

export const QuizInput = styled.input.attrs({ type: "text" })`
  ${genericInputStyle};
  font-size: 2.5rem;
`;

export const QuizNameTag = styled.span`
  font-size: 3em;
  font-weight: bold;
`;

// Components for EditQuizQuestions.jsx

export const QuestionsContainer = styled.div`
  display block;
  padding: 10px;
  flex-wrap: wrap;
  display: flex;
  margin:20px;
`;

export const AddQuestionDiv = styled.div`
  height: 245px;
  width: 50%;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const AddQuestionButton = styled(FontAwesomeIcon)`
  font-size: 3em;
  cursor: pointer;
  outline: none;
`;

export const SaveButton = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  outline: none;
  font-size: 3em;
  right: 80px;
  top: 25px;
`;

export const ExitButton = styled(FontAwesomeIcon)`
  color: black;
  position: absolute;
  cursor: pointer;
  outline: none;
  font-size: 3em;
  right: 30px;
  top: 25px;
`;
