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

const ActivityVisitCard = ({ item, key }) => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);
  const { intersectionRef, isVisible } = IntersectionObserverScanner();

  return (
    <motion.div
      ref={intersectionRef}
      initial={`hidden`}
      animate={isVisible ? `visible` : `hidden`}
      variants={staggerSetting}
      key={key}
      className={`flex w-full items-end justify-start gap-16 max-lg:flex-col max-lg:items-center`}
    >
      <div
        key={key}
        className={`${item?.exception ? `flex-col-reverse` : ``} ${item?.exception2 ? `max-lg:flex-col-reverse` : `max-lg:flex-col`} ${item?.reverse ? `flex-row-reverse` : ``} flex w-full items-start justify-center gap-40 max-lg:items-center max-lg:gap-0`}
      >
        <motion.img
          variants={
            item?.exception ? fadeLeft : item?.reverse ? fadeUp : fadeRight
          }
          className={`h-400 w-600 rounded-16 object-cover ${item?.exception2 ? `max-lg:mt-40` : ``} ${item?.reverse ? `max-lg:mt-24` : ``} max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
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
            className={`${item?.exception ? `mb-40 max-lg:mb-8` : ``} ${item?.exception2 ? `text-bold32 max-lg:text-bold18 mb-24 text-primary-500 max-lg:mb-8` : `text-bold48`} ${item?.reverse ? `mb-40 max-lg:mb-8` : ``} max-lg:text-bold24 text-grey-900`}
          >
            {parse(item?.title)}
          </p>
          <ul
            className={`${item?.moText1 ? `max-lg:hidden` : ``} ${item?.exception ? `max-lg:text-bold16` : ``} ${item?.exception2 ? `text-regular18 max-lg:text-regular14 mb-24 text-grey-500` : `text-bold24 text-grey-900`} flex flex-col items-start justify-start ${item?.reverse ? `mb-24` : ``}`}
          >
            {item?.text?.map((textContent, textIdx) => (
              <li
                className={`[word-break:keep-all] max-lg:pl-10 max-lg:[text-indent:-6px]`}
                key={textIdx}
              >
                <span className={`text-indent-10`}>{textContent}</span>
              </li>
            ))}
          </ul>
          {item?.moText1 ? (
            <p className={`text-bold16 mb-24 text-grey-900 lg:hidden`}>
              {parse(item?.moText1)}
            </p>
          ) : (
            ``
          )}
          {item?.moText2 ? (
            <p className={`text-regular14 text-grey-500 lg:hidden`}>
              {parse(item?.moText2)}
            </p>
          ) : (
            ``
          )}

          <p
            className={`my-24 h-1 w-full border-t-1 border-grey-200 lg:hidden ${item?.exception ? `hidden` : ``}`}
          ></p>
          <p
            className={`text-regular18 max-lg:text-regular16 text-grey-900 ${item?.exception ? `hidden` : ``}`}
          >
            {parse(item?.subTitle)}
          </p>
        </motion.div>
      </div>
      {item?.exception ? (
        <motion.img
          variants={fadeUp}
          className={`h-636 w-full max-w-453 rounded-16 object-cover max-lg:hidden max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
          src={mobile ? item?.exceptionMoSrc : item?.exceptionSrc}
          width={453}
          height={636}
          alt=''
        />
      ) : (
        ''
      )}
    </motion.div>
  );
};

export default ActivityVisitCard;
