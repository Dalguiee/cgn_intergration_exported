// 훅
import React from 'react';

// 컴포넌트
import IntroduceWorldwide from '@/components/introduce/worldwide/introduceWorldwide';
import ThemeHeader from '@/components/common/themeHeader';

const IntroduceWorldwidePage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceWorldwide />
    </section>
  );
};

export default IntroduceWorldwidePage;
