// 훅
import React from 'react';
import { motion } from 'framer-motion';

// 모션변수
const staggerSetting = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUpY = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HomeTextBox = ({ isVisible }) => {
  return (
    <motion.div
      animate={isVisible ? `visible` : `hidden`}
      variants={staggerSetting}
      className='flex h-396 w-full max-w-440 flex-col items-start justify-center gap-24 pl-40 max-lg:h-338 max-lg:max-w-361 max-lg:gap-16 max-lg:px-0'
    >
      <motion.h2
        variants={fadeUpY}
        className={`text-bold48 max-lg:text-bold24 line-clamp-1 transform text-grey-900 max-lg:mb-10`}
      >
        선교 미디어 CGN
      </motion.h2>
      <motion.div
        variants={fadeUpY}
        className={`${isVisible ? `opacity-1 translate-y-0` : `translate-y-[100px] opacity-0`} flex flex-col items-start justify-center`}
      >
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Christian
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          다양한 플랫폼과 콘텐츠를 통해
          <br className={`max-lg:hidden`} />
          <span className={`lg:hidden`}>&nbsp;</span>24시간 ‘순수복음’을
          전합니다
        </p>
      </motion.div>
      <motion.div
        variants={fadeUpY}
        className={`${isVisible ? `opacity-1 translate-y-0` : `translate-y-[100px] opacity-0`} flex flex-col items-start justify-center`}
      >
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Global
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          6개 해외지사, 현지 맞춤 콘텐츠, 글로벌 서비스로
          <br className={`max-lg:hidden`} />
          <span className={`lg:hidden`}>&nbsp;</span>‘어디서나 모두에게’
          다가갑니다
        </p>
      </motion.div>
      <motion.div
        variants={fadeUpY}
        className={`${isVisible ? `opacity-1 translate-y-0` : `translate-y-[100px] opacity-0`} flex flex-col items-start justify-center`}
      >
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Network
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          후원자, 교회, 선교사 등 다양한 동역자들과 ‘함께’
          <br className={`max-lg:hidden`} />
          <span className={`lg:hidden`}>&nbsp;</span>선교합니다
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HomeTextBox;
