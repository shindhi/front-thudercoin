import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HowToEarn from './pages/HowToEarn/index'
import Historic from './pages/Historic';
import About from './pages/About';
import Quotation from './pages/Quotation';
import HowToUse from './pages/HowToUse/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/about/how-to-earn" component={HowToEarn} />
      <Route exact path="/about/how-to-use" component={HowToUse} />
      <Route path={["/", "/historic"]} exact component={Historic} />
      <Route path="/about" component={About} />
      <Route path="/quotation" component={Quotation} />
    </Switch>
  );
}
