import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMission from '@/components/tidings/tidingsMission';
import React from 'react';

const TidingsMissionPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader
        title={'선교 스토리'}
        subTitle={'CGN의 선교 소식을 확인해 보세요.'}
      />
      <TidingsMission />
    </section>
  );
};

export default TidingsMissionPage;
