import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import OurStory from 'src/components/OurStory';
import { LinkRsvp, LinkLanding } from 'src/components/Areas';

const AboutPage = () => {
  return (
    <GeneralLayout
      overlay='primary'
      areaBottomRight={<LinkLanding pos='bottomRight' />}
      areaTopLeft={<LinkRsvp pos='topLeft' />}>
      <OurStory />
    </GeneralLayout>
  );
};

export default AboutPage;
