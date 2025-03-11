// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceRecruit from '@/components/introduce/recruit/introduceRecruit';

const IntroduceRecruitPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceRecruit />
    </section>
  );
};

export default IntroduceRecruitPage;
