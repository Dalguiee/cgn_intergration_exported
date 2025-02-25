// 개발중입니다.

import TidingsBroadcast from '@/components/tidings/broadcast/tidingsBroadcast';
import ThemeHeader from '@/components/common/themeHeader';
import React from 'react';

const BroadcastPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsBroadcast />
    </section>
  );
};

export default BroadcastPage;
