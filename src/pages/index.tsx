import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Landing from 'src/components/Landing';
import { Green, Red } from 'src/components/Areas';

const LandingPage: React.FC = () => {
  return (
    <GeneralLayout areaRed={<Red />} areaGreen={<Green />}>
      <Landing />
    </GeneralLayout>
  );
}

export default LandingPage;
