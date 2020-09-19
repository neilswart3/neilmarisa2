import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Rsvp from 'src/components/Rsvp';
import { LinkLanding, LinkVenue } from 'src/components/Areas';

const RSVPPage = () => {
  return (
    <GeneralLayout
      overlay='primary'
      areaBottomRight={<LinkLanding pos='bottom' />}
      areaTopLeft={<LinkVenue pos='top' />}>
      <Rsvp />
    </GeneralLayout>
  );
}

export default RSVPPage;
