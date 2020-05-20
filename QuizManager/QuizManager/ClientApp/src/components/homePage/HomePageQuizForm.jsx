import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  QuizDiv,
  QuizTitleTag,
  ViewButton,
  EditButton

} from './HomeComponents';

export class HomePageQuizForm extends Component {
  constructor() {
    super();

    this.state = {
      goToEdit: false,
      goToView: false
    };
  }

  handleOnClick = () => {
    this.setState({goToEdit: true});
  }

  render () {
    if (this.state.goToEdit) {
      console.log("true")
      return <Redirect to={{pathname: '/edit',
      state: { state: this.props.quiz }}} />;
    }

    return (
      <QuizDiv>
        <QuizTitleTag>
          {this.props.quiz.name}
        </QuizTitleTag>
        <ViewButton> View </ViewButton>
        <Link to={{pathname: '/edit',state: {quiz: this.props.quiz}}}>
          <EditButton icon={faEdit} />
        </Link>
      </QuizDiv >
    );
  }
}
