//개발중

// 훅
import React, { useSyncExternalStore } from 'react';

// 컴포넌트
import TopBanner from '@/components/home/topBanner/homeTopBanner';
import HomeCampaignEvent from '@/components/home/campaignEvent/homeCampaignEvent';
import HomeFondantContents from '@/components/home/fondantContents/homeFondantContents';
import HomeTidings from '@/components/home/tidings/homeTidings';
import HomeMission from '@/components/home/mission/homeMission';
import HomeNoticeMain from '@/components/home/notice/homeNoticeMain';
import HomeTowPartedBanner from '@/components/home/middleBanner/homeTowPartedBanner';
import HomeOnePartedBanner from '@/components/home/middleBanner/homeOnePartedBanner';

const resizing = (callback: () => void) => {
  const media = window.matchMedia('(max-width: 1024px)');
  media.addEventListener('change', callback);

  return () => media.removeEventListener('change', callback);
};

const matchBoolean = () => window.matchMedia('(max-width: 1024px)').matches;

const HomePage = () => {
  const mobile = useSyncExternalStore(resizing, matchBoolean);

  return (
    <section>
      <TopBanner mobile={mobile} />
      <HomeCampaignEvent />
      <HomeFondantContents />
      <HomeTidings />
      <section
        className={`overflow-x-scroll bg-secondary-brown_bg_2 scrollbar-hide max-lg:px-16 max-lg:pb-60`}
      >
        <HomeTowPartedBanner mobile={mobile} />
      </section>
      <HomeMission mobile={mobile} />
      <section className={`pb-80 max-lg:pb-12 max-lg:pt-60`}>
        <HomeOnePartedBanner mobile={mobile} />
      </section>
      <section
        className={`overflow-x-scroll pb-120 scrollbar-hide max-lg:px-16 max-lg:pb-60`}
      >
        <HomeTowPartedBanner mobile={mobile} />
      </section>
      <HomeNoticeMain />
    </section>
  );
};

export default HomePage;
