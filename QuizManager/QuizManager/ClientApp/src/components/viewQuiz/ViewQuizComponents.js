import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ViewQuizDiv = styled.div`
background-color: white;
position:relative;
height: 100%;
`;

export const QuizTitleContainer = styled.div`
  display block;
  padding: 12px;
  margin:20px;
  border-bottom: 3px solid #dddddd;
`;

export const QuestionsContainer = styled.div`
  display block;
  padding: 10px;
  flex-wrap: wrap;
  display: flex;
  margin:20px;
`;

export const QuizNameTag = styled.span`
  font-size: 3em;
  font-weight: bold;
`;

export const ViewButton = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  outline: none;
  font-size: 3em;
  right: 30px;
  top: 25px;
`;