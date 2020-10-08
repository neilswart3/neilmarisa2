import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';
import muiTheme from 'src/app/theme/muiTheme';
import colors from 'src/app/theme/colors';

const alignment = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const GeneralLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

interface ContentLayoutProps {
  align: 'top' | 'bottom' | 'center';
  fullwidth: boolean;
}

const ContentLayout = styled.div<ContentLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: ${props => alignment[props.align]};
  height: 100%;
  margin: 0 auto;
  padding: ${muiTheme.spacing(1)} 0;
  max-width: 90vw;

  ${props =>
    mediaQueries.md(`
    max-width: ${props.fullwidth ? '90vw' : muiTheme.spacing(21)};
  `)}

  ${mediaQueries.xl(`
    padding: ${muiTheme.spacing(2)} 0;
  `)}
`;

const ContentLayoutWrap = styled.div`
  width: 100%;

  ${mediaQueries.lg(`
    max-width: 75vw;
  `)}
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

  /* button {
    background-color: ${colors.secondary} !important;
  } */
`;

const Content = styled.div`
  animation: fadeIn 2s ease-in-out;
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
