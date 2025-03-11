// 훅
import React from 'react';

// 컴포넌트
import RecruitDetail from '@/components/introduce/recruit/recruitDetail';
import ThemeHeader from '@/components/common/themeHeader';

const RecruitDetailPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader className={`max-lg:hidden`} />
      <RecruitDetail />
    </section>
  );
};

export default RecruitDetailPage;
