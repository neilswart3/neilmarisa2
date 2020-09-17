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
  grid-template: 10% 80% 10% / 1fr;
  height: 100%;

  ${mediaQueries('desktop')`
    grid-template: 1fr / 10% 80% 10%;
  `};
`;

const LinkGreen = styled.div`
  
`;

const LinkRed = styled.div`
  
`;

const Content = styled.div`
  
`;

const Styled = {
  GeneralLayout,
  ContentWrap,
  LinkGreen,
  LinkRed,
  Content,
};

export default Styled;
