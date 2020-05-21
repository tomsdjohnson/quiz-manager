import React, { Component } from 'react';
import { HomePageQuizForm } from './HomePageQuizForm';
import { Link } from 'react-router-dom';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from '../ApiService';
import {
  HomeDiv,
  HomeTitleTag,
  HomeTitleContainer,
  QuizzesContainer,
  AddQuestionIcon
} from './HomeComponents';

export class HomePage extends Component {
  constructor() {
    super();

    this.apiService = new ApiService();
  }

  

  handleDeleteQuiz = (quiz) => {
    if(window.confirm("Are you sure you want to delete this quiz?")){
      console.log("Delete", quiz)
      this.apiService.deleteQuiz(quiz)
      .then(response => {response.ok ? alert('Delete') : alert('Failed to delete quiz')});
    }
  }

  renderForms = (quiz, index) => {  
    return(
    <HomePageQuizForm
        key={index} 
        delete={this.handleDeleteQuiz}
        index={index} 
        quiz={quiz}
    />
    )
  }

  render () {
    return (
      <HomeDiv>
        <HomeTitleContainer>
          <HomeTitleTag>
            Quizzes:
          </HomeTitleTag>   
          <Link to='/edit'>
              <AddQuestionIcon icon={faPlusCircle} />
          </Link>
        </HomeTitleContainer>
        <QuizzesContainer>
          {this.props.quizzes && 
          this.props.quizzes.map((quiz, index) => this.renderForms(quiz, index))}
        </QuizzesContainer>
      </HomeDiv>
    );
  }
}
