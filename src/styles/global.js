import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    min-height: 100%;
    height: 100%
  }
  #root {
    min-height: 100%
    height: 100%
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
