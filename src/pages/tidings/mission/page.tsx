// 개발중입니다.

import ThemeHeader from '@/components/common/themeHeader';
import TidingsMission from '@/components/tidings/mission/tidingsMission';
import React from 'react';

const MissionPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsMission />
    </section>
  );
};

export default MissionPage;
