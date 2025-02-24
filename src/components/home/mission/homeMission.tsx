import React from 'react';
import TextBox from './textBox';

const HomeMission = () => {
  const buttonData = [
    {
      id: 1,
      text: `선교 미디어 사역`,
      className: `bg-primary-500`,
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
      className={`flex h-840 w-full items-center justify-center max-lg:h-682`}
    >
      <div
        className={`flex h-600 w-full max-w-1560 items-center justify-center overflow-hidden rounded-16 max-lg:h-full max-lg:rounded-0`}
      >
        <div
          className={`flex h-full w-676 items-center justify-center bg-[url(/public/images/home/mission_context_bg.png)] bg-cover bg-center bg-no-repeat max-lg:hidden`}
        >
          <TextBox />
        </div>
        <div
          className={`flex h-full w-884 flex-col items-center justify-center gap-24 bg-[url(/public/images/home/mission_main_bg.png)] bg-cover bg-center bg-no-repeat max-lg:gap-16 max-lg:px-12`}
        >
          <div
            className={`w-full rounded-8 bg-secondary-brown_bg_2 px-32 py-40 lg:hidden`}
          >
            <TextBox />
          </div>

          {buttonData?.map((item, key) => (
            <button
              key={key}
              className={`flex h-120 w-440 items-center justify-between rounded-16 ${item?.className} px-40 py-40 max-lg:h-60 max-lg:w-full`}
            >
              <span
                className={`text-bold24 max-lg:txt-bold16 text-white-solid`}
              >
                {item?.text}
              </span>
              <img
                className={`h-32 w-32`}
                src={`/public/images/icon/arrow_right_white.svg`}
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
