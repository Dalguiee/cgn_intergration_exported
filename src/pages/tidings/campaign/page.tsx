import ThemeHeader from '@/components/common/themeHeader';
import TidingsCampaign from '@/components/tidings/campaign/tidingsCampaign';
import React from 'react';

const CampaignPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsCampaign />
    </section>
  );
};

export default CampaignPage;
