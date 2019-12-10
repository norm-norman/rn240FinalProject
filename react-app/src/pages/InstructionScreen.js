import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

function InstructionScreen() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="instructions">
        <p>
          <strong>How to play:</strong> Use your mouse to discover words and phrases associated with the topic at the top of the screen.
          Find them all before the time runs out to stay on the Straight Path!
        </p>
        <Button variant="light" size="lg" href="/play">Play Game!</Button>
        </div>
      </header>
    </div>
  );
}

export default InstructionScreen;
