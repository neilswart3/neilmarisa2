import fonts from './fonts';

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [fonts.savoye],
    },
  },
  MuiFormControl: {
    root: {
      color: '#fff',
    }
  },
};

export default overrides;
