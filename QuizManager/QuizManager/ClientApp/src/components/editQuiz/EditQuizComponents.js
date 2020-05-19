import styled, { css } from 'styled-components';

export const EditQuizDiv = styled.div`
  background-color: white;
  position:relative;
  height: 100%;
`;

const genericInputStyle = css`
  margin: 0 auto;
  background-color: #eeeeee;
  width: 100%;
  padding-left: 8px;
  border: none;
  outline: none;
  white-space: nowrap;
`;


export const SaveButton = styled.button`
  position: absolute;
  background-color: #dddddd;
  height: 50px;
  width: 100px;
  border: none;
  outline: none;
  text-align: center;
  display: block;
  font-size: 2em;
  right: 30px;
  top: 20px;
`;

// Components for QuestionForm.jsx

export const QuestionsDiv = styled.div`
  background-color: lightblue;
  width: 50%;
  border: 5px solid white;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const MultipleInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 20px 20px 20px;
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

export const WrongInput = styled.input.attrs({ type: 'text' })`
  ${genericInputStyle};
  max-width: 48%;
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const QuestionTag = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

export const CorrectAnswerTag = styled.span`
  font-size: 1em;
  white-space: nowrap;
`;

export const WrongAnswerTag = styled.span`
  font-size: 1em;
  white-space: nowrap;
  margin:5px 20px;
`;

// Components for QuizTitleEdit.jsx

export const QuizTitleContainer = styled.div`
  display block;
  height: 180px;
  padding: 12px;
  margin:20px;
  border-bottom: 3px solid #dddddd;
`;

export const QuizInput = styled.input.attrs({ type: 'text' })`
  ${genericInputStyle};
  font-size: 2.5rem;
`;

export const QuizNameTag = styled.span`
  font-size: 3em;
  font-weight: bold;
`;


// Components for QuestionsEdit.jsx

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

export const AddQuestionButton = styled.button`
  font-weight: bold;
  background-color: #dddddd;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  text-align: center;
  display: block;
  font-size: 2em;
  border-radius: 50%;
`;
