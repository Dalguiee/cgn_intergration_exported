// 개발중입니다.

import TidingsBroadcast from '@/components/tidings/broadcast/tidingsBroadcast';
import TidingsHeader from '@/components/tidings/tidingsHeader';
import React from 'react';

const BroadcastPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsBroadcast />
    </section>
  );
};

export default BroadcastPage;
