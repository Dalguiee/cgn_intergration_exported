import ThemeHeader from '@/components/common/themeHeader';
import IntroduceRecruit from '@/components/introduce/recruit/introduceRecruit';
import React from 'react';

const IntroduceRecruitPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceRecruit />
    </section>
  );
};

export default IntroduceRecruitPage;
