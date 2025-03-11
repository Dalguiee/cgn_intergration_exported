// 훅
import React, { useState } from 'react';

// 컴포넌트
import SubscribePayment from '@/components/subscribePayment/subscribePayment';
import SubscribePaymentPopup from '@/components/subscribePayment/subscribePaymentPopup';

const SubscribePaymentPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);

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
