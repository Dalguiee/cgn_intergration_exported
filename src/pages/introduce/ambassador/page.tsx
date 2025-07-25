// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceAmbassador from '@/components/introduce/ambassador/introduceAmbassador';

const IntroduceAmbassadorPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceAmbassador />
    </section>
  );
};

export default IntroduceAmbassadorPage;
