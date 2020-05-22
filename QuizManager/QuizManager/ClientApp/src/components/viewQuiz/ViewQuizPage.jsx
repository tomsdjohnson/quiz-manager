import React, { Component } from 'react';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ViewQuestionForm } from './viewQuestion/ViewQuestionForm';
import { QuestionsContainer } from './ViewQuizComponents';
import {
  ViewQuizDiv,
  QuizTitleContainer,
  QuizNameTag,
  ViewButton
} from './ViewQuizComponents';

export class ViewQuizPage extends Component {
    constructor(props) {
      super(props);
      console.log("df",props.location.state.permissionLevel)

      this.state = {
          quiz: props.location.state.quiz,
          permissionLevel: props.location.state.permissionLevel,
          viewAnswers: false
      } ;
  }

  handleViewChange = () => {
    this.setState({viewAnswers: !this.state.viewAnswers})
  };

  renderForms = (question, index) => {  
    return(
    <ViewQuestionForm 
        key={index} 
        question={question}
        viewAnswer={this.state.viewAnswers}
    />
    )
  }
  
  renderWithPermission = () => {
    return(
      <ViewButton icon={this.state.viewAnswers ? faEye : faEyeSlash} onClick={this.handleViewChange} />
    )
  }

  render () {
    console.log(this.state.permissionLevel)
    return (
      <ViewQuizDiv>
      <QuizTitleContainer>
        <QuizNameTag>Test</QuizNameTag>
          {this.state.permissionLevel !== 3 && this.renderWithPermission()}
      </QuizTitleContainer>
      <QuestionsContainer>
        {this.state.quiz.questions.map((question, index) => this.renderForms(question, index))}
      </QuestionsContainer>
      </ViewQuizDiv>
    );
  }
}
