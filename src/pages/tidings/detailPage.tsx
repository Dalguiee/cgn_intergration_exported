// 훅
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import TidingsDetail from '@/components/tidings/tidingsDetail';
import ThemeHeader from '@/components/common/themeHeader';

const DetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <TidingsDetail />
    </section>
  );
};

export default DetailPage;
