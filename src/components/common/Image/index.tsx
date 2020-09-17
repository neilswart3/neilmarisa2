import React from 'react';
import Styled from './styles';

interface Props {
  src: string;
  alt: string;
};

const Image: React.FC<Props> = ({ src, alt}) => {
  return <Styled.Image src={`img/${src}`} alt={alt} />;
}

export default Image;
