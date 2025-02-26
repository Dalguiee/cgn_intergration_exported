import React from 'react';
import StyledButtons from '../common/styledButtons';

const IntroduceVision = () => {
  const valuesData = [
    {
      id: 1,
      src: `/public/images/introduce/introduce_vision_values_icon_1.svg`,
      text: `진리를 위한`,
      pointText: `용기`,
      subText: `Courage`,
    },
    {
      id: 2,
      src: `/public/images/introduce/introduce_vision_values_icon_2.svg`,
      text: `복음을 위한`,
      pointText: `창의`,
      subText: `Creativity`,
    },
    {
      id: 3,
      src: `/public/images/introduce/introduce_vision_values_icon_3.svg`,
      text: `선교를 위한`,
      pointText: `협력`,
      subText: `Collaboration`,
    },
  ];

  return (
    <section
      className={`flex h-fit w-full flex-col items-center justify-start`}
    >
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start pb-284`}
      >
        <div
          className={`mb-40 flex w-full items-center justify-end max-lg:mb-24`}
        >
          <StyledButtons
            text={`CGN 브랜드 소개`}
            formMode={`mode1-r`}
            colorMode={`mode4`}
            className={`border-primary-500 text-primary-500`}
          />
        </div>
        <div
          className={`flex h-660 w-full max-w-1200 flex-col items-center justify-start rounded-16 bg-[url(/public/images/introduce/vision_content_bg_1.png)] bg-cover bg-center bg-no-repeat pt-105 max-lg:h-220 max-lg:rounded-0 max-lg:pt-35`}
        >
          <div
            className={`flex h-96 w-full flex-shrink-0 items-center justify-center`}
          >
            <img
              className={`h-64 w-136 max-lg:h-25 max-lg:w-52`}
              src='/public/images/logo/cgn_logo_white.png'
              width={137}
              height={64}
              alt=''
            />
            <p
              className={`text-regular60 max-lg:text-regular24 ml-16 text-white-solid`}
            >
              Everywhere, for everyone
            </p>
          </div>
          <div
            className={`mt-99 flex flex-shrink-0 gap-24 max-lg:mt-32 max-lg:gap-8`}
          >
            <div
              className={`flex h-500 w-534 flex-col items-center justify-start rounded-9 bg-white-solid pt-85 shadow-lg max-lg:h-176 max-lg:w-176 max-lg:py-40`}
            >
              <p className={`text-bold32 max-lg:text-bold14 text-primary-500`}>
                MISSION
              </p>
              <div className={`mt-97 text-center max-lg:mt-16`}>
                <p
                  className={`text-regular48 max-lg:text-regular18 text-grey-900`}
                >
                  온 세상을 위한
                </p>
                <p className={`text-bold48 max-lg:text-bold18 text-grey-900`}>
                  복음의 통로
                </p>
              </div>
            </div>
            <div
              className={`flex h-500 w-534 flex-col items-center justify-start rounded-9 bg-white-solid pt-85 shadow-lg max-lg:h-176 max-lg:w-176 max-lg:py-40`}
            >
              <p className={`text-bold32 max-lg:text-bold14 text-primary-500`}>
                VISION
              </p>
              <div className={`mt-97 text-center max-lg:mt-16`}>
                <p
                  className={`text-regular48 max-lg:text-regular18 text-grey-900`}
                >
                  어디서나 모두에게
                </p>
                <div className={`flex items-center justify-center`}>
                  <span
                    className={`text-bold48 max-lg:text-bold18 text-grey-900`}
                  >
                    선교 미디어
                  </span>
                  <img
                    className={`h-54 w-115 max-lg:h-17 max-lg:w-37`}
                    src='/public/images/logo/cgn_logo_black.png'
                    width={115}
                    height={54}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex w-full flex-col items-center justify-start bg-white-solid pb-160 pt-120 max-lg:pb-68 max-lg:pt-40`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start`}
        >
          <p
            className={`text-bold48 max-lg:text-bold24 mb-60 text-grey-900 max-lg:mb-24`}
          >
            CORE VALUES
          </p>
          <div className={`flex flex-wrap items-center justify-center gap-24`}>
            {valuesData?.map((item, key) => (
              <div
                key={key}
                className={`flex h-384 w-384 flex-col items-center justify-start rounded-999 bg-primary-100 pt-70 max-lg:h-160 max-lg:w-160 max-lg:pt-20`}
              >
                <img
                  className={`mb-11 h-100 w-100 max-lg:mb-4 max-lg:h-60 max-lg:w-60`}
                  src={`${item?.src}`}
                  width={100}
                  height={100}
                  alt=''
                />
                <p
                  className={`text-bold40 max-lg:text-bold16 mb-23 text-grey-900 max-lg:mb-0`}
                >
                  {item?.text}{' '}
                  <span className={`text-primary-500`}>{item?.pointText}</span>
                </p>
                <p
                  className={`text-regular18 max-lg:text-regular12 text-grey-500`}
                >
                  {item?.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceVision;
