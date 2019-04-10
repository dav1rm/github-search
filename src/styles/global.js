import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    font-family: sans-serif;
    background: #ECF0F5;
  }
  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
