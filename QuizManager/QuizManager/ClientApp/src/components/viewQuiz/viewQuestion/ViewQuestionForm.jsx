import React, { Component } from 'react';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
    QuestionDiv,
    QuestionTag,
    BodyContainer,
    AnswerContainer,
    AnswerPartTag,
    AnswerTag,
    CorrectAnswerIcon
} from './ViewQuestionComponents';

export class ViewQuestionForm extends Component {

    renderWrongInput = (answer, index) => {
        return(
            <AnswerContainer key={`${index}-Answer`}>
                <AnswerPartTag>{ANSWER_PARTS[index]}: </AnswerPartTag>
                <AnswerTag>{answer.answerText}</AnswerTag>
                {this.props.viewAnswer && answer.isCorrect && <CorrectAnswerIcon icon={faCheck}/>}
            </AnswerContainer>
        )
    }

  render () {
    return (
    <QuestionDiv>
        <QuestionTag >
            Q{this.props.index +1}: {this.props.question.questionText}
        </QuestionTag >

        <BodyContainer>
            {this.props.question.answers.map((answer, index) => this.renderWrongInput(answer, index))}
        </BodyContainer>
    </QuestionDiv>
    );
  }
}

const ANSWER_PARTS = ['A', 'B', 'C', 'D', 'E'];