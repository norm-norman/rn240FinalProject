import React from 'react';
import '../App.css';
import Timer from '../components/Timer';
import GameGrid from '../components/GameGrid';
import Button from 'react-bootstrap/Button';
import gameTopics from '../gamedata/topics.json';

const instanceTopicId = Math.floor(Math.random() * Math.floor(gameTopics.length));
var pauseTimer = false;

function GameScreen() {
  function selectTopic() {
    console.log(Math.floor(Math.random() * Math.floor(gameTopics.length)));
    return Math.random(gameTopics.length);
  }

  function pauseTimerCallBack() {
    pauseTimer = !pauseTimer;
  }

  return (
    <div className="App">
        <div className="game-header">
          <div className="back-btn">
            <Button variant="light" size="lg" href="/">Back to Main</Button>
          </div>
          <div className="topic">
            <p>Topic: {gameTopics[instanceTopicId].topic}</p>
          </div>
          <div className="timer">
            <Timer
              pauseTimer={pauseTimer}
            />
          </div>
        </div>
        <div className="App-header">
          <GameGrid
            instanceTopicId={instanceTopicId}
            pauseTimerFunction={pauseTimerCallBack}
          />
      </div>
    </div>
  );
}

export default GameScreen;
