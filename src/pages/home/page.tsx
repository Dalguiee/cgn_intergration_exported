//개발중

// 훅
import React from 'react';

// 컴포넌트
import TopBanner from '@/components/home/topBanner';
import CampaignEvent from '@/components/home/campaignEvent/campaignEvent';
import FondantContents from '@/components/home/fondantContents/fondantContents';
import HomeTidings from '@/components/home/tidings/homeTidings';
import HomeMission from '@/components/home/mission/homeMission';
import Btn from '@/components/common/btn';

const HomePage = () => {
  return (
    <section>
      <TopBanner />
      <CampaignEvent />
      <FondantContents />
      <HomeTidings />
      <div className='flex h-200 w-full items-center justify-center bg-secondary-brown_bg_2'>
        <div
          className={`flex h-full w-full max-w-1560 items-center justify-center gap-24 max-lg:overflow-x-scroll`}
        >
          <button className='h-full w-1/2 flex-shrink-0 rounded-16 bg-[url(/public/images/home/banner_1_1.png)] bg-cover bg-center bg-no-repeat max-lg:h-92 max-lg:w-277'></button>
          <button className='h-full w-1/2 flex-shrink-0 rounded-16 bg-[url(/public/images/home/banner_1_2.png)] bg-cover bg-center bg-no-repeat max-lg:h-92 max-lg:w-277'>
            <div
              className={`flex h-full w-full flex-col items-start justify-center px-38 max-lg:px-12`}
            >
              <p className={`text-bold24 max-lg:text-bold16 text-white-solid`}>
                2024 서울-인천 로잔대회
              </p>
              <p
                className={`text-regular16 max-lg:text-regular12 text-white-solid`}
              >
                원수의 조롱을 받을 때 드리는 기도 (시편 70:1~5)
              </p>
            </div>
          </button>
        </div>
      </div>
      <HomeMission />
      <div className='flex h-200 w-full items-center justify-center'>
        <div
          className={`flex h-full w-full max-w-1560 items-center justify-center`}
        >
          <button className='flex h-full w-full items-center justify-center rounded-16 bg-[url(/public/images/home/banner_2_1.png)] bg-cover bg-center bg-no-repeat px-80 py-48'>
            <div
              className={`flex h-full w-full flex-col items-start justify-center gap-16 px-38 pb-20`}
            >
              <p className={`text-bold32 text-grey-900`}>기념일 후원</p>
              <p className={`text-regular18 text-grey-900`}>
                감사함이 가득한 오늘, 선교 후원으로 특별하게 기념해보세요.
              </p>
            </div>
            <div>
              <Btn
                text={`기념일 후원하기`}
                formMode={`mode2-r`}
                colorMode={`mode3`}
                arrowMode={true}
              />
            </div>
          </button>
        </div>
      </div>
      <div className='flex h-200 w-full items-center justify-center bg-secondary-brown_bg_2'>
        <div
          className={`flex h-full w-full max-w-1560 items-center justify-center gap-24`}
        >
          <button className='h-full w-1/2 rounded-16 bg-[url(/public/images/home/banner_1_1.png)] bg-cover bg-center bg-no-repeat'></button>
          <button className='h-full w-1/2 rounded-16 bg-[url(/public/images/home/banner_1_2.png)] bg-cover bg-center bg-no-repeat'>
            <div
              className={`flex h-full w-full flex-col items-start justify-center px-38`}
            >
              <p className={`text-bold24 text-white-solid`}>
                2024 서울-인천 로잔대회
              </p>
              <p className={`text-regular16 text-white-solid`}>
                원수의 조롱을 받을 때 드리는 기도 (시편 70:1~5)
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
