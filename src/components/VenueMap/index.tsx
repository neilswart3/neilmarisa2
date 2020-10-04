import React from 'react';
import GoogleMapReact from 'google-map-react';
import publicSettings from 'src/app/publicSettings';
import Marker from './Marker';

const VenueMap: React.FC = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: publicSettings.google.apiKey }}
        defaultCenter={{
          lat: -25.767738,
          lng: 28.48434199999997,
        }}
        defaultZoom={15}>
        <Marker
          lat={-25.767738}
          lng={28.48434199999997}
          text='Casablanca&nbsp;Manor'
        />
      </GoogleMapReact>
    </div>
  );
};

export default VenueMap;
