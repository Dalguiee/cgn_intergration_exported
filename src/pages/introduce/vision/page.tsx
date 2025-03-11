// 훅
import React, { useState } from 'react';

// 컴포넌트
import ThemeHeader from '@/components/common/themeHeader';
import IntroduceVision from '@/components/introduce/vision/introduceVision';
import IntroduceVisionPopup from '@/components/introduce/vision/introduceVisionPopup';

const IntroduceVisionPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className={`bg-primary-50`}>
      <ThemeHeader />
      <IntroduceVision popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      <IntroduceVisionPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    </section>
  );
};

export default IntroduceVisionPage;
