// 개발중입니다.

import TidingsBroadcast from '@/components/tidings/broadcast/tidingsBroadcast';
import TidingsHeader from '@/components/tidings/tidingsHeader';
import React from 'react';

const BroadcastPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <TidingsHeader />
      <TidingsBroadcast />
    </section>
  );
};

export default BroadcastPage;
