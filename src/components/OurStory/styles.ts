import styled from 'styled-components';
import { Typography as MuiTypography } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import muiTheme from 'src/app/theme/muiTheme';
import mediaQueries from 'src/app/theme/mediaQueries';

const PScrollbar = styled(PerfectScrollbar)`
  height: 69vh;
  padding: 0 ${muiTheme.spacing(1)};

  ${mediaQueries.lg(`
    height: 80vh;
  `)}

  ${mediaQueries.xl(`
    height: 74vh;
  `)}
`;

const OurStory = styled.div``;

const StorySection = styled.div`
  text-align: center;

  ${mediaQueries.md(`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  `)}

  p {
    ${mediaQueries.md(`
      padding-left: ${muiTheme.spacing(0.75)};
    `)}
  }

  &:nth-child(even) {
    ${mediaQueries.md(`
      flex-direction: row-reverse;
      text-align: right;
    `)}

    p {
      ${mediaQueries.md(`
        padding-right: ${muiTheme.spacing(0.75)};
      `)}
    }
  }
`;

const StoryImage = styled.div`
  width: 30%;
  min-width: 250px;
  margin: 0 auto ${muiTheme.spacing(0.5)};
`;

const ImageWrap = styled.span`
  grid-area: content;
  position: relative;
  display: inline-block;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Typography = styled(MuiTypography)`
  ${mediaQueries.md(`
    width: 70%;
  `)}
`;

const Styled = {
  PScrollbar,
  OurStory,
  StorySection,
  StoryImage,
  ImageWrap,
  Typography,
};

export default Styled;
