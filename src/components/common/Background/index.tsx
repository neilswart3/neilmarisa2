import React from 'react';
import Styled from './styles';

interface Props {
  unsplash: boolean;
  url: string;
}

const Background: React.FC<Props> = ({ url, unsplash = false }) => {
  const unsplashUrl = (id: string): string => {
    return `https://source.unsplash.com/${id}/1600x900`;
  }

  console.log('unsplash:', unsplash);

  return (
    <Styled.Background imgUrl={unsplash ? unsplashUrl(url) : `img/${url}` } />
  );
};

export default Background;
