// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import Checkbox from '@/components/common/checkBox';
import ResponsiveScanner from '@/components/common/responsiveScanner';
import ScrollDirectionScanner from '@/components/common/scrollDirectionScanner';
import ScrollTopScanner from '@/components/common/scrollTopScanner';

const MainHeaderTopBanner = ({
  headerTopBannerAvailable,
  setHeaderTopBannerAvailable,
}) => {
  const location = useLocation();
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const scrollTopStatus = ScrollTopScanner();
  const scrollDirection = ScrollDirectionScanner();

  const [isChecked, setIsChecked] = useState(false);

  // 배터 하루동안 보지않기
  const setOneDayBannerDelay = (): void => {
    const popDay = new Date();
    popDay.setHours(popDay.getHours() + 12);
    document.cookie = `event=${`oneDayBanner`}; expires=${popDay.toUTCString()}`;
  };

  // 쿠키에서 하루치 expired 쿠키 검색
  useEffect(() => {
    const oneDayCheck = () => {
      if (document.cookie.match('oneDayBanner')) {
        setHeaderTopBannerAvailable(false);
      } else {
        setHeaderTopBannerAvailable(true);
      }
    };
    oneDayCheck();
  }, [location?.pathname]);

  return (
    <div
      style={{
        transition: `0.15s`,
      }}
      className={`${headerTopBannerAvailable ? (scrollTopStatus ? `top-[calc(0px)]` : scrollDirection ? `top-[calc(0px)]` : `top-[calc(-140px)] max-lg:top-[-88px]`) : `top-[calc(-140px)] max-lg:top-[-88px]`} fixed z-[81] flex h-140 w-full flex-col items-end justify-end bg-primary-500 pb-20 max-lg:h-88 max-lg:pb-12 max-lg:pt-8 lg:px-360`}
    >
      <div
        style={{
          backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/banner/mo_content_1.png` : `${import.meta.env.VITE_PUBLIC_URL}images/banner/content_1.png`} `,
        }}
        className={`absolute left-[50%] top-0 z-[79] h-full w-full max-w-1920 translate-x-[-50%] bg-center bg-no-repeat max-lg:bg-contain lg:bg-cover`}
      ></div>
      <div
        className={`z-[80] flex items-center justify-start max-lg:mr-8 max-lg:flex-col max-lg:items-end`}
      >
        <button
          onClick={() => {
            if (isChecked) {
              setHeaderTopBannerAvailable(false);
              setOneDayBannerDelay();
            } else {
              setHeaderTopBannerAvailable(false);
            }
          }}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/close_white.svg`}
            width={32}
            height={32}
            alt=''
            className={`h-32 w-32 object-cover max-lg:mb-20 lg:hidden`}
          />
        </button>

        <div className={`flex items-center justify-center`}>
          <Checkbox
            className={`mr-8 !h-16 !w-16`}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <span className={`text-regular12 mr-4 text-white-solid`}>
            오늘 하루 그만보기
          </span>
        </div>
        <button
          onClick={() => {
            if (isChecked) {
              setHeaderTopBannerAvailable(false);
              setOneDayBannerDelay();
            } else {
              setHeaderTopBannerAvailable(false);
            }
          }}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/close_grey200.svg`}
            width={24}
            height={24}
            alt=''
            className={`h-24 w-24 object-cover max-lg:hidden`}
          />
        </button>
      </div>
    </div>
  );
};

export default MainHeaderTopBanner;
