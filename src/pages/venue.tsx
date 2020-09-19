import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Venue from 'src/components/Venue';
import { LinkRsvp, LinkLanding } from 'src/components/Areas';

const VenuePage = () => {
  return (
    <GeneralLayout
      overlay='secondary'
      areaBottomRight={<LinkLanding pos='bottom' />}
      areaTopLeft={<LinkRsvp pos='top' />}>
      <Venue />
    </GeneralLayout>
  );
};

export default VenuePage;
