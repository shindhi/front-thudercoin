import React from 'react';
import { Switch, Route } from 'react-router-dom';

import History from './pages/History';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={History} />
    </Switch>
  );
}
