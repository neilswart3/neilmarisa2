import React from 'react';
import { compose } from 'redux';
import {
  GoogleMap as GMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

interface Props {
  isMarkerShown: boolean;
}

const GoogleMap: React.FC<Props> = ({ isMarkerShown = false }) => {
  return (
    <GMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GMap>
  );
};

export default compose(withGoogleMap, withScriptjs)(GoogleMap);
