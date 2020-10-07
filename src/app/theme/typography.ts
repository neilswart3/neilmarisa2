import { media } from './mediaQueries';
import breakpoints from './breakpoints';
import muiTheme from './muiTheme';
import fonts from './fonts';

const { spacing } = muiTheme;
const { md, lg, xl } = breakpoints.values;

const typography = {
  fontFamily: 'Avenir LT Std Book, sans-serif',
  fontSize: 16,
  h1: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: spacing(2.5),
    fontSize: spacing(3),
    [media(lg)]: {
      fontSize: spacing(3.5),
      lineHeight: spacing(3),
    },
    [media(xl)]: {
      fontSize: spacing(4),
      lineHeight: spacing(3.5),
    },
  },
  h2: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: spacing(2),
    fontSize: spacing(2),
    [media(lg)]: {
      fontSize: spacing(2.5),
      lineHeight: spacing(2.5),
    },
    [media(xl)]: {
      fontSize: spacing(3),
      lineHeight: spacing(3),
    },
  },
  subtitle1: {
    fontFamily: `${fonts.savoye.fontFamily}, sans-serif`,
    lineHeight: spacing(1.5),
    fontSize: spacing(1.5),
    [media(lg)]: {
      fontSize: spacing(2),
      lineHeight: spacing(2),
    },
    [media(xl)]: {
      fontSize: spacing(2.5),
      lineHeight: spacing(2.5),
    },
  },
  body1: {
    fontSize: spacing(0.55),
    [media(md)]: {
      fontSize: spacing(0.65),
    },
  },
};

export default typography;
