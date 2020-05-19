import React, { Component } from 'react';
import {
    QuestionsDiv,
    InputBox,
    MultipleInputBox,
    QuestionInput,
    WrongInput,
    CorrectInput,
    QuestionTag,
    WrongAnswerTag,
    CorrectAnswerTag,
} from './EditQuizComponents';
import _ from 'lodash';

export class QuestionForm extends Component {

    handleQuestionNameChange = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.QuestionText = event.target.value;
        this.props.changeQuestion(newQuestion, this.props.index);
    };  

    handleCorrectChange = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.Answers[0] = {
            IsCorrect: true,
            AnswerText: event.target.value
          };
        this.props.changeQuestion(newQuestion, this.props.index);
    };

    handleWrongAnswer1Change = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.Answers[1] = {
            IsCorrect: false,
            AnswerText: event.target.value
          };
        this.props.changeQuestion(newQuestion, this.props.index);
    };

    handleWrongAnswer2Change = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.Answers[2] = {
            IsCorrect: false,
            AnswerText: event.target.value
          };
        this.props.changeQuestion(newQuestion, this.props.index);
    };

    handleWrongAnswer3Change = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.Answers[3] = {
            isCorrect: false,
            AnswerText: event.target.value
          };
        this.props.changeQuestion(newQuestion, this.props.index);
    };

    handleWrongAnswer4Change = event => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.Answers[4] ={
            IsCorrect: false,
            AnswerText: event.target.value
          };
        this.props.changeQuestion(newQuestion, this.props.index);
    };

  render () {
    return (
    <QuestionsDiv>
        <InputBox>
            <QuestionTag >
                Q{this.props.index +1}: 
            </QuestionTag >
            <QuestionInput 
            placeholder={"Enter question"}
            value={this.props.question.questionText}
            onChange={this.handleQuestionNameChange}
          />
        </InputBox>
        <InputBox>
            <CorrectAnswerTag >
             Correct Answer:
             </CorrectAnswerTag>
            <CorrectInput 
            placeholder={"Enter correct answer"}
            value={this.props.question.Answers[0].AnswerText}
            onChange={this.handleCorrectChange}
            />
        </InputBox>
        <WrongAnswerTag> Wrong Answers: </WrongAnswerTag> 
        <MultipleInputBox>
            <WrongInput 
            placeholder={"Enter false answer"} 
            value={this.props.question.Answers[1].AnswerText}
            onChange={this.handleWrongAnswer1Change}
            />
            <WrongInput 
            placeholder={"Enter false answer"}
            value={this.props.question.Answers[2].AnswerText}
            onChange={this.handleWrongAnswer2Change} 
            />
            <WrongInput 
            placeholder={"Enter false answer"}
            value={this.props.question.Answers[3].AnswerText}
            onChange={this.handleWrongAnswer3Change} 
            />
            <WrongInput 
            placeholder={"Enter false answer"}
            value={this.props.question.Answers[4].AnswerText}
            onChange={this.handleWrongAnswer4Change} 
            />
        </MultipleInputBox>
    </QuestionsDiv>
    );
  }
}
