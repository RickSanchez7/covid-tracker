import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding:0;
}
html {
  font-size: 62.5%;

  @media screen and (max-width: 1000px) {
    font-size: 55%;
  }

  @media screen and (max-width: 800px) {
    font-size: 50%;
  }

  @media screen and (max-width: 600px) {
    font-size: 45%;
  }
}
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f6fa;
  }
  `;
