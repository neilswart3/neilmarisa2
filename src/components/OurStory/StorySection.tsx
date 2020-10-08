import React from 'react';
import { Typography } from '@material-ui/core';
import Image from 'src/components/common/Image';
import Styled from './styles';

export interface Props {
  item: {
    images: {
      src: string;
      name: string;
    }[];
    text: string;
  };
}

const StorySection: React.FC<Props> = ({ item }) => {
  return (
    <Styled.StorySection>
      <Styled.StoryImage>
        {item.images.map(({ src, name }) => (
          <Styled.ImageWrap key={name}>
            <Image src={src} alt={name} />
          </Styled.ImageWrap>
        ))}
      </Styled.StoryImage>
      {item.text && (
        <Styled.Typography variant='body1' gutterBottom>
          {item.text}
        </Styled.Typography>
      )}
    </Styled.StorySection>
  );
};

export default StorySection;
