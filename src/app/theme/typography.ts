import theme from './spacing';
import fonts from './fonts';

const typography = {
  fontFamily: 'Avenir LT Std Book, sans-serif',
  h1: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: theme.spacing(2.5),
    fontSize: 80,
  },
  h2: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: theme.spacing(2),
    fontSize: 60,
  },
  h5: {
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: 0.5,
  },
  subtitle1: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: theme.spacing(2),
    fontSize: 42,
  },
  fontSize: 16,
};

export default typography;
