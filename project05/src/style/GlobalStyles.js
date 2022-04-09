import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root{
    font-size: 10px;
  }
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  body{
    min-width: 37.5rem;
    max-width: 60rem;
    height: calc(100vh - 2rem);
    margin : 1rem auto;

    font-family: 'IBM Plex Sans', sans-serif;
  }
  a{
    color : inherit;
    text-decoration: none;
  }
  button, input{
    font-family: inherit;
    outline: none;
  }
`;

export default GlobalStyles;
