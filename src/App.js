import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Grid } from './components/Grid';
import Header from './components/Header';
<<<<<<< HEAD
// Static components
=======
>>>>>>> 919fb5a8dc65b5092cdb788c9428ffe240bf7721
import SideBar from './components/SideBar';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <Header />
        <SideBar />
        <Routes />
      </Grid>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
