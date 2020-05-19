import React, { Component } from 'react';
import {
  EditQuizDiv,
  SaveButton
} from './EditQuizComponents';
import { ApiService } from '../ApiService';
import {QuizTitleEdit} from  './QuizTitleEdit'
import {QuestionsEdit} from  './QuestionsEdit'

export class EditQuizPage extends Component {
    constructor() {
      super();
  
      this.apiService = new ApiService();

      this.state = {
        Questions: [],
        Name: ''
      };
  }
          
  handleNewQuestion = () => {
    this.setState(state => ({
      Questions: [...state.Questions, QUESTION]
    }));
  };

  handleNameChange = event => {
    this.setState({
      Name: event.target.value
    });
  };

  handleQuestionChange = (newQuestion, index) => {
    let Questions = this.state.Questions.slice();
    Questions[index] = newQuestion;
    this.setState({Questions});
  };

  handleSave = () => {
    this.apiService.saveQuizChanges(this.state);
  };

  render () {
    return (
      <EditQuizDiv>
      <SaveButton onClick={this.handleSave}>
         Save 
      </ SaveButton> 
        <QuizTitleEdit 
        quizName={this.state.Name}
        changeName={this.handleNameChange}
        />
        <QuestionsEdit 
        changeQuestion={this.handleQuestionChange}
        questions={this.state.Questions}
        newQuestion={this.handleNewQuestion}
        />
      </EditQuizDiv>
    );
  }
}
const ANSWER = {
  IsCorrect: null,
  AnswerText: ''
}

const QUESTION = {
  QuestionText: '',
  Answers:
    [ANSWER,ANSWER,ANSWER,ANSWER,ANSWER]
}
