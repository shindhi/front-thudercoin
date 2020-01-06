import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes />
      <GlobalStyle />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
