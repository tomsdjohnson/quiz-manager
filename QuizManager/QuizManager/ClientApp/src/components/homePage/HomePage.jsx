import React, { Component } from "react";
import { HomePageQuizForm } from "./HomePageQuizForm";
import { Link } from "react-router-dom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../ApiService";
import {
  HomeDiv,
  HomeTitleTag,
  HomeTitleContainer,
  QuizzesContainer,
  AddQuestionIcon,
} from "./HomeComponents";
import _ from "lodash";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.apiService = new ApiService();
    this.state = { quizzes: [], userInfo: props.userInfo };
  }

  componentDidMount = () => {
    this.handleDataRefresh();
  };

  handleDataRefresh = () => {
    this.apiService
      .getAllQuizzes(this.state.userInfo)
      .then((quizzes) => this.setState({ quizzes }));
  };

  handleDeleteQuiz = (quiz) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      this.apiService.deleteQuiz(quiz);
      let quizzes = _.cloneDeep(this.state.quizzes);
      var newQuizzes = quizzes.filter((q) => q.id !== quiz.id);
      this.setState({ quizzes: newQuizzes });
    }
  };

  renderForms = (quiz, index) => {
    return (
      <HomePageQuizForm
        key={index}
        index={index}
        quiz={quiz}
        permissionLevel={this.state.userInfo.permissionLevel}
        delete={this.handleDeleteQuiz}
      />
    );
  };

  renderWithPermission = () => {
    return (
      <Link to={{ pathname: "/edit" }}>
        <AddQuestionIcon icon={faPlusCircle} />
      </Link>
    );
  };

  render() {
    return (
      <HomeDiv>
        <HomeTitleContainer>
          <HomeTitleTag>Quizzes:</HomeTitleTag>
          {this.state.userInfo.permissionLevel === 1 &&
            this.renderWithPermission()}
        </HomeTitleContainer>
        <QuizzesContainer>
          {this.state.quizzes.map((quiz, index) =>
            this.renderForms(quiz, index)
          )}
        </QuizzesContainer>
      </HomeDiv>
    );
  }
}
