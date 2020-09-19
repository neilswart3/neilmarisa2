import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';

const GeneralLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template: 7.5% 85% 7.5% / 1fr;
  height: 100%;

  /* ${mediaQueries('desktop')`
    grid-template: 1fr / 7.5% 85% 7.5%;
  `}; */
`;

const TopLeftWrap = styled.div`
  position: relative;
`;

const BottomRightWrap = styled.div`
  position: relative;
`;

const Content = styled.div`
  
`;

const Styled = {
  GeneralLayout,
  ContentWrap,
  TopLeftWrap,
  BottomRightWrap,
  Content,
};

export default Styled;
