import React, { Component } from 'react';
import {
    QuestionDiv,
    QuestionTag,
    BodyContainer,
    AnswerContainer,
    AnswerPartTag,
    AnswerTag
} from './ViewQuestionComponents';

export class ViewQuestionForm extends Component {

    renderAnswers = (answer, index) => {
        return(
            <AnswerContainer key={`${index}-Answer`}>
                <AnswerPartTag>{ANSWER_PARTS[index]}: </AnswerPartTag>
                <AnswerTag>{answer.answerText}</AnswerTag>
            </AnswerContainer>
        )
    }

  answersBuilder = () => {
        return this.props.question.answers.map((answer, index) => this.renderAnswers(answer, index))
  }

  render () {
    return (
    <QuestionDiv>
        <QuestionTag >
            Q{this.props.index +1}: {this.props.question.questionText}
        </QuestionTag >
        <BodyContainer>
            {this.props.permissionLevel !== 3 && this.answersBuilder()}
        </BodyContainer>
    </QuestionDiv>
    );
  }
}

const ANSWER_PARTS = ['A', 'B', 'C', 'D', 'E'];