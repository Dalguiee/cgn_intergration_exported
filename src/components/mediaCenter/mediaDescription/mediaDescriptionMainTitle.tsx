// 훅
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// 컴포넌트
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

// 모션변수
const rotating = {
  hidden: { rotate: 0, x: `-300%` },
  visible: {
    x: [`-300%`, `120%`],
    rotate: 360,
    transition: {
      rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
      x: { duration: 13, repeat: Infinity, ease: 'easeInOut' },
    },
  },
};

const rotatingReverse = {
  hidden: { rotate: 0 },
  visible: {
    rotate: -360,
    transition: { duration: 23, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floating = {
  hidden: { y: `70%`, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 360,
    y: ['70%', `-130%`, '70%'],
    transition: {
      y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
      rotate: {
        duration: 17,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
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
          className={`absolute left-0 top-0 z-10 h-460 w-full overflow-hidden bg-cover bg-center bg-no-repeat max-lg:h-423`}
          style={{
            backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/mo_title_background.png` : `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_background.png`})`,
          }}
        >
          <motion.img
            className={`absolute right-[-3%] top-[-24%] w-[24%] select-none object-contain max-lg:top-[-13%] max-lg:w-[44%] lg:hidden`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_animate_object_1.png`}
            alt=''
            initial={`hidden`}
            animate={isVisible ? `visible` : `hidden`}
            variants={rotating}
            width={665}
            height={327}
          />
          <motion.img
            className={`absolute bottom-[-10%] left-[-30%] w-[67%] select-none object-contain max-lg:left-[-20%] max-lg:w-[113%]`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_animate_object_2.png`}
            alt=''
            initial={`hidden`}
            animate={isVisible ? `visible` : `hidden`}
            variants={rotatingReverse}
            width={537}
            height={264}
          />
          <motion.img
            className={`absolute bottom-[-10%] left-[49%] hidden w-[18%] select-none object-contain max-lg:left-[67%] max-lg:hidden max-lg:w-[38%]`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/title_animate_object_3.png`}
            alt=''
            // initial={`hidden`}
            // animate={isVisible ? `visible` : `hidden`}
            // variants={floating}
            width={337}
            height={166}
          />
        </div>
        <motion.img
          variants={fadeUpY}
          className={`z-20 mt-54 h-54 w-225 object-contain max-lg:mt-60 max-lg:h-35 max-lg:w-160`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/fondant_logo.png`}
          width={225}
          height={54}
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
