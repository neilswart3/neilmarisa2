import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import muiTheme from 'src/app/theme/muiTheme';

const Map = styled.div`
  height: 300px;
  width: 100%;
  margin: ${muiTheme.spacing(1)} 0;
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
