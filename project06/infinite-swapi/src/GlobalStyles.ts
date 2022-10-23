import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;

  }

  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyles;
