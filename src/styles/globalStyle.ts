import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    box-sizing: border-box;
  }
  html {
      font-size:10px;
  }
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
  ul {
    padding:0;
    margin: 0;
  }
  li {
    list-style: none;
  }
`;
