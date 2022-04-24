import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import BMYEONSUNG from '../assets/fonts/BMYEONSUNG.ttf';
import BMYEONSUNG2 from '../assets/fonts/BMYEONSUNG.woff';
import BMYEONSUNG3 from '../assets/fonts/BMYEONSUNG.woff2';

import BMHANNAAir from '../assets/fonts/BMHANNAAir.ttf';
import BMHANNAAir2 from '../assets/fonts/BMHANNAAir.woff';
import BMHANNAAir3 from '../assets/fonts/BMHANNAAir.woff2';

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
  @font-face {
    font-family: BMYEONSUNG;
    src: url(${BMYEONSUNG3}) format("woff2"),
    url(${BMYEONSUNG2}) format("woff"),
    url(${BMYEONSUNG}) format("truetype");
    font-display: fallback;
  }
  @font-face {
    font-family: BMHANNAAir;
    src: url(${BMHANNAAir3}) format("woff2"),
    url(${BMHANNAAir2}) format("woff"),
    url(${BMHANNAAir}) format("truetype");
    font-display: fallback;
  }
  #search-bar, #date-bar, #filter-bar, #sort-bar,.aside-title, .aside-content {
    font-family: 'BMYEONSUNG', sans-serif;
  } 
  #card-list,.tab {
    font-family: 'BMHANNAAir', sans-serif;
  }
  .loding-image {
    font-family: 'BMYEONSUNG', sans-serif;
  }
`;
