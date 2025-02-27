// 훅
import React from 'react';

// 컴포넌트
import HomeTextBox from '@/components/home/mission/homeTextBox';

const HomeMission = ({ mobile }) => {
  const buttonData = [
    {
      id: 1,
      text: `선교 미디어 사역`,
      className: `bg-primary-500`,
      blackArrow: true,
      link: `/`,
    },
    {
      id: 2,
      text: `후원 내역 보고`,
      className: `bg-secondary-blue`,
      link: `/`,
    },
  ];
  return (
    <section
      className={`flex h-840 w-full items-start justify-center px-16 max-lg:h-682 max-lg:px-0 lg:pb-80 lg:pt-160`}
    >
      <div
        className={`flex h-600 w-full max-w-1560 items-center justify-center overflow-hidden rounded-16 max-lg:h-full max-lg:rounded-0`}
      >
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mission_context_bg.png)`,
          }}
          className={`flex h-full w-676 items-center justify-center bg-cover bg-center bg-no-repeat max-lg:hidden`}
        >
          <HomeTextBox />
        </div>
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/home/mission_main_bg.png)`,
          }}
          className={`flex h-full w-884 flex-col items-center justify-center gap-24 bg-cover bg-[100%] bg-no-repeat max-lg:gap-12 max-lg:bg-[40%] max-lg:px-12`}
        >
          <div
            className={`flex w-full items-center justify-center rounded-8 bg-secondary-brown_bg_2 px-38 py-40 lg:hidden`}
          >
            <HomeTextBox />
          </div>

          {buttonData?.map((item, key) => (
            <button
              key={key}
              className={`flex h-120 w-440 items-center justify-between rounded-16 max-lg:rounded-8 ${item?.className} px-40 py-40 max-lg:h-60 max-lg:w-full max-lg:px-24 max-lg:py-16`}
            >
              <span
                className={`text-bold24 max-lg:text-bold16 line-clamp-1 text-white-solid`}
              >
                {item?.text}
              </span>
              <img
                className={`h-32 w-32 max-lg:h-17 max-lg:w-17`}
                src={`${item?.blackArrow && mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_black.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_white.svg`}`}
                width={32}
                height={32}
                alt=''
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMission;
