import React, { Component } from 'react';
import { EditAnswers } from './EditAnswers'
import {
    QuestionDiv,
    InputBox,
    QuestionInput,
    QuestionTag,
    AnswerTag,
    DeleteQuestionButton
} from './EditQuestionComponents';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash';

export class EditQuestionForm extends Component {

    handleQuestionNameChange = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.questionText = event.target.value;
        this.props.changeQuestion(newQuestion, this.props.index);
    };  

    handleAnswerChange = (event, index) => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.answers[index] = {answerText: event.target.value};
        this.props.changeQuestion(newQuestion, this.props.index);
    };

  render () {
    return (
    <QuestionDiv>
        <InputBox>
            <QuestionTag >
                Q{this.props.index +1}: 
            </QuestionTag >
            <QuestionInput 
            placeholder={"Enter question"}
            value={this.props.question.questionText}
            onChange={this.handleQuestionNameChange}
          />
          <DeleteQuestionButton icon={faTrash} onClick={e => this.props.deleteQuestion(e, this.props.index)}  />
        </InputBox>
        <AnswerTag> Answers: </AnswerTag> 
        <EditAnswers 
            changeAnswer={this.handleAnswerChange}
            changeQuestion={this.props.changeQuestion}
            question={this.props.question}
            index={this.props.index}
        />
    </QuestionDiv>
    );
  }
}
