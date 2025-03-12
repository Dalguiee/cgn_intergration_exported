// 훅
import React from 'react';

// 컴포넌트
import ActivityVisit from '@/components/activity/visit/activityVisit';
import ThemeHeader from '@/components/common/themeHeader';

const ActivityVisitPage = () => {
  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <ActivityVisit />
    </section>
  );
};

export default ActivityVisitPage;
