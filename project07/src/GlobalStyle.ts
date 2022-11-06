import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    font-size: 10px;
  }
  body {
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
