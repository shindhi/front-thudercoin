import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';


import Header from './components/Header';
import SideBar from './components/SideBar';

import Routes from './routes';

import { Grid } from './components/Grid';

function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />

      <Grid>
        <Header />
        <SideBar />
        <Routes />
        <GlobalStyle />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
