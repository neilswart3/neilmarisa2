import React from 'react';
import { HalfCircle } from './common';

interface Props {
  pos: 'topLeft' | 'bottomRight';
}

const Green: React.FC<Props> = ({ pos }) => {
  return <HalfCircle color='primary' pos={pos} text='Venue' path='/venue' />;
};

export default Green;
