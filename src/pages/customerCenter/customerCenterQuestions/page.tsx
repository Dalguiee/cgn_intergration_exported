// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import CustomerCenterCategoryList from '@/components/customerCenter/customerCenterCategoryList';
import CustomerCenterQuestions from '@/components/customerCenter/questions/customerCenterQuestions';

const CustomerCenterQuestionsPage = () => {
  return (
    <section className={``}>
      <ThemeHeader />
      <CustomerCenterCategoryList />
      <CustomerCenterQuestions />
    </section>
  );
};

export default CustomerCenterQuestionsPage;
