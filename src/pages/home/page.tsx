//개발중

// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import TopBanner from '@/components/home/topBanner';
import CampaignEvent from '@/components/home/campaignEvent/campaignEvent';
import FondantContents from '@/components/home/fondantContents/fondantContents';
import HomeTidings from '@/components/home/tidings/homeTidings';
import HomeMission from '@/components/home/mission/homeMission';
import Btn from '@/components/common/btn';
import NoticeMain from '@/components/home/notice/noticeMain';

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
      <CampaignEvent />
      <FondantContents />
      <HomeTidings />
      <div className='flex w-full items-center justify-center bg-secondary-brown_bg_2 px-16 max-lg:h-[calc(92px+60px)] max-lg:pb-60'>
        <div
          className={`flex aspect-[1560/200] h-full w-full max-w-1560 items-center justify-start gap-24 scrollbar-hide max-lg:h-92 max-lg:w-fit max-lg:justify-start max-lg:gap-12 max-lg:overflow-x-scroll`}
        >
          <button
            style={{
              backgroundImage: `${mobile ? `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mo_banner_1.png)` : `url(${import.meta.env.VITE_PUBLIC_URL}images/home/banner_1.png)`} `,
            }}
            className={`h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0 max-lg:rounded-8`}
          ></button>
          <button
            style={{
              backgroundImage: `${mobile ? `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mo_banner_2.png)` : `url(${import.meta.env.VITE_PUBLIC_URL}images/home/banner_2.png)`} `,
            }}
            className={`h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0 max-lg:rounded-8`}
          ></button>
        </div>
      </div>
      <HomeMission />
      <div className='flex h-fit w-full items-start justify-center px-16 pb-80 max-lg:pb-12 max-lg:pt-60'>
        <div
          className={`flex h-200 w-full max-w-1560 items-center justify-center max-lg:h-128`}
        >
          <div
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/home/banner_2_1.png)`,
            }}
            className={`flex h-full w-full items-center justify-center rounded-16 bg-cover bg-center bg-no-repeat px-80 max-lg:rounded-8 max-lg:pl-22 max-lg:pr-18`}
          >
            <div
              className={`flex h-full w-full flex-col items-start justify-center gap-16 px-38 pb-20 max-lg:gap-10 max-lg:px-0 max-lg:py-0`}
            >
              <div className={`flex w-full items-center justify-between`}>
                <p
                  className={`text-bold32 max-lg:text-bold18 line-clamp-1 text-grey-900`}
                >
                  기념일 후원
                </p>
                <span className={`lg:hidden`}>
                  <Btn
                    text={`기념일 후원하기`}
                    className='w-123'
                    formMode={`mode2-r`}
                    colorMode={`mode3`}
                    arrowMode={true}
                  />
                </span>
              </div>

              <p
                className={`text-regular18 max-lg:text-regular14 line-clamp-1 text-grey-500`}
              >
                감사함이 가득한 오늘, 선교 후원으로 특별하게 기념해보세요.
              </p>
            </div>
            <div className={`max-lg:hidden`}>
              <Btn
                text={`기념일 후원하기`}
                className={`w-150`}
                formMode={`mode2-r`}
                colorMode={`mode3`}
                arrowMode={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-fit w-full items-start justify-center px-16 pb-120 max-lg:pb-60'>
        <div
          className={`flex aspect-[1560/200] h-full w-full max-w-1560 items-center justify-start gap-24 scrollbar-hide max-lg:h-92 max-lg:w-fit max-lg:justify-start max-lg:gap-12 max-lg:overflow-x-scroll`}
        >
          <button
            style={{
              backgroundImage: `${mobile ? `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mo_banner_1.png)` : `url(${import.meta.env.VITE_PUBLIC_URL}images/home/banner_1.png)`} `,
            }}
            className='h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0'
          ></button>
          <button
            style={{
              backgroundImage: `${mobile ? `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mo_banner_2.png)` : `url(${import.meta.env.VITE_PUBLIC_URL}images/home/banner_2.png)`} `,
            }}
            className='h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0'
          ></button>
        </div>
      </div>
      <NoticeMain />
    </section>
  );
};

export default HomePage;
