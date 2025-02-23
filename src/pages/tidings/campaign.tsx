import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsCampaign from '@/components/tidings/campaign/tidingsCampaign';
import React from 'react';

const CampaignPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <TidingsHeader />
      <TidingsCampaign />
    </section>
  );
};

export default CampaignPage;
