import React from 'react';
import { HalfCircle } from './common';

interface Props {
  pos: 'top' | 'bottom';
}

const Green: React.FC<Props> = ({ pos }) => {
  return <HalfCircle color='default' pos={pos} text='Back' path='/' />;
}

export default Green;
