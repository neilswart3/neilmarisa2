import styled from 'styled-components';
import { 
  Button as MuiButton,
} from '@material-ui/core';

const labelAlign = {
  top: 'flex-end',
  bottom: 'flex-start',
};

const absolutePos = {
  top: 'bottom',
  bottom: 'top',
};

const Button = styled(MuiButton)`
  height: 100%;
`;

interface HalfCircleProps {
  pos: 'top' | 'bottom'
}

const HalfCircle = styled(MuiButton)<HalfCircleProps>`
  position: absolute;
  align-items: ${props => labelAlign[props.pos]};
  left: 50%;
  ${props => `${absolutePos[props.pos]}: 0;`}
  height: 50vw;
  width: 200vw;
  border-radius: 50%;
  transform: translateX(-50%);
`;

const Styled = {
  Button,
  HalfCircle,
};

export default Styled;
