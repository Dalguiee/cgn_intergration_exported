// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceOrganization from '@/components/introduce/organization/introduceOrganization';

const IntroduceOrganizationPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader className={`max-lg:hidden`} />
      <IntroduceOrganization />
    </section>
  );
};

export default IntroduceOrganizationPage;
