import TidingsDetail from '@/components/tidings/tidingsDetail';
import ThemeHeader from '@/components/common/themeHeader';
import React from 'react';

const DetailPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsDetail />
    </section>
  );
};

export default DetailPage;
