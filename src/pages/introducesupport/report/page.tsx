// 개발중입니다.

import SponsorReport from '@/components/introducesupport/report/introducesupportReport';
import ThemeHeader from '@/components/common/themeHeader';
import React from 'react';

const ReportPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <SponsorReport />
    </section>
  );
};

export default ReportPage;
