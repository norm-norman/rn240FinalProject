import React, { useState } from 'react';
import '../App.css';
import Timer from '../components/Timer';
import GameGrid from '../components/GameGrid';
import Button from 'react-bootstrap/Button';
import gameTopics from '../gamedata/topics.json';
import Modal from 'react-bootstrap/Modal';

const instanceTopicId = Math.floor(Math.random() * Math.floor(gameTopics.length));
var pauseTimer = false;
var gameStatus = false;
var gameEnded = false;

function GameScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function selectTopic() {
    console.log(Math.floor(Math.random() * Math.floor(gameTopics.length)));
    return Math.random(gameTopics.length);
  }

  function pauseTimerCallBack(status) {
    pauseTimer = true;
    gameStatus = status;
    gameEnded = true;
    console.log(gameStatus);
    handleShow();
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
              timeRunoutFunction={pauseTimerCallBack}
            />
          </div>
        </div>
        <div className="App-header">
          <GameGrid
            instanceTopicId={instanceTopicId}
            winGameFunction={pauseTimerCallBack}
            gameEnded={gameEnded}
          />
      </div>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>{gameStatus ? "You Win!" : "Better luck next time..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{gameStatus ? "Congratulations for staying on the Straight Path :)" : "You strayed from the Straight Path :("}</Modal.Body>
        <Modal.Footer>
          <Button variant="light" href="/">
            Back to Main
          </Button>
          <Button variant="dark" href="/play">
            Play Again!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GameScreen;
