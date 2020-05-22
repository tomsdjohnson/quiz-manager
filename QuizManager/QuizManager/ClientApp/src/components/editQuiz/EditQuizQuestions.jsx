import React, { Component } from "react";
import { EditQuestionForm } from "./editQuestion/EditQuestionForm";
import {
  QuestionsContainer,
  AddQuestionButton,
  AddQuestionDiv,
} from "./EditQuizComponents";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export class EditQuizQuestions extends Component {
  renderForms = (question, index) => {
    return (
      <EditQuestionForm
        key={index}
        index={index}
        question={question}
        deleteQuestion={this.props.deleteQuestion}
        changeQuestion={this.props.changeQuestion}
      />
    );
  };

  render() {
    return (
      <QuestionsContainer>
        {this.props.questions.map((question, index) =>
          this.renderForms(question, index)
        )}
        <AddQuestionDiv>
          <AddQuestionButton
            icon={faPlusCircle}
            onClick={this.props.newQuestion}
          />
        </AddQuestionDiv>
      </QuestionsContainer>
    );
  }
}
