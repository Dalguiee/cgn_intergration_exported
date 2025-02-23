// 개발중입니다.

import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMission from '@/components/tidings/mission/tidingsMission';
import React from 'react';

const MissionPage = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-primary-50'>
      <TidingsHeader />
      <TidingsMission />
    </section>
  );
};

export default MissionPage;
