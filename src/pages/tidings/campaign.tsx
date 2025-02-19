import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsCampaign from '@/components/tidings/campaign/tidingsCampaign';
import React from 'react';

const CampaignPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsCampaign />
    </section>
  );
};

export default CampaignPage;
