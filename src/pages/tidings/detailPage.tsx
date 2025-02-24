import TidingsDetail from '@/components/tidings/tidingsDetail';
import TidingsHeader from '@/components/tidings/tidingsHeader';
import React from 'react';

const DetailPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <TidingsHeader />
      <TidingsDetail />
    </section>
  );
};

export default DetailPage;
