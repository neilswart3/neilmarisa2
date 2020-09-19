import React from 'react';
import { HalfCircle } from './common';

interface Props {
  pos: 'top' | 'bottom';
}

const Green: React.FC<Props> = ({ pos }) => {
  return <HalfCircle color='secondary' pos={pos} text='Venue' path='/venue' />;
}

export default Green;
