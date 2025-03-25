import React from 'react';
import { motion } from 'framer-motion';

// 모션변수
const fadeUpY = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const IntroduceVisionValuesCard = ({ item }) => {
  return (
    <motion.div
      variants={fadeUpY}
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
        className={`text-bold40 max-lg:text-bold16 mb-23 line-clamp-1 text-grey-900 max-lg:mb-0`}
      >
        {item?.text}{' '}
        <span className={`text-primary-500`}>{item?.pointText}</span>
      </p>
      <p
        className={`text-regular18 max-lg:text-regular12 line-clamp-1 text-grey-500`}
      >
        {item?.subText}
      </p>
    </motion.div>
  );
};

export default IntroduceVisionValuesCard;
