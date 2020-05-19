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
        newQuestion.questionText = event.target.value;
        this.props.changeQuestion(newQuestion, this.props.index);
    };  

    handleAnswerChange = (event, index, correct) => {
        var newQuestion = _.cloneDeep(this.props.question);
        var answer = event.target.value === '' ? null 
        : {isCorrect: correct, answerText: event.target.value}

        newQuestion.answers[index] = answer;
        this.props.changeQuestion(newQuestion, this.props.index);
    };

  renderWrongInput = (answer, index) => {
    if(index === 0){ return };
    return(
        <WrongInput 
            key={index}
            placeholder={"Enter false answer"}
            value={getInputValue(answer)}
            onChange={event => this.handleAnswerChange(event, index, false)} 
        />
    )
  }  

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
            value={getInputValue(this.props.question.answers[0])}
            onChange={event => this.handleAnswerChange(event,0,true)}
            />
        </InputBox>
        <WrongAnswerTag> Wrong Answers: </WrongAnswerTag> 
        <MultipleInputBox>
            {this.props.question.answers.map((answer, index) => this.renderWrongInput(answer, index))}
        </MultipleInputBox>
    </QuestionsDiv>
    );
  }
}

const getInputValue = (answer,) => {
    return answer ? answer.answerText : '';
}