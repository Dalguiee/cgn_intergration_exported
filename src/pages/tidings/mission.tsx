import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMission from '@/components/tidings/tidingsMission';
import React from 'react';

const MissionPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsMission />
    </section>
  );
};

export default MissionPage;
