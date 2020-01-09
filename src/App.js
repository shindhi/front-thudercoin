import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Static components
import { Grid } from './components/Grid';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
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
