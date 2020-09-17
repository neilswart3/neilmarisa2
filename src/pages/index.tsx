import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Landing from 'src/components/Landing';

const LandingPage: React.FC = () => {
  return (
    <GeneralLayout>
      <Landing />
    </GeneralLayout>
  );
}

export default LandingPage;
