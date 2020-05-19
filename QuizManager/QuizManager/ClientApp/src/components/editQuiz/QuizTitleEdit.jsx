import React, { Component } from 'react';
import {
    QuizTitleContainer,
    QuizInput,
    QuizNameTag
} from './EditQuizComponents';

export class QuizTitleEdit extends Component {
  render () {
    return (
      <QuizTitleContainer>
        <QuizNameTag>Quiz Name: </QuizNameTag>
        <QuizInput 
          value={this.props.quizName}
          onChange={this.props.changeName}
          placeholder={"Click to edit"}
        />
      </QuizTitleContainer>
    );
  }
}
