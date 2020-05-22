import styled from 'styled-components';

export const QuestionDiv = styled.div`
  width: 50%;
  padding: 10px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const QuestionTag = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

export const AnswerPartTag = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

export const AnswerTag = styled.span`
  font-size: 1em;
`;

export const BodyContainer = styled.div`
  padding-bottom: 10px;
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 3px solid #dddddd;
`;

export const AnswerContainer = styled.div`
  width: 50%;
  font-size: 1em;
`;
