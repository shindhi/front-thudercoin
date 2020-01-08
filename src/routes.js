import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HowToEarn from './pages/HowToEarn/index'
import Historic from './pages/Historic';
import About from './pages/About';
import Quotation from './pages/Quotation';
import HowToUse from './pages/HowToUse/index';


import Historic from './pages/Historic';
import WhereToUse from './pages/About/whereToUse/index';

import Home from './pages/Home';
import HowToEarn from './pages/HowToEarn';
import TesteCard from './pages/HowToEarn/teste';

import About from './pages/About';



export default function Routes() {
  return (
    <Switch>
    
      <Route exact path="/about/how-to-earn" component={HowToEarn} />
      <Route exact path="/about/how-to-use" component={HowToUse} />
      <Route path={["/", "/historic"]} exact component={Historic} />
      <Route path="/about" component={About} />
      <Route path="/quotation" component={Quotation} />

      <Route path={["/", "/historic"]} exact component={Historic} />
      <Route path="/about/whereToUse" exact component={WhereToUse} />

      <Route path={["/", "/historic"]} exact component={Home} />
      <Route exact path="/earn" component={HowToEarn} />
      <Route exact path="/earnTeste" component={TesteCard} />

      <Route path="/about" component={About} />

    </Switch>
  );
}
