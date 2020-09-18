import fonts from './fonts';

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [fonts.savoye, fonts.avenirBook, fonts.avenirMedium],
    },
  },
};

export default overrides;
