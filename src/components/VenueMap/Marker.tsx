import React from 'react';
import { Typography } from '@material-ui/core';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import Styled from './styles';

export interface MarkerProps {
  text: string;
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return (
    <Styled.Marker>
      <Typography variant='body1' align='center'>
        {text}
      </Typography>
      <FlightLandIcon />
    </Styled.Marker>
  );
};

export default Marker;
