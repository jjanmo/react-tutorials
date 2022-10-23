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
  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
