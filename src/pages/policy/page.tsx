// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import Policy from '@/components/policy/policy';

const PolicyPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <Policy />
    </section>
  );
};

export default PolicyPage;
