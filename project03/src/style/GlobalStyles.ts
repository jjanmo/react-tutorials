import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 10px;
  }
  * {
    margin: 0;
    padding : 0; 
    box-sizing: border-box;
  }
  body{
    width: 50rem;
    min-height: calc(100vh - 2rem);
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
`

export default GlobalStyles
