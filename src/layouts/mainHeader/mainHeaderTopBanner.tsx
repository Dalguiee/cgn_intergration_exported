// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import Checkbox from '@/components/common/checkBox';
const MainHeaderTopBanner = ({
  headerTopBannerAvailable,
  setHeaderTopBannerAvailable,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const setOneDayBannerDelay = () => {
    const popDay = new Date();
    popDay.setHours(popDay.getHours() + 12);
    document.cookie = `event=${`oneDayBanner`}; expires=${popDay.toUTCString()}`;
  };

  // 쿠키에서 하루치 배너 expired 쿠키 검색
  useEffect(() => {
    const oneDayCheck = () => {
      if (document.cookie.match('oneDayBanner')) {
        setHeaderTopBannerAvailable(false);
      } else {
        setHeaderTopBannerAvailable(true);
      }
    };

    window.addEventListener('load', oneDayCheck);

    return () => window.removeEventListener('load', oneDayCheck);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/banner/content_1.png`,
      }}
      className={`${headerTopBannerAvailable ? `top-0` : `top-[calc(-140px)] max-lg:top-[-88px]`} fixed z-[21] flex h-140 w-full flex-col items-end justify-end bg-primary-500 bg-cover bg-center bg-no-repeat px-360 pb-20 max-lg:h-88`}
    >
      <div className={`flex items-center justify-start`}>
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
