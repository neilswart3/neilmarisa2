import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import mediaQueries from 'src/app/theme/mediaQueries';
import muiTheme from 'src/app/theme/muiTheme';

const labelAlign = {
  topLeft: 'flex-end',
  bottomRight: 'flex-start',
};

const translate = {
  topLeft: 'translate(0, -50%)',
  bottomRight: 'translate(0, -50%)',
};

const absolutePos = {
  sm: {
    topLeft: 'bottom',
    bottomRight: 'top',
  },
  lg: {
    topLeft: 'right',
    bottomRight: 'left',
  },
};

const Button = styled(MuiButton)`
  height: 100%;
`;

interface HalfCircleProps {
  pos: 'topLeft' | 'bottomRight';
}

const HalfCircle = styled(MuiButton)<HalfCircleProps>`
  position: absolute;
  align-items: ${props => labelAlign[props.pos]};
  left: 50%;
  ${props => `${absolutePos.sm[props.pos]}: 0;`}
  height: 50vw;
  width: 200vw;
  padding: 1rem;
  border-radius: 50%;
  transform: translateX(-50%);

  ${props =>
    mediaQueries.lg(`
    left: unset;
    bottom: unset;
    top: 50%;
    width: 200%;
    height: 120vh;
    align-items: center;
    padding: 0;
    ${absolutePos.lg[props.pos]}: 0;
    transform: ${translate[props.pos]};
  `)}

  .MuiButton-label {
    span {
      line-height: 1.3;
    }

    ${props =>
      mediaQueries.lg(`
      display: flex;
      flex-direction: column;
      align-items: ${labelAlign[props.pos]};

      span {
        display: inline-block;
        width: 50%;
        text-align: center;
      }
    `)}
  }
`;

const Styled = {
  Button,
  HalfCircle,
};

export default Styled;
