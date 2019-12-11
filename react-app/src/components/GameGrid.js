import React from 'react';
import '../App.css';
import answerChoices from '../gamedata/answers.json';

export default class GameGrid extends React.Component {

  state = {
    finalDeck: [],
    correctClick: 0,
    correctClickedChoices: []
  }

  componentDidMount() {
    //pick the deck of choices

    //what are we choosing from
      //5 correct answers per topic -> pick 4
      //we need 11 incorrect answers

    //divide answerChoices into correct and incorrect answers
    const correctAnswersShuffled = shuffle(answerChoices.filter(ans => ans.topicId == this.props.instanceTopicId));
    const incorrectAnswersShuffled = shuffle(answerChoices.filter(ans => ans.topicId != this.props.instanceTopicId));

    //pick all but one correct and add to final deck
    //pick remainder from other answers
    correctAnswersShuffled.pop();
    const incorrectItemCount = 11;
    incorrectAnswersShuffled.splice(incorrectItemCount-1, incorrectAnswersShuffled.length - incorrectItemCount);

    const finalDeck = shuffle(correctAnswersShuffled.concat(incorrectAnswersShuffled));
    this.setState({
      finalDeck
    });
  }

  testClick = (choiceTopicId, choiceAnsId) => {
    if (this.props.instanceTopicId == choiceTopicId && !this.props.gameEnded) {
      //if not already clicked
      if (!this.state.correctClickedChoices.includes(choiceAnsId)){
        const index = this.state.finalDeck.findIndex( i => i.answerId == choiceAnsId);
        let items = [...this.state.finalDeck];
        let item = {...items[index]};
        item.correctClick = true;
        items[index] = item;
        console.log(index);
        this.setState((prevState, props) => ({
            correctClickedChoices: [...prevState.correctClickedChoices, choiceAnsId],
            correctClick: prevState.correctClick + 1,
            finalDeck: [...items]
        }));
        //pause timer if game is completed
        {this.state.correctClick >= 3 && this.props.winGameFunction(true);}

      }
    }

  }


render() {
    return (
      <div className="flex-grid">
        {this.state.finalDeck.map(item=>{
          var cssClass = "";
          item.correctClick ? cssClass = "answers-clicked" : cssClass = "answers";
          return (
            <a key={item.answerId} id={cssClass} href="#; return false; " onClick={() => {this.testClick(item.topicId, item.answerId)}}>{item.value}</a>
          )
        })}
      </div>
    );
  }
}

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
