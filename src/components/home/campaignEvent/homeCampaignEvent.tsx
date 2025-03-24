// 훅
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import HomeCampaignEventHeader from '@/components/home/campaignEvent/homeCampaignEventHeader';
import HomeLeftMainCampaign from '@/components/home/campaignEvent/homeLeftMainCampaign';
import HomeCampaignCard from '@/components/home/campaignEvent/homeCampaignCard';

// 모션 변수
const fadeUpY = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const HomeCampaignEvent = () => {
  const campaignData = mockupData?.[0]?.data;

  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(5);

  const [switchingAnimate, setSwitchingAnimate] = useState(false);

  const animationDuration = 400;

  const animating = () => {
    const animateSwitchingInit = setTimeout(() => {
      setSwitchingAnimate(false);
    }, animationDuration);
    return () => clearTimeout(animateSwitchingInit);
  };

  const pagingNext = () => {
    setSwitchingAnimate(true);
    animating();
    const animateSwitchingInit = setTimeout(() => {
      if (endNum < campaignData?.length) {
        setStartNum(item => {
          return item + 5;
        });
        setEndNum(item => {
          return item + 5;
        });
      }
    }, animationDuration);
    return () => clearTimeout(animateSwitchingInit);
  };
  const pagingPrev = () => {
    setSwitchingAnimate(true);
    animating();
    const animateSwitchingInit = setTimeout(() => {
      if (startNum > 0) {
        setStartNum(item => {
          return item - 5;
        });
        setEndNum(item => {
          return item - 5;
        });
      }
    }, animationDuration);
    return () => clearTimeout(animateSwitchingInit);
  };

  return (
    <main
      className={`flex h-1004 w-full flex-col items-center justify-center gap-40 px-16 max-lg:h-fit max-lg:gap-0 max-lg:pb-60 max-lg:pt-60`}
    >
      {/* 컨텐츠 헤더 */}
      <HomeCampaignEventHeader
        startNum={startNum}
        endNum={endNum}
        pagingNext={pagingNext}
        pagingPrev={pagingPrev}
        campaignLengthData={campaignData?.length}
      />
      {/* 컨텐츠 */}
      <motion.div
        initial={`hidden`}
        animate={switchingAnimate ? `hidden` : `visible`}
        variants={fadeUpY}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`flex w-full max-w-1560 flex-shrink-0 items-center justify-between gap-40 max-lg:flex-col max-lg:gap-12`}
      >
        {/* 왼쪽 빅 컨텐츠 및 반응형 위쪽 */}
        {campaignData?.slice(startNum, endNum)?.map((item, idx) => {
          if (idx === 0) {
            return <HomeLeftMainCampaign firstItem={item} />;
          }
        })}
        {/* 오른쪽 스몰 컨텐츠 및 반응형 아래쪽 */}
        <div
          className={`grid h-full w-full max-w-728 grid-cols-2 grid-rows-2 gap-24 max-lg:w-full max-lg:max-w-[unset] max-lg:grid-rows-1 max-lg:gap-12`}
        >
          {campaignData?.slice(startNum, endNum)?.map((item, idx) => {
            if (idx !== 0) {
              return <HomeCampaignCard item={item} />;
            }
          })}
        </div>
      </motion.div>
    </main>
  );
};

export default HomeCampaignEvent;
