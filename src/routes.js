import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Historic from './pages/Historic';
import HowToEarn from './pages/HowToEarn';
import HowToUse from './pages/HowToUse/index';
import Quotation from './pages/Quotation';
import WhereToUse from './pages/whereToUse';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/about/how-to-earn" component={HowToEarn} />
      <Route exact path="/about/how-to-use" component={HowToUse} />
      <Route path={['/', '/historic']} exact component={Historic} />
      <Route path="/about" component={About} />
      <Route path="/quotation" component={Quotation} />
      <Route path="/about/whereToUse" exact component={WhereToUse} />
      <Route exact path="/earn" component={HowToEarn} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
