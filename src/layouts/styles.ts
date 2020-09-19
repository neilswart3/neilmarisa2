import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';

const GeneralLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @font-face {
    font-family: 'Savoye LET';
    src: url('font/SavoyeLetPlain.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir LT Std';
    src: url('font/AvenirLTStd-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir LT Std';
    src: url('font/AvenirLTStd-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template: 7.5% 85% 7.5% / 1fr;
  height: 100%;

  /* ${mediaQueries('desktop')`
    grid-template: 1fr / 7.5% 85% 7.5%;
  `}; */
`;

const AreaGreenWrap = styled.div`
  position: relative;
`;

const AreaRedWrap = styled.div`
  position: relative;
`;

const Content = styled.div`
  
`;

const Styled = {
  GeneralLayout,
  ContentWrap,
  AreaGreenWrap,
  AreaRedWrap,
  Content,
};

export default Styled;
