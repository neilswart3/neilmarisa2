import fonts from './fonts';

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [fonts.savoye],
    },
  },
};

export default overrides;
