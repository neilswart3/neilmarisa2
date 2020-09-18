const SavoyeTff = 'font/SavoyeLetPlain.ttf';
const AvenirMediumTff = 'font/AvenirLTStd-Medium.ttf';
const AvenirBookTff = 'font/AvenirLTStd-Book.ttf';

const fonts = {
  savoye: {
    fontFamily: 'Savoye LET',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 100,
    src: `
      local('Savoye LET'),
      url(${SavoyeTff}) format('truetype')
    `,
  },
  avenirMedium: {
    fontFamily: 'Avenir LT Std Medium',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
      local('Avenir LT Std Medium'),
      url(${AvenirMediumTff}) format('truetype')
    `,
  },
  avenirBook: {
    fontFamily: 'Avenir LT Std Book',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `
      local('Avenir LT Std Book'),
      url(${AvenirBookTff}) format('truetype')
    `,
  },
};

export default fonts;