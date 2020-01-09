import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Historic from './pages/Historic';
import WhereToUse from './pages/WhereToUse/index';
import About from './pages/About';
import Quotation from './pages/Quotation';

export default function Routes() {
  return (
    <Switch>
      <Route path={['/', '/historic']} exact component={Historic} />
      <Route path="/about/where-to-use" exact component={WhereToUse} />
      <Route path="/about" component={About} />
      <Route path="/quotation" component={Quotation} />
    </Switch>
  );
}
