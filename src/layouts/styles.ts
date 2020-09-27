import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';

const GeneralLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentLayoutWrap = styled.div`
  width: 100%;
  max-width: 75vw;
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template: 7.5% 85% 7.5% / 1fr;
  height: 100%;

  ${mediaQueries.lg(`
    grid-template: 1fr / 5% 90% 5%;
  `)};
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
  ContentLayout,
  ContentLayoutWrap,
};

export default Styled;
