// 개발중입니다.
import React, { useState } from 'react';

// 데이터
import { mockupData } from '@/db/mockup';

import CampaignEventHeader from '@/components/home/campaignEvent/campaignEventHeader';
import LeftMainCampaign from '@/components/home/campaignEvent/leftMainCampaign';
import CampaignCard from '@/components/home/campaignEvent/campaignCard';

const CampaignEvent = () => {
  const campaignData = mockupData?.[0]?.data;
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(4);

  const pagingNext = () => {
    if (endNum < campaignData?.length) {
      setStartNum(item => {
        return item + 4;
      });
      setEndNum(item => {
        return item + 4;
      });
    } else {
      console.log('페이지 최대치도달');
    }
  };
  const pagingPrev = () => {
    if (startNum > 0) {
      setStartNum(item => {
        return item - 4;
      });
      setEndNum(item => {
        return item - 4;
      });
    } else {
      console.log('페이지 최소치도달');
    }
  };

  return (
    <main
      className={`flex h-1004 w-full flex-col items-center justify-center gap-40 px-16 max-lg:h-fit max-lg:gap-0 max-lg:pb-60`}
    >
      {/* 컨텐츠 헤더 */}
      <CampaignEventHeader
        startNum={startNum}
        endNum={endNum}
        pagingNext={pagingNext}
        pagingPrev={pagingPrev}
        campaignLengthData={campaignData?.length}
      />
      {/* 컨텐츠 */}
      <div
        className={`flex w-full max-w-1560 flex-shrink-0 items-center justify-between gap-40 max-lg:flex-col max-lg:gap-12`}
      >
        {/* 왼쪽 및 반응형 위쪽 */}
        <LeftMainCampaign campaignData={campaignData}></LeftMainCampaign>
        {/* 오른쪽 및 반응형 아래쪽 */}
        <div
          className={`grid h-full w-full max-w-728 grid-cols-2 grid-rows-2 gap-24 max-lg:w-full max-lg:max-w-[unset] max-lg:grid-rows-1 max-lg:gap-12`}
        >
          {campaignData
            ?.slice(startNum, endNum)
            ?.map((item, idx) => (
              <CampaignCard item={item} key={idx}></CampaignCard>
            ))}
        </div>
      </div>
    </main>
  );
};

export default CampaignEvent;
