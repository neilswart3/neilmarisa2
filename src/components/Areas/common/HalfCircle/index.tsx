import React from 'react';
import router from 'next/router';
import Styled from './styles';

interface Props {
  color: 'default' | 'primary' | 'secondary';
  text?: string;
  path: string;
  pos: 'topLeft' | 'bottomRight';
}

const HalfCircle: React.FC<Props> = ({ color, pos, text = '', path }) => {
  const handleClick = (link: string): void => {
    router.push(link, link);
  };

  return (
    <Styled.HalfCircle
      onClick={() => handleClick(path)}
      pos={pos}
      variant='contained'
      color={color}
      disableElevation
      fullWidth>
      {text.split('').map(t => <span>{t}</span>)}
    </Styled.HalfCircle>
  );
};

export default HalfCircle;
