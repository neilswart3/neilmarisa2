import styled from 'styled-components';
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

const Styled = { PScrollbar };

export default Styled;
