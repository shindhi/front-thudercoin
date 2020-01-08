import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Historic from './pages/Historic';
import WhereToUse from './pages/About/whereToUse/index';

import Home from './pages/Home';
import HowToEarn from './pages/HowToEarn';
import TesteCard from './pages/HowToEarn/teste';

import About from './pages/About';



export default function Routes() {
  return (
    <Switch>
      <Route path={["/", "/historic"]} exact component={Historic} />
      <Route path="/about/whereToUse" exact component={WhereToUse} />

      <Route path={["/", "/historic"]} exact component={Home} />
      <Route exact path="/earn" component={HowToEarn} />
      <Route exact path="/earnTeste" component={TesteCard} />

      <Route path="/about" component={About} />
    </Switch>
  );
}
