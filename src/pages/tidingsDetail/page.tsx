import TidingsDetail from '@/components/tidings/tidingsDetail';
import TidingsHeader from '@/components/tidings/tidingsHeader';
import React from 'react';

const TidingsDetailPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader
        title={'캠페인/이벤트'}
        subTitle={'CGN의 캠페인/이벤트를 확인해 보세요.'}
      />
      <TidingsDetail />
    </section>
  );
};

export default TidingsDetailPage;
