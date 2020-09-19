import React from 'react';
import Styled from './styles';

interface Props {
  overlay: 'primary' | 'secondary' | false;
  unsplash: boolean;
  url: string;
}

const Background: React.FC<Props> = props => {
  const { url, unsplash = false, overlay = false } = props;

  const unsplashUrl = (id: string): string => {
    return `https://source.unsplash.com/${id}`;
  }

  return (
    <>
      <Styled.Background imgUrl={unsplash ? unsplashUrl(url) : `img/${url}`} />
      {overlay && <Styled.Overlay overlay={overlay} />}
    </>
  );
};

export default Background;
