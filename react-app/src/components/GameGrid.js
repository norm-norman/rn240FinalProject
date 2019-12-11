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
    // divide answerChoices into correct and incorrect answers and shuffle each deck
    const correctAnswersShuffled = shuffle(answerChoices.filter(ans => ans.topicId == this.props.instanceTopicId));
    const incorrectAnswersShuffled = shuffle(answerChoices.filter(ans => ans.topicId != this.props.instanceTopicId));

    const incorrectItemCount = 11; // number of incorrect choices on the screen
    correctAnswersShuffled.pop(); // pick four of five correct choices
    incorrectAnswersShuffled.splice(incorrectItemCount-1, incorrectAnswersShuffled.length - incorrectItemCount); // discard all but the first x elements

    const finalDeck = shuffle(correctAnswersShuffled.concat(incorrectAnswersShuffled)); // shuffle both decks together

    // send deck to state
    this.setState({
      finalDeck
    });
  }

  testClick = (choiceTopicId, choiceAnsId) => {
    // check for: matching topicId and whether the game has ended or not
    if (this.props.instanceTopicId == choiceTopicId && !this.props.gameEnded) {
      // if not already clicked
      if (!this.state.correctClickedChoices.includes(choiceAnsId)){

        const index = this.state.finalDeck.findIndex( i => i.answerId == choiceAnsId); // find index of the chosen answer
        let items = [...this.state.finalDeck]; // make shallow copy of state.finalDeck to prepare to update the array
        let item = {...items[index]}; // isolate desired element
        item.correctClick = true; // flag true
        items[index] = item; // replace in copy

        // update state with deck that indicates the new click event
        this.setState((prevState, props) => ({
            correctClickedChoices: [...prevState.correctClickedChoices, choiceAnsId],
            correctClick: prevState.correctClick + 1,
            finalDeck: [...items]
        }));

        {this.state.correctClick >= 3 && this.props.winGameFunction(true);} // pause timer when game is won using callback function from parent component

      }
    }

  }


render() {
    return (
      <div className="flex-grid">
        {this.state.finalDeck.map(item=>{ // iterate through deck of answers and display each answer appropriately
          var cssClass = "";
          item.correctClick ? cssClass = "answers-clicked" : cssClass = "answers"; // if the answer has been clicked (and is correct) we should see the answer in white text
          return (
            <a key={item.answerId} id={cssClass} href="#; return false; " onClick={() => {this.testClick(item.topicId, item.answerId)}}>{item.value}</a>
          )
        })}
      </div>
    );
  }
}

// function to shuffle array - takes in an array and returns it after shuffling
function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
