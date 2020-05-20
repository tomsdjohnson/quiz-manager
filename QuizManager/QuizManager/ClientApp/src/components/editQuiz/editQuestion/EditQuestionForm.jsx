import React, { Component } from 'react';
import { EditWrongAnswers } from './EditWrongAnswers'
import {
    QuestionDiv,
    InputBox,
    QuestionInput,
    CorrectInput,
    QuestionTag,
    WrongAnswerTag,
    CorrectAnswerTag,
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

    handleAnswerChange = (event, index, isCorrect) => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.answers[index] = {isCorrect: isCorrect, answerText: event.target.value};
        this.props.changeQuestion(newQuestion, this.props.index);
    };

  render () {
    return (
    <QuestionDiv isValid={this.props.isValid}>
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
        <InputBox>
            <CorrectAnswerTag >
             Correct Answer:
             </CorrectAnswerTag>
            <CorrectInput 
            placeholder={"Enter correct answer"}
            value={getInputValue(this.props.question.answers[0])}
            onChange={event => this.handleAnswerChange(event,0,true)}
            />
        </InputBox>
        <WrongAnswerTag> Wrong Answers: </WrongAnswerTag> 
        <EditWrongAnswers 
            changeAnswer={this.handleAnswerChange}
            changeQuestion={this.props.changeQuestion}
            question={this.props.question}
            index={this.props.index}
        />
    </QuestionDiv>
    );
  }
}

const getInputValue = (answer) => {
    return answer ? answer.answerText : '';
}