// 훅
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import CustomerCenterNoticeDetail from '@/components/customerCenter/notice/customerCenterNoticeDetail';

const CustomerCenterNoticeDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <section>
      <CustomerCenterNoticeDetail />
    </section>
  );
};

export default CustomerCenterNoticeDetailPage;
