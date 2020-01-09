import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Routes from './routes';
import { Grid } from './components/Grid';

function App() {
  return (
    <BrowserRouter>
      <Grid>
        <Header />
        <SideBar />
        <Routes />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
