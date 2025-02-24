// 개발중입니다.

import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMission from '@/components/tidings/mission/tidingsMission';
import React from 'react';

const SupportPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <TidingsHeader />
      <TidingsMission />
    </section>
  );
};

export default SupportPage;
