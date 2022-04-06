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
    max-width: 80rem;
    height: 100vh;
    margin : 0 auto;
  }
`;

export default GlobalStyles;
