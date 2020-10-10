import React from 'react';
import Styled from './styles';

interface PlaneProps {
  pos: 'top' | 'bottom';
  color: 'primary' | 'secondary';
}

const Plane: React.FC<PlaneProps> = ({ pos, color }) => {
  return (
    <Styled.PlaneContainerWrap pos={pos}>
      <Styled.PlaneContainer pos={pos} color={color}>
        <Styled.PlaneContainerInner>
          <Styled.PlaneIcon1 />
          <Styled.PlaneIcon2 />
          <Styled.PlaneIcon3 />
          <Styled.PlaneIcon4 />
        </Styled.PlaneContainerInner>
      </Styled.PlaneContainer>
    </Styled.PlaneContainerWrap>
  );
};

export default Plane;
