// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import SubscribePayment from '@/components/subscribePayment/subscribePayment';
import SubscribePaymentPopup from '@/components/subscribePayment/subscribePaymentPopup';

const SubscribePaymentPage = () => {
  const location = useLocation();
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <section>
      <SubscribePayment setPopupOpen={setPopupOpen} />
      <SubscribePaymentPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
    </section>
  );
};

export default SubscribePaymentPage;
