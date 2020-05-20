import React, { Component } from 'react';
import { HomePageQuizForm } from './HomePageQuizForm';
import {
  HomeDiv,
  HomeTitleTag,
  HomeTitleContainer,
  QuizzesContainer

} from './HomeComponents';

export class HomePage extends Component {
  constructor() {
    super();

  }

  renderForms = (quiz, index) => {  
    return(
    <HomePageQuizForm
        key={index} 
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
        </HomeTitleContainer>
        <QuizzesContainer>
          {this.props.quizzes && 
          this.props.quizzes.map((quiz, index) => this.renderForms(quiz, index))}
        </QuizzesContainer>
      </HomeDiv>
    );
  }
}
