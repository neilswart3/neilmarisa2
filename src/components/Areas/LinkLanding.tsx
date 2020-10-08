import React from 'react';
import { HalfCircle } from './common';
import colors from 'src/app/theme/colors';

interface Props {
  pos: 'topLeft' | 'bottomRight';
}

const Green: React.FC<Props> = ({ pos }) => {
  return (
    <HalfCircle
      // bgColor={colors.white}
      color='default'
      pos={pos}
      text='Back'
      path='/'
    />
  );
};

export default Green;
