import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeDiv = styled.div`
  background-color: white;
  position:relative;
  height: 100%;
  padding-bottom: 5px;
`;

export const HomeTitleContainer = styled.div`
  display block;
  height: 100px;
  padding: 12px;
  margin:20px;
  border-bottom: 3px solid #dddddd;
`;

export const HomeTitleTag = styled.span`
  font-size: 3em;
  font-weight: bold;
`;

export const QuizTitleTag = styled.span`
  font-size: 2em;
`;

export const QuizzesContainer = styled.div`
  width: 100%;
`;

export const QuizDiv = styled.div`
  margin: 10px 20px;
  border-bottom: 1.5px solid #dddddd;
`;

export const ViewTag = styled.span`
  color: black;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 15px;
  float: right;
  padding: 4px 8px;
  background: lightblue;
  font-size: 1em;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: black;
  margin-top: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  float: right;
`;

export const AddQuestionIcon = styled(FontAwesomeIcon)`
  color: black;
  margin: 15px;
  float: right;
  font-size: 3em;
  cursor: pointer;
  outline: none;
`;
