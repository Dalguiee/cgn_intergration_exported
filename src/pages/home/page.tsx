//개발중

// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import TopBanner from '@/components/home/topBanner/homeTopBanner';
import HomeCampaignEvent from '@/components/home/campaignEvent/homeCampaignEvent';
import HomeFondantContents from '@/components/home/fondantContents/homeFondantContents';
import HomeTidings from '@/components/home/tidings/homeTidings';
import HomeMission from '@/components/home/mission/homeMission';
import HomeNoticeMain from '@/components/home/notice/homeNoticeMain';
import HomeTowPartedBanner from '@/components/home/middleBanner/homeTowPartedBanner';
import HomeOnePartedBanner from '@/components/home/middleBanner/homeOnePartedBanner';

const HomePage = () => {
  const [mobile, setMobile] = useState(false);
  // 1024 화면 감지
  useEffect(() => {
    const resizeSetting = () => {
      if (window.innerWidth >= 1024) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    window.addEventListener('resize', resizeSetting);
    return () => {
      window.removeEventListener('resize', resizeSetting);
    };
  }, []);

  return (
    <section>
      <TopBanner mobile={mobile} />
      <HomeCampaignEvent />
      <HomeFondantContents />
      <HomeTidings />
      <section className={`bg-secondary-brown_bg_2 max-lg:pb-60`}>
        <HomeTowPartedBanner mobile={mobile} />
      </section>
      <HomeMission />
      <section className={`pb-80 max-lg:pb-12 max-lg:pt-60`}>
        <HomeOnePartedBanner />
      </section>
      <section className={`pb-120 max-lg:pb-60`}>
        <HomeTowPartedBanner mobile={mobile} />
      </section>
      <HomeNoticeMain />
    </section>
  );
};

export default HomePage;
