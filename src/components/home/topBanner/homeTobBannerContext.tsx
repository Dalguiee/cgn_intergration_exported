// 배너타이틀 안쪽 텍스트 구역 애니메이션을 위한 분리컴포넌트

// 훅
import React from 'react';
import { motion } from 'framer-motion';

// 컴포넌트
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

// 모션변수
const staggerSetting = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const FadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.3, ease: `easeInOut` },
  },
};

const HomeTobBannerContext = ({ obj }) => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();

  return (
    <div
      ref={intersectionRef}
      className={`w-full max-w-1560 px-16 max-lg:mb-40 max-lg:pl-24`}
    >
      <motion.div
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        variants={staggerSetting}
        className={`flex flex-col items-start justify-start lg:mb-200`}
      >
        <motion.span
          variants={FadeLeft}
          className={`text-bold78 max-lg:text-bold32 pointer-events-none mb-12 select-none text-white-solid max-lg:mb-8`}
        >
          {obj?.title}
          <br />
          {obj?.depthTitle !== '' ? obj?.depthTitle : ''}
        </motion.span>
        <motion.span
          variants={FadeLeft}
          className={`text-regular32 max-lg:text-regular16 pointer-events-none select-none text-grey-50`}
        >
          {obj?.subTitle}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default HomeTobBannerContext;
