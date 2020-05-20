import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeDiv = styled.div`
  background-color: white;
  position:relative;
  height: 100%;
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

export const ViewButton = styled.button`
  margin-top: 5px;
  margin-left: 10px;
  float: right;
  outline: none;
  padding: 4px 8px;
  border: 0;
  border-radius: 0px;
  background: lightblue;
  font-size: 1em;
`;

export const EditButton = styled(FontAwesomeIcon)`
  margin-top: 6px;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  float: right;
`;
