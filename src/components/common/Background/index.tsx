import React from 'react';
import Styled from './styles';

interface Props {
  overlay: 'primary' | 'secondary' | false;
  url: string;
}

const Background: React.FC<Props> = props => {
  const { url, overlay = false } = props;

  return (
    <>
      <Styled.Background imgUrl={`img/${url}`} />
      <Styled.Overlay overlay={overlay} />
    </>
  );
};

export default Background;
