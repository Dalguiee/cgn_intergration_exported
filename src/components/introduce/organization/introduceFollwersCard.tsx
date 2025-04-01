// 훅
import React from 'react';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';

// 컴포넌트
import ResponsiveScanner from '@/components/common/responsiveScanner';
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

// 모션변수
const staggerSetting = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const IntroduceFollwersCard = ({ item }) => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);
  const { intersectionRef, isVisible } = IntersectionObserverScanner();

  return (
    <motion.div
      ref={intersectionRef}
      initial={`hidden`}
      animate={isVisible ? `visible` : `hidden`}
      variants={staggerSetting}
      className={`flex w-full items-end justify-start gap-16 max-lg:flex-col max-lg:items-center`}
    >
      <div
        className={`${item?.exception ? `flex-col-reverse` : ``} ${item?.reverse ? `flex-row-reverse` : ``} flex w-full items-start justify-center gap-60 max-lg:flex-col max-lg:items-center max-lg:gap-0`}
      >
        <motion.img
          variants={
            item?.exception ? fadeLeft : item?.reverse ? fadeUp : fadeRight
          }
          className={`h-400 w-600 rounded-16 object-cover max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
          src={item?.src}
          width={600}
          height={400}
          alt=''
        />
        {item?.exception ? (
          <motion.img
            variants={
              item?.exception ? fadeLeft : item?.reverse ? fadeUp : fadeRight
            }
            className={`mt-24 h-592 w-454 rounded-16 max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361 lg:hidden`}
            src={mobile ? item?.exceptionMoSrc : item?.exceptionSrc}
            width={454}
            height={592}
            alt=''
          />
        ) : (
          ''
        )}

        <motion.div
          variants={
            item?.exception ? fadeLeft : item?.reverse ? fadeUp : fadeRight
          }
          className={`w-full max-lg:mt-40 max-lg:max-w-361 ${item?.exception ? `max-w-600 max-lg:max-w-361` : ``}`}
        >
          <p
            className={`text-bold48 max-lg:text-bold24 mb-40 text-grey-900 max-lg:mb-8`}
          >
            {parse(item?.title)}
          </p>
          <p className={`text-bold24 max-lg:text-bold16 mb-24 text-grey-900`}>
            {parse(item?.subTitle)}
          </p>
          <p className={`text-regular18 max-lg:text-regular14 text-grey-500`}>
            {parse(item?.text)}
          </p>
        </motion.div>
      </div>
      {item?.exception ? (
        <motion.img
          variants={fadeUp}
          className={`h-full max-h-592 w-full max-w-454 rounded-16 object-cover max-lg:hidden max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
          src={mobile ? item?.exceptionMoSrc : item?.exceptionSrc}
          width={454}
          height={592}
          alt=''
        />
      ) : (
        ''
      )}
    </motion.div>
  );
};

export default IntroduceFollwersCard;
