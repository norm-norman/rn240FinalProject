import React from 'react';
import '../App.css';
import Timer from '../components/Timer';
import GameGrid from '../components/GameGrid';
import Button from 'react-bootstrap/Button';
import gameTopics from '../gamedata/topics.json';

function GameScreen() {
  return (
    <div className="App">
        <div className="game-header">
          <div className="back-btn">
            <Button variant="light" size="lg" href="/">Back to Main</Button>
          </div>
          <div className="topic">
            <p>Topic: {gameTopics[0].topic}</p>
          </div>
          <div className="timer">
            <Timer />
          </div>
        </div>
        <div className="App-header">
          <GameGrid />
      </div>
    </div>
  );
}

export default GameScreen;
