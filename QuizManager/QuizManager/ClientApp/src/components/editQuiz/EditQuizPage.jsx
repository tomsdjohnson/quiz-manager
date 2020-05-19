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
        questions: [],
        name: ''
      };
  }
          
  handleNewQuestion = () => {
    this.setState(state => ({
      questions: [...state.questions, QUESTION]
    }));
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleQuestionChange = (newQuestion, index) => {
    let questions = this.state.questions.slice();
    questions[index] = newQuestion;
    this.setState({questions});
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
        quizName={this.state.name}
        changeName={this.handleNameChange}
        />
        <QuestionsEdit 
        changeQuestion={this.handleQuestionChange}
        questions={this.state.questions}
        newQuestion={this.handleNewQuestion}
        />
      </EditQuizDiv>
    );
  }
}

const QUESTION = {
  questionText: '',
  answers: new Array(5).fill(null)
}
