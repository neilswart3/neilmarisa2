import React from 'react';
import { HalfCircle } from './common';
import colors from 'src/app/theme/colors';

interface Props {
  pos: 'topLeft' | 'bottomRight';
}

const Red: React.FC<Props> = ({ pos }) => {
  return (
    <HalfCircle
      // bgColor={colors.secondary}
      color='secondary'
      text='RSVP'
      pos={pos}
      path='/rsvp'
    />
  );
};

export default Red;
