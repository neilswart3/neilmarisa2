import React from 'react';
import GeneralLayout from 'src/layouts/GeneralLayout';
import Rsvp from 'src/components/Rsvp';
import { LinkLanding, LinkVenue } from 'src/components/Areas';

const RSVPPage: React.FC = () => {
  return (
    <GeneralLayout
      overlay='secondary'
      areaBottomRight={<LinkLanding pos='bottomRight' />}
      areaTopLeft={<LinkVenue pos='topLeft' />}>
      <Rsvp />
    </GeneralLayout>
  );
};

export default RSVPPage;
