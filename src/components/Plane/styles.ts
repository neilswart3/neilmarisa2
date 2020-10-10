import styled from 'styled-components';
import FlightIcon from '@material-ui/icons/Flight';
import muiTheme from 'src/app/theme/muiTheme';
import colors from 'src/app/theme/colors';
import mediaQueries from 'src/app/theme/mediaQueries';

interface PlaneProps {
  pos: 'top' | 'bottom';
}

const color = {
  top: colors.secondary,
  bottom: colors.primary,
};

const posTransformSm = {
  top: 'translate(-45%, -60%)',
  bottom: 'translate(35%, 70%)',
};

const posTransformLg = {
  top: 'translate(-40%, -75%)',
  bottom: 'translate(40%, 60%)',
};

const PlaneContainerWrap = styled.div<PlaneProps>`
  position: absolute;
  ${props => `
    ${props.pos}: 0;
    ${props.pos === 'top' ? 'left' : 'right'}: 0;
  `}
  width: 150vw;
  height: 150vw;
  border-radius: 50%;
  z-index: -1;
  transform: ${props => posTransformSm[props.pos]};
  opacity: 0.8;

  ${props =>
    mediaQueries.md(`
    width: 100vw;
    height: 100vw;
    transform: ${posTransformLg[props.pos]};
  `)}
`;

interface PlaneContainerProps {
  color?: 'primary' | 'secondary';
}

const PlaneContainer = styled.div<PlaneContainerProps>`
  position: relative;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: 3px dashed;
  color: ${props => colors[props.color]};
  animation: rotate infinite 850s reverse linear;
`;

const PlaneContainerInner = styled.div`
  position: relative;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  animation: rotate infinite 750s reverse linear;
`;

const PlaneIcon = styled(FlightIcon)`
  position: absolute;
  transform: translate(50%, -50%);
  font-size: ${muiTheme.spacing(2)};
`;

const PlaneIcon1 = styled(PlaneIcon)`
  top: 50%;
  right: -1.5px;
`;

const PlaneIcon2 = styled(PlaneIcon)`
  top: 50%;
  left: -2.5px;
  transform: translate(-50%, -50%) rotate(180deg);
`;

const PlaneIcon3 = styled(PlaneIcon)`
  top: -2.5px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;

const PlaneIcon4 = styled(PlaneIcon)`
  bottom: -2px;
  left: 50%;
  transform: translate(-50%, 50%) rotate(90deg);
`;

const Styled = {
  PlaneContainerWrap,
  PlaneContainer,
  PlaneContainerInner,
  PlaneIcon1,
  PlaneIcon2,
  PlaneIcon3,
  PlaneIcon4,
};

export default Styled;
