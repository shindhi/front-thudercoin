import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;

    display: grid;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer"
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
