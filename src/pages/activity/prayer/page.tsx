// 훅
import React from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import ParticipatePrayer from '@/components/activity/prayer/participatePrayer';

const ParticipatePrayerPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <ParticipatePrayer />
    </section>
  );
};

export default ParticipatePrayerPage;
