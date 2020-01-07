import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SideBar from './components/SideBar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
