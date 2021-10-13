import React from 'react';
import Link from 'next/link';
import GoogleMapReact from 'google-map-react';
import { Button } from '@material-ui/core';
import Marker from './Marker';
import Styled from './styles';

const VenueMap: React.FC = () => {
  return (
    <>
      <Styled.Map>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: 'disabled' }}
          defaultCenter={{
            lat: -25.767738,
            lng: 28.48434199999997,
          }}
          defaultZoom={13}>
          <Marker
            lat={-25.767738}
            lng={28.48434199999997}
            text='Casablanca&nbsp;Manor'
          />
        </GoogleMapReact>
      </Styled.Map>
      <Styled.ButtonWrap>
        <Button
          variant='contained'
          color='secondary'
          component='a'
          target='_blank'
          href='https://www.google.co.za/maps/dir//Casablanca+Manor+Wedding,+Function+and+Conference+Venue,+Plot+121+Donkerhoek,+Pretoria,+1001/@-25.7692408,28.4836296,19.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1e955a0a3baca3d3:0xcdf8b2938075b992!2m2!1d28.4825492!2d-25.7712034!3e0'>
          Directions
        </Button>
      </Styled.ButtonWrap>
    </>
  );
};

export default VenueMap;
