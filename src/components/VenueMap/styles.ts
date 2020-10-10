import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';
import colors from 'src/app/theme/colors';
import muiTheme from 'src/app/theme/muiTheme';

const Map = styled.div`
  height: 200px;
  width: 100%;
  margin: ${muiTheme.spacing(1)} 0;

  ${mediaQueries.md(`
    height: 300px;
  `)};
`;

const Marker = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  svg {
    color: ${colors.primary};
  }

  p {
    text-align: center;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Styled = { Map, Marker, ButtonWrap };

export default Styled;
