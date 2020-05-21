import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  QuizDiv,
  QuizTitleTag,
  ViewTag,
  HomeIcon
} from './HomeComponents';

export class HomePageQuizForm extends Component {
  render () {
    console.log(this.props.quiz.id)
    return (
      <QuizDiv>
        <QuizTitleTag>
          {this.props.quiz.name}
        </QuizTitleTag>
        <Link to={{pathname: '/view', state: {quiz: this.props.quiz}}}>
          <ViewTag> View </ViewTag>
        </Link>
        <Link to={{pathname: '/edit', state: {quiz: this.props.quiz}}}>
          <HomeIcon icon={faEdit} />
        </Link>
        <HomeIcon icon={faTrash} onClick={e => this.props.delete(this.props.quiz)}/>
      </QuizDiv >
    );
  }
}
