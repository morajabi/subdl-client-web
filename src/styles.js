/* @flow */
import styled, { injectGlobal } from 'styled-components';
import 'normalize.css/normalize.css';
import { colors } from './utils/styleUtils';

injectGlobal`
  /* roboto - normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(../assets/fonts/roboto/Roboto-Regular.woff2) format('woff2'),
      url(../assets/fonts/roboto/Roboto-Regular.ttf) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
  /* roboto - light - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto'), local('Roboto-Light'), url(../assets/fonts/roboto/Roboto-Light.woff2) format('woff2'),
      url(../assets/fonts/roboto/Roboto-Light.ttf) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
  /* roboto - light - italic - abcdefghijklmnopqrstuvwxyz */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: local('Roboto'), local('Roboto-LightItalic'), url(../assets/fonts/roboto/Roboto-LightItalic.woff2) format('woff2');
  }
  /* roboto - bold - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto'), local('Roboto-Bold'), url(../assets/fonts/roboto/Roboto-Bold.woff2) format('woff2'),
      url(../assets/fonts/roboto/Roboto-Bold.ttf) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif, serif, tahoma;
    min-height: 100%;
    color: #333;
  }

  a {
    text-decoration: none;
    color: ${colors.LINK_BLUE};
  }

  [role=button], a, area, button, input, label, select, summary, textarea {
    touch-action: manipulation;
  }
`;
