// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceVision from '@/components/introduce/introduceVision';

const IntroduceVisionPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceVision />
    </section>
  );
};

export default IntroduceVisionPage;
