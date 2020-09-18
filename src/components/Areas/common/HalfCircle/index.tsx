import React from 'react';
import Styled from './styles';

interface Props {
  color: 'primary' | 'secondary';
  text?: string;
  pos: 'top' | 'bottom';
}

const HalfCircle: React.FC<Props> = ({ color, pos, text = '' }) => {
  return (
    <Styled.HalfCircle
      pos={pos}
      variant='contained'
      color={color}
      disableElevation
      fullWidth>
      {text}
    </Styled.HalfCircle>
  );
};

export default HalfCircle;
