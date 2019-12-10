import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GameScreen from '../pages/GameScreen';
import InstructionScreen from '../pages/InstructionScreen';
import MainScreen from '../pages/MainScreen';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainScreen} />
      <Route path="/play" component={GameScreen} />
      <Route path="/learn" component={InstructionScreen} />

      <Route component={MainScreen} />
    </Switch>
  );
}
