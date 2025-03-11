// 훅
import React from 'react';

// 컴포넌트
import TidingsDetail from '@/components/tidings/tidingsDetail';
import ThemeHeader from '@/components/common/themeHeader';

const DetailPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsDetail />
    </section>
  );
};

export default DetailPage;
