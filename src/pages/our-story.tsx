import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import OurStory from 'src/components/OurStory';
import { LinkRsvp, LinkLanding } from 'src/components/Areas';

const VenuePage = () => {
  return (
    <GeneralLayout
      overlay='secondary'
      areaBottomRight={<LinkLanding pos='bottomRight' />}
      areaTopLeft={<LinkRsvp pos='topLeft' />}>
      <OurStory />
    </GeneralLayout>
  );
};

export default VenuePage;
