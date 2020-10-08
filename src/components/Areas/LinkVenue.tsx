import React from 'react';
import { HalfCircle } from './common';
import colors from 'src/app/theme/colors';

interface Props {
  pos: 'topLeft' | 'bottomRight';
}

const Green: React.FC<Props> = ({ pos }) => {
  return (
    <HalfCircle
      // bgColor={colors.primary}
      color='primary'
      pos={pos}
      text='Venue'
      path='/venue'
    />
  );
};

export default Green;
