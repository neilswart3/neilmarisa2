import theme from './spacing';
import fonts from './fonts';

const typography = {
  fontFamily: 'Avenir LT Std Book, sans-serif',
  h1: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: theme.spacing(3),
    fontSize: 80,
  },
  fontSize: 16,
  h5: {
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: 0.5,
  },
};

export default typography;
