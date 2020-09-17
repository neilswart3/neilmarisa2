import styled from 'styled-components';

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

const Styled = {
  Background,
};

export default Styled;
