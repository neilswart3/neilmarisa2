import React from 'react';
import HEREMap, { Marker } from '@impargo/react-here-maps';

const VenueMap = () => {
  return (
    <HEREMap
      appId='mTLfSo7LfiaeFrsOeBOI'
      appCode='CW9nK4ctqgTEEG9Mo8fxvVoZfIHQMGtUuDCzOSuc35Y'
      center={{ lat: 10.998666, lng: -63.79841 }}
      zoom={12}
    >
    </HEREMap>
  );
}

export default VenueMap;
