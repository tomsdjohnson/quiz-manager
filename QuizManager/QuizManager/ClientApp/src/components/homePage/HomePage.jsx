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
  constructor(props) {
    super(props);
    
    this.apiService = new ApiService();
    this.state={quizzes: [], userInfo: props.userInfo};
  }

  componentDidMount = () => {
    this.handleDataRefresh();
  };

  handleDataRefresh = () => {
    console.log("RE")
    this.apiService.getAllQuizzes()
    .then(quizzes => this.setState({quizzes}))
    .catch(e => alert('Failed to load quizzes'))
  }
  
  handleDeleteQuiz = (quiz) => {
    if(window.confirm("Are you sure you want to delete this quiz?")){
      this.apiService.deleteQuiz(quiz)
      .then( r => this.handleDataRefresh)
      .catch(e => alert('Failed to delete quiz'));
    }
  }
  
  renderForms = (quiz, index) => {  
    return(
    <HomePageQuizForm
        key={index} 
        index={index} 
        quiz={quiz}
        delete={this.handleDeleteQuiz}
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
          <Link to={{pathname: '/edit'}}>
              <AddQuestionIcon icon={faPlusCircle} />
          </Link>
        </HomeTitleContainer>
        <QuizzesContainer>
          {this.state.quizzes.map((quiz, index) => this.renderForms(quiz, index))}
        </QuizzesContainer>
      </HomeDiv>
    );
  }
}
