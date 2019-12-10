import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function MainScreen() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Straight Path: The Game</h1>
        <p>
          Press one of the buttons below to begin!
        </p>
        <ButtonGroup>
          <Button variant="dark" size="lg" href="/learn">How to Play</Button>
          <Button variant="light" size="lg" href="/play">Play Game!</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default MainScreen;
