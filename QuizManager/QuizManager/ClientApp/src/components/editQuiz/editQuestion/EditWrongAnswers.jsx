import React, { Component } from 'react';
import {
    MultipleInputBox,
    WrongInput,
    AddAnswerButton,
    DeleteAnswerButton,
    WrongAnswerContainer
} from './EditQuestionComponents';
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash';

export class EditWrongAnswers extends Component {

    handleAddAnswer = () => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.answers.push(null);
        this.props.changeQuestion(newQuestion, this.props.index);
    }

    handleRemoveAnswer = (event, index) => {
        var newQuestion = _.cloneDeep(this.props.question);
        newQuestion.answers = removeItemByIndex(newQuestion.answers, index);
        this.props.changeQuestion(newQuestion, this.props.index);
    }

    renderAddAnswerButton = () => {
    return(
        <WrongAnswerContainer>
            <AddAnswerButton icon={faPlusCircle} onClick={this.handleAddAnswer} />
        </WrongAnswerContainer>
    )
    }

    renderWrongInput = (answer, index) => {
    if(index === 0){ return };
    return(
        <WrongAnswerContainer key={`${index}-wrongAnswer`}>
            <WrongInput 
                placeholder={"Enter false answer"}
                value={answer ? answer.answerText : ''}
                onChange={event => this.props.changeAnswer(event, index, false)} 
            />
            {this.props.question.answers.length > 3 &&
                <DeleteAnswerButton icon={faTimes} onClick={e => this.handleRemoveAnswer(e, index)}/>}
        </WrongAnswerContainer>
    )
    }  

  render () {
    return (
    <MultipleInputBox>
        {this.props.question.answers.map((answer, index) => this.renderWrongInput(answer, index))}
        {this.props.question.answers.length < 5 && this.renderAddAnswerButton()}
    </MultipleInputBox>
    );
  }
}

const removeItemByIndex = (array, index) => {
    return array.slice(0, index).concat(array.slice(index + 1, array.length));
}