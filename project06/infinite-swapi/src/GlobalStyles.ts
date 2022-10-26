import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #eee;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
