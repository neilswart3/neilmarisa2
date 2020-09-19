import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Landing from 'src/components/Landing';
import { LinkRsvp, LinkVenue } from 'src/components/Areas';

const LandingPage: React.FC = () => {
  return (
    <GeneralLayout
      overlay={false}
      areaBottomRight={<LinkRsvp pos='bottom' />}
      areaTopLeft={<LinkVenue pos='top' />}>
      <Landing />
    </GeneralLayout>
  );
}

export default LandingPage;
