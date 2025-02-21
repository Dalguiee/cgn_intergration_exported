// 개발중입니다.

import React from 'react';
import VerticalScroller from '@/components/home/verticalScroller/verticalScroller';
import FirstSection from '@/components/home/section/firstSection';
import SecondSection from './section/secondSection';

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <VerticalScroller />
    </>
  );
};

export default Home;
