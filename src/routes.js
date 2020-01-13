import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Historic from './pages/Historic';
import HowToEarn from './pages/HowToEarn';
import HowToUse from './pages/HowToUse';
import Quotation from './pages/Quotation';
import WhereToUse from './pages/WhereToUse';

export default function Routes() {
  return (
    <Switch>
<<<<<<< HEAD
      <Route exact path="/about/how-to-earn" component={HowToEarn} />
      <Route exact path="/about/how-to-use" component={HowToUse} />
      <Route path="/about/where-to-use" exact component={WhereToUse} />
=======
>>>>>>> 919fb5a8dc65b5092cdb788c9428ffe240bf7721
      <Route path={['/', '/historic']} exact component={Historic} />

      <Route path="/about" component={About} />

      <Route path="/about/how-to-earn" component={HowToEarn} />
      <Route path="/about/how-to-use" component={HowToUse} />
      <Route path="/about/where-to-use" component={WhereToUse} />

      <Route path="/quotation" component={Quotation} />
<<<<<<< HEAD
      <Route exact path="/earn" component={HowToEarn} />
      <Route path="/about" component={About} />
=======
>>>>>>> 919fb5a8dc65b5092cdb788c9428ffe240bf7721
    </Switch>
  );
}
