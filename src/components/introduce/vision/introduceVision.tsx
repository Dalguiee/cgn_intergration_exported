// 훅
import React from 'react';
import { motion } from 'framer-motion';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';
import IntroduceVisionValuesCard from './introduceVisionValuesCard';
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

// 모션변수
const staggerSetting = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.7 },
  },
};

const IntroduceVision = ({ setPopupOpen }) => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();

  const missionsData = [
    { id: 1, title: `MISSION`, text: `온 세상을 위한`, subText: `복음의 통로` },
    {
      id: 2,
      title: `VISION`,
      text: `어디서나 모두에게`,
      subText: `선교미디어`,
      pointSrc: `${import.meta.env.VITE_PUBLIC_URL}images/logo/cgn_logo_black.png`,
    },
  ];
  const valuesData = [
    {
      id: 1,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/introduce_vision_values_icon_1.png`,
      text: `진리를 위한`,
      pointText: `용기`,
      subText: `Courage`,
    },
    {
      id: 2,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/introduce_vision_values_icon_2.png`,
      text: `복음을 위한`,
      pointText: `창의`,
      subText: `Creativity`,
    },
    {
      id: 3,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/introduce_vision_values_icon_3.png`,
      text: `선교를 위한`,
      pointText: `협력`,
      subText: `Collaboration`,
    },
  ];

  return (
    <section
      data-aos='fade-up'
      className={`flex h-fit w-full flex-col items-center justify-start`}
    >
      {/* 상단 영역 */}
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start pb-284 max-lg:pb-94`}
      >
        {/* 오른쪽 버튼 */}
        <div
          className={`mb-40 flex w-full items-center justify-end max-lg:mb-24 max-lg:px-16`}
        >
          <StyledButtons
            text={`CGN 브랜드 소개`}
            formMode={`mode1-r`}
            colorMode={`mode4`}
            className={`!h-48 border-primary-500 text-primary-500 hover:text-primary-500 max-lg:!h-36`}
            onClick={() => {
              setPopupOpen(true);
            }}
          />
        </div>
        {/* 상단 주황색 색망 상자컨텐츠 */}
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introduce/vision_content_bg_1.png)`,
          }}
          className={`flex h-660 w-full max-w-1200 flex-col items-center justify-start rounded-16 bg-cover bg-center bg-no-repeat pt-105 max-lg:h-220 max-lg:rounded-0 max-lg:pt-35`}
        >
          <div
            className={`flex w-full flex-shrink-0 items-center justify-center lg:h-96`}
          >
            <img
              className={`h-64 w-136 max-lg:h-25 max-lg:w-52`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/cgn_logo_white.png`}
              width={137}
              height={64}
              alt=''
            />
            <p
              className={`text-regular60 max-lg:text-regular24 ml-16 line-clamp-1 text-white-solid max-lg:ml-8`}
            >
              Everywhere, for everyone
            </p>
          </div>
          {/* 위쪽영역의 하단 두개 하얀박스 */}
          <div
            className={`mt-99 flex w-full max-w-1200 flex-shrink-0 justify-center gap-24 max-lg:mt-32 max-lg:gap-8`}
          >
            {missionsData?.map((item, key) => (
              <div
                key={key}
                className={`flex h-500 w-full max-w-534 flex-shrink-0 flex-col items-center justify-start rounded-9 bg-white-solid pt-85 shadow-lg max-lg:h-176 max-lg:max-w-176 max-lg:flex-shrink max-lg:py-40`}
              >
                <p
                  className={`text-bold32 max-lg:text-bold14 line-clamp-1 text-primary-500`}
                >
                  {item?.title}
                </p>
                <div className={`mt-97 text-center max-lg:mt-16`}>
                  <p
                    className={`text-regular48 max-lg:text-regular18 line-clamp-1 text-grey-900`}
                  >
                    {item?.text}
                  </p>
                  <div className={`flex items-center justify-center`}>
                    <span
                      className={`text-bold48 max-lg:text-bold18 line-clamp-1 text-grey-900`}
                    >
                      {item?.subText}
                    </span>
                    {item?.pointSrc ? (
                      <img
                        className={`h-54 w-115 max-lg:h-17 max-lg:w-37`}
                        src={item?.pointSrc}
                        width={115}
                        height={54}
                        alt=''
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단영역 */}
      <div
        ref={intersectionRef}
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
          <motion.div
            initial='hidden'
            animate={isVisible ? `visible` : `hidden`}
            variants={staggerSetting}
            className={`flex flex-wrap items-center justify-center gap-24`}
          >
            {valuesData?.map((item, key) => (
              <IntroduceVisionValuesCard item={item} key={key} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceVision;
