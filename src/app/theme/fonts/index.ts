import { createGlobalStyle } from 'styled-components';

const SavoyeTff = 'font/SavoyeLetPlain.ttf';
const AvenirMediumTff = 'font/AvenirLTStd-Medium.ttf';
const AvenirBookTff = 'font/AvenirLTStd-Book.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Savoye LET';
    src: url(${SavoyeTff}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir LT Std';
    src: url(${AvenirMediumTff}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir LT Std';
    src: url(${AvenirBookTff}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
