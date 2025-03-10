// 훅
import React from 'react';

// 컴포넌트
import CustomerCenterNotice from '@/components/customerCenter/notice/customerCenterNotice';
import ThemeHeader from '@/components/common/themeHeader';

const CustomerCenterNoticePage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <CustomerCenterNotice />
    </section>
  );
};

export default CustomerCenterNoticePage;
