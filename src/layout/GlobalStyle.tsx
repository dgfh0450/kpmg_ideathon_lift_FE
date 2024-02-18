import React from 'react';
import { createGlobalStyle } from "styled-components";
import PretendardVariable from '../fonts/PretendardVariable.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'PretendardVariable';
  src: url(${PretendardVariable}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
  *, *::before, *::after {
    box-sizing: border-box;

    font-family: 'PretendardVariable';
  }

`;

export default GlobalStyle;