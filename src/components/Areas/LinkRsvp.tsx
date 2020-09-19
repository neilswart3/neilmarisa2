import React from 'react';
import { HalfCircle } from './common';

interface Props {
  pos: 'top' | 'bottom';
}

const Red: React.FC<Props> = ({ pos }) => {
  return <HalfCircle color='primary' text='RSVP' pos={pos} path='/rsvp' />;
};

export default Red;
