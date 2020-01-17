import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Main from './components/Main';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './theme';

import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main>
          <Routes />
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
