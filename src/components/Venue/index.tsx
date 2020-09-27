import React from 'react';
import { Typography } from '@material-ui/core';
import ContentLayout from 'src/layouts/ContentLayout';
import GoogleMap  from 'src/components/GoogleMap';
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
      {/* <GoogleMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
    </ContentLayout>
  );
};

export default Venue;
