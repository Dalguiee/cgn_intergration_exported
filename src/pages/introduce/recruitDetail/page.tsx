// 훅
import React, { useEffect } from 'react';

// 컴포넌트
import RecruitDetail from '@/components/introduce/recruit/recruitDetail';
import ThemeHeader from '@/components/common/themeHeader';
import { useLocation } from 'react-router-dom';

const RecruitDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader className={`max-lg:hidden`} />
      <RecruitDetail />
    </section>
  );
};

export default RecruitDetailPage;
