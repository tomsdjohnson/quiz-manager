import React, { Component } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ViewQuestionForm } from './viewQuestion/ViewQuestionForm';
import { QuestionsContainer } from './ViewQuizComponents';
import { Link } from 'react-router-dom';
import {
  ViewQuizDiv,
  QuizTitleContainer,
  QuizNameTag,
  ExitButton
} from './ViewQuizComponents';

export class ViewQuizPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
          quiz: props.location.state.quiz,
          permissionLevel: props.location.state.permissionLevel
      } ;
  }

  renderForm = (question, index) => {  
    return(
    <ViewQuestionForm 
        key={index} 
        index={index} 
        question={question}
        permissionLevel={this.state.permissionLevel}
    />
    )
  }

  render () {
    return (
      <ViewQuizDiv>
      <QuizTitleContainer>
        <QuizNameTag>Test</QuizNameTag>
        <Link to={'/'}>
          <ExitButton icon={faTimes} />
        </Link>
      </QuizTitleContainer>
      <QuestionsContainer>
        {this.state.quiz.questions.map((question, index) => this.renderForm(question, index))}
      </QuestionsContainer>
      </ViewQuizDiv>
    );
  }
}
