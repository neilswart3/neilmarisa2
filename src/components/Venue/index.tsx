import React from 'react';
import { Typography } from '@material-ui/core';
import ContentLayout from 'src/layouts/ContentLayout';
import VenueMap from 'src/components/VenueMap';
import Styled from './styles';

const Venue: React.FC = () => {
  return (
    <ContentLayout title='VENUE'>
      <Typography variant='subtitle1' align='center'>
        Casablanca Manor, Pretoria
      </Typography>
      <Typography variant='body1' align='center'>
        <span>Date:</span> Friday 27 Nov 2020
      </Typography>
      <Typography variant='body1' align='center'>
        <span>Time:</span> 15:30 for 16:00
      </Typography>
      <VenueMap />
    </ContentLayout>
  );
};

export default Venue;
