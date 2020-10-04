import styled from 'styled-components';
import colors from 'src/app/theme/colors';

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

const Styled = { Marker };

export default Styled;
