// 훅
import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { motion } from 'framer-motion';

const HistoryList = ({
  selectedDataIdx,
  setSelectedDataIdx,
  historyDataYears,
  historyData,
}) => {
  const [animateToggle, setAnimateToggle] = useState(false);

  // 애니메이션 토글 함수
  const animating = () => {
    setAnimateToggle(true);
    const animateTimeout = setTimeout(() => {
      setAnimateToggle(false);
    }, 800);
    return () => clearTimeout(animateTimeout);
  };

  // framer 설정
  const contentVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: animateToggle ? 0 : 1, y: animateToggle ? 100 : 0 },
  };

  return (
    <div className={`flex w-full items-start justify-start`}>
      <div className={`h-fit w-full max-w-181 max-lg:max-w-76`}>
        <div className={`flex flex-col items-end justify-start`}>
          {historyDataYears?.map((item, key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedDataIdx(item?.id);
                animating();
              }}
            >
              <p
                className={`text-regular78 max-lg:text-regular32 ${selectedDataIdx === item?.id ? 'text-grey-900' : 'text-grey-200'} flex items-center justify-end`}
                key={key}
              >
                <span
                  className={`${selectedDataIdx === item?.id ? 'block' : 'hidden'}`}
                >
                  {item?.frontNum}
                </span>
                {item?.year}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div
        className={`ml-240 flex w-full flex-col items-start justify-start gap-24 px-66 pt-15 max-lg:ml-24 max-lg:px-0 max-lg:py-6`}
      >
        {historyData?.[selectedDataIdx]?.map((item, key) => (
          <motion.div
            initial={`initial`}
            animate={`animate`}
            variants={contentVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`flex items-start justify-start`}
            key={key}
          >
            <p
              className={`text-bold16 max-lg:text-bold14 flex w-88 items-center justify-start text-grey-500 max-lg:w-39 max-lg:flex-shrink-0`}
            >
              <span className={`text-bold24 max-lg:text-bold14 text-grey-900`}>
                {item?.time}
              </span>
              월
            </p>
            <p
              className={`text-regular18 max-lg:text-regular14 flex items-center justify-start text-grey-500`}
            >
              {HTMLReactParser(item?.text)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
