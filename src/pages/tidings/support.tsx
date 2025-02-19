//개발중

import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMission from '@/components/tidings/mission/tidingsMission';
import React from 'react';

const SupportPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsMission />
    </section>
  );
};

export default SupportPage;
