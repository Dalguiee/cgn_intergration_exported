import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMain from '@/components/tidings/tidingsMain';
import React from 'react';

const CampaignPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsMain />
    </section>
  );
};

export default CampaignPage;
