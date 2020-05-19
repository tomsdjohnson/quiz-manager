import React, { Component } from 'react';
import { QuestionForm } from './QuestionForm'
import { QuestionsContainer, AddQuestionButton, AddQuestionDiv } from './EditQuizComponents';

export class QuestionsEdit extends Component {

  renderForms = (question, index) => {
    return(
    <QuestionForm 
        key={index} 
        index={index} 
        question={question}
        changeQuestion={this.props.changeQuestion}
    />
    )
  }

  render () {
    return (
      <QuestionsContainer>
        {this.props.questions.map((question, index) => this.renderForms(question, index))} 
        <AddQuestionDiv>
            <AddQuestionButton onClick={this.props.newQuestion}>
                +
            </AddQuestionButton>
        </AddQuestionDiv>
      </QuestionsContainer>
    );
  }
}
