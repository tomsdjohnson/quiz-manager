import React, { Component } from "react";
import { EditQuizDiv, SaveButton, ExitButton } from "./EditQuizComponents";
import {
  isNameValid,
  areQuestionsValid,
} from "../helpers/QuizValidationHelper";
import { ApiService } from "../ApiService";
import { EditQuizTitle } from "./EditQuizTitle";
import { EditQuizQuestions } from "./EditQuizQuestions";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import _ from "lodash";

export class EditQuizPage extends Component {
  constructor(props) {
    super(props);

    this.apiService = new ApiService();

    this.state = props.location.state
      ? props.location.state.quiz
      : { questions: [], name: "" };
  }

  handleNewQuestion = () => {
    let questions = _.cloneDeep(this.state.questions);
    questions = [...questions, QUESTION];
    this.setState({ questions });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleQuestionChange = (newQuestion, index) => {
    let questions = _.cloneDeep(this.state.questions);
    questions[index] = newQuestion;
    this.setState({ questions });
  };

  handleDeleteQuestion = (e, index) => {
    let questions = _.cloneDeep(this.state.questions);
    questions = removeItemByIndex(questions, index);
    this.setState({ questions });
  };

  handleSave = () => {
    if (
      areQuestionsValid(this.state.questions) &&
      isNameValid(this.state.name)
    ) {
      this.apiService.saveQuizChanges(this.state);
      this.apiService
        .deleteQuizContent(this.state)
        .then((message) => alert(message));
    }
  };

  render() {
    return (
      <EditQuizDiv>
        <Link to={"/"}>
          <ExitButton icon={faTimes} />
        </Link>
        <SaveButton
          icon={faSave}
          highlight={
            areQuestionsValid(this.state.questions) &&
            isNameValid(this.state.name)
          }
          onClick={this.handleSave}
        />
        <EditQuizTitle
          quizName={this.state.name}
          changeName={this.handleNameChange}
        />
        <EditQuizQuestions
          deleteQuestion={this.handleDeleteQuestion}
          changeQuestion={this.handleQuestionChange}
          questions={this.state.questions}
          newQuestion={this.handleNewQuestion}
        />
      </EditQuizDiv>
    );
  }
}

const removeItemByIndex = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

const QUESTION = {
  questionText: "",
  answers: new Array(3).fill(null),
};
