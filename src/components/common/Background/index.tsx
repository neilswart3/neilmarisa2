import React from 'react';
import Styled from './styles';

interface Props {
  url: string;
}

const Background: React.FC<Props> = ({ url }) => {
  return <Styled.Background imgUrl={`img/${url}`} />;
};

export default Background;
