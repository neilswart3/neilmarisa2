import React from 'react';
import Styled from './styles';

interface Props {
  url: string;
}

const Background: React.FC<Props> = ({ url }) => {
  return (
    <Styled.Background imgUrl={`https://source.unsplash.com/${url}/1600x900`} />
  );
};

export default Background;
