// 훅
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// 컴포넌트
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

const staggerSetting = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.5 },
  },
};

const fadeUpY = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const MediaDescriptionMainTitle = ({ mobile, sections }) => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();

  return (
    <AnimatePresence>
      <motion.section
        ref={el => {
          intersectionRef.current = el;
          sections.current[0] = el;
        }}
        initial={`hidden`}
        animate={isVisible ? `visible` : `hidden`}
        variants={staggerSetting}
        className={`relative flex h-851 w-full flex-col items-center justify-start max-lg:h-779`}
      >
        <div
          className={`absolute left-0 top-0 z-10 h-460 w-full bg-cover bg-center bg-no-repeat max-lg:h-423`}
          style={{
            backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/mo_title_background.png` : `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_background.png`})`,
          }}
        ></div>
        <motion.img
          variants={fadeUpY}
          className={`z-20 mt-54 h-50 w-226 object-cover max-lg:mt-60 max-lg:h-35 max-lg:w-160`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/fondant_logo.png`}
          width={226}
          height={50}
          alt=''
        />
        <motion.img
          variants={fadeUpY}
          className={`z-20 mt-36 h-529 w-257 object-cover max-lg:mt-25 max-lg:h-407 max-lg:w-200`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_phone.png`}
          width={257}
          height={529}
          alt=''
        />

        <div
          className={`mt-22 flex flex-col items-center justify-start gap-12 text-center max-lg:mt-40 max-lg:gap-24`}
        >
          <h2 className={`text-bold40 max-lg:text-bold32 text-grey-900`}>
            ABOUT FONDANT 2.0
          </h2>
          <p className={`text-regular24 max-lg:text-regular16 text-grey-500`}>
            국내 최초 기독 OTT 퐁당(fondant)은
            <span className={`max-lg:hidden`}>&nbsp;</span>
            <br className={`lg:hidden`} />
            앱, 웹, 스마트TV를 통해<span className={`lg:hidden`}>&nbsp;</span>
            <br className={`max-lg:hidden`} />
            다양한 콘텐츠와 서비스를
            <span className={`max-lg:hidden`}>&nbsp;</span>
            <br className={`lg:hidden`} />전 세계에 무료로 제공 중이며
            <span className={`lg:hidden`}>&nbsp;</span>
            <br className={`max-lg:hidden`} />
            성도와 교회가<span className={`max-lg:hidden`}>&nbsp;</span>
            <br className={`lg:hidden`} />
            사용할 수 있는 크리스천 일상 플랫폼입니다.
          </p>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default MediaDescriptionMainTitle;
