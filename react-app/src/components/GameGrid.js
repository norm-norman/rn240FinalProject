import React from 'react';
import '../App.css';

export default class GameGrid extends React.Component {
  state = {
    height: 8,
    width: 8,
    topicId: 0
  };
render() {
    const { height, width } = this.state;
    return (
      <div class="flex-grid">
        <div class="col"><a>testinggggg</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
        <div class="col"><a>test</a></div>
      </div>
    );
  }
}
