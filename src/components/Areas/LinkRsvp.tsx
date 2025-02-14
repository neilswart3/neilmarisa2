import React from 'react';
import { HalfCircle } from './common';

interface Props {
  pos: 'topLeft' | 'bottomRight';
}

const Red: React.FC<Props> = ({ pos }) => {
  return <HalfCircle color='secondary' text='RSVP' pos={pos} path='/rsvp' />;
};

export default Red;
