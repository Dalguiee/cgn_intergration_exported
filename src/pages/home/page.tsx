// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import TopBanner from '@/components/home/topBanner/homeTopBanner';
import HomeCampaignEvent from '@/components/home/campaignEvent/homeCampaignEvent';
import HomeFondantContents from '@/components/home/fondantContents/homeFondantContents';
import HomeTidings from '@/components/home/tidings/homeTidings';
import HomeMission from '@/components/home/mission/homeMission';
import HomeNoticeMain from '@/components/home/notice/homeNoticeMain';
import HomeTwoPartedBanner from '@/components/home/middleBanner/homeTwoPartedBanner';
import HomeOnePartedBanner from '@/components/home/middleBanner/homeOnePartedBanner';
import ResponsiveScanner from '@/components/common/responsiveScanner';
import Popup from '@/components/home/popup/popup';

// 데이터
import { homeTwoPartedBannersDataUpper } from '@/db/mockup';
import { homeTowPartedBannersDataUnder } from '@/db/mockup';

const HomePage = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const [popupOpen, setPopupOpen] = useState(false);

  // 저장된 스크롤 위치로 이동
  useEffect(() => {
    const scrollRestore = () => {
      const savedScrollY = sessionStorage.getItem('scrollY');
      if (savedScrollY !== null) {
        window.scrollTo(0, parseInt(savedScrollY, 10));
      }
      sessionStorage.removeItem('scrollY');
    };
    scrollRestore();
  }, [location?.pathname]);

  return (
    <section>
      <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      <TopBanner mobile={mobile} />
      <HomeCampaignEvent />
      <HomeFondantContents />
      <HomeTidings />
      <section
        className={`h-fit w-full overflow-x-scroll bg-secondary-brown_bg_2 scrollbar-hide max-lg:px-16 max-lg:pb-60`}
      >
        <HomeTwoPartedBanner
          item={homeTwoPartedBannersDataUpper}
          mobile={mobile}
        />
      </section>
      <HomeMission mobile={mobile} />
      <section className={`h-fit pb-80 max-lg:pb-12 max-lg:pt-60`}>
        <HomeOnePartedBanner mobile={mobile} />
      </section>
      <section
        className={`h-fit w-full overflow-x-scroll pb-120 scrollbar-hide max-lg:px-16 max-lg:pb-60`}
      >
        <HomeTwoPartedBanner
          item={homeTowPartedBannersDataUnder}
          mobile={mobile}
        />
      </section>
      <HomeNoticeMain />
    </section>
  );
};

export default HomePage;
