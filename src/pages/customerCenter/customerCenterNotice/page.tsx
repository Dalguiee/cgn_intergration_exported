// 훅
import React from 'react';

// 컴포넌트
import CustomerCenterNotice from '@/components/customerCenter/notice/customerCenterNotice';
import ThemeHeader from '@/components/common/themeHeader';
import CustomerCenterCategoryList from '@/components/customerCenter/customerCenterCategoryList';

const CustomerCenterNoticePage = () => {
  return (
    <section>
      <ThemeHeader />
      <CustomerCenterCategoryList />
      <CustomerCenterNotice />
    </section>
  );
};

export default CustomerCenterNoticePage;
