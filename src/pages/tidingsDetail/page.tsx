import TidingsDetail from '@/components/tidings/tidingsDetail';
import TidingsHeader from '@/components/tidings/tidingsHeader';
import Locator from '@/layouts/locator';
import React from 'react';

const TidingsDetailPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Locator />
      <TidingsHeader />
      <TidingsDetail />
    </section>
  );
};

export default TidingsDetailPage;
