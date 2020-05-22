import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  QuizDiv,
  QuizTitleTag,
  ViewTag,
  Icon
} from './HomeComponents';

export class HomePageQuizForm extends Component {
  
  renderWithPermission = () => {
    return(
      <span>
        <Link to={{pathname: '/edit', state: {quiz: this.props.quiz}}}>
          <Icon icon={faEdit} />
        </Link>
        <Icon icon={faTrash} onClick={e => this.props.delete(this.props.quiz)}/>
      </span>
    )
  }

  render () {
    return (
      <QuizDiv>
        <QuizTitleTag>
          {this.props.quiz.name}
        </QuizTitleTag>
        <Link to={{pathname: '/view', state: {quiz: this.props.quiz, permissionLevel: this.props.permissionLevel}}}>
          <ViewTag> View </ViewTag>
        </Link>
        {this.props.permissionLevel === 1 && this.renderWithPermission()}
      </QuizDiv >
    );
  }
}
