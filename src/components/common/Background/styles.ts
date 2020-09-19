import styled from 'styled-components';
import colors from 'src/app/theme/colors';

interface BackgroundProps {
  imgUrl: string;
}

const Background = styled.div<BackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  height: 110%;
  width: 110%;
  background: url(${props => props.imgUrl}) no-repeat center/cover;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: multiply;
  opacity: 0.7;
  z-index: -1;
`;

interface OverlayProps {
  overlay: 'primary' | 'secondary';
}

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  left: 0;
  top: 0%;
  height: 100%;
  width: 100%;
  background-color: ${props => colors[props.overlay]};
  opacity: 0.7;
  z-index: -1;
`;

const Styled = {
  Background,
  Overlay,
};

export default Styled;
