// 훅
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceRecruit from '@/components/introduce/recruit/introduceRecruit';

const IntroduceRecruitPage = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceRecruit />
    </section>
  );
};

export default IntroduceRecruitPage;
