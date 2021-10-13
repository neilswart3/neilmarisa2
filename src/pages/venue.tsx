import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Venue from 'src/components/Venue';
import { LinkRsvp, LinkLanding } from 'src/components/Areas';

const VenuePage: React.FC = () => {
  return (
    <GeneralLayout
      overlay='primary'
      areaBottomRight={<LinkLanding pos='bottomRight' />}
      areaTopLeft={<LinkRsvp pos='topLeft' />}>
      <Venue />
    </GeneralLayout>
  );
};

export default VenuePage;
