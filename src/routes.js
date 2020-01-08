import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HowToEarn from './pages/HowToEarn';
import TesteCard from './pages/HowToEarn/teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route exact path="/earn" component={HowToEarn} />
      <Route exact path="/earnTeste" component={TesteCard} />
    </Switch>
  );
}
