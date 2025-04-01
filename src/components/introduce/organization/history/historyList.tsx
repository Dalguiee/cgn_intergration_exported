// 훅
import React, { useEffect, useRef, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { motion } from 'framer-motion';

// 모션변수
const sliding = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { opacity: { duration: 0.8 } } },
};

const HistoryList = ({
  selectedDataIdx,
  setSelectedDataIdx,
  historyDataYears,
  historyData,
}) => {
  const [animateToggle, setAnimateToggle] = useState(false);

  // 애니메이션 토글 함수
  const animating = id => {
    setAnimateToggle(true);
    const animateTimeout = setTimeout(() => {
      setSelectedDataIdx(id);
      setAnimateToggle(false);
    }, 800);
    return () => clearTimeout(animateTimeout);
  };

  const [pagePercent, setPagePercent] = useState(0);
  const scrollBox = useRef();
  const yearsButtonsContainer = useRef();
  const yearsButtons = useRef([]);
  const scrollContentBox = useRef();

  // 스크롤링 계산에 따른 애니메이팅 및 데이터 교환 핵심기능
  useEffect(() => {
    const scrollFunc = () => {
      const scrollBoxRect = scrollBox?.current.getBoundingClientRect();
      const percentCalc = Math.floor(
        (scrollBoxRect.top / scrollBoxRect.height) * -historyDataYears?.length
      );
      if (percentCalc > -1 && percentCalc < historyDataYears?.length) {
        setPagePercent(percentCalc);
        const hightV = yearsButtons?.current[percentCalc]?.offsetTop;
        yearsButtonsContainer?.current?.scrollTo({
          behavior: 'smooth',
          top: hightV - 120,
        });
      }
    };

    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, []);

  useEffect(() => {
    setAnimateToggle(true);
    scrollContentBox?.current?.scrollTo(0, 0);
    const interval = setTimeout(() => {
      setAnimateToggle(false);
    }, 100);
    return () => clearTimeout(interval);
  }, [pagePercent]);

  return (
    <section
      ref={scrollBox}
      className={`w-full`}
      style={{ height: `${historyDataYears?.length}00vh` }}
    >
      <div
        style={{ transition: `1s` }}
        className={`sticky top-0 flex w-full items-start justify-between overflow-visible`}
      >
        <div
          className={`h-fit w-full max-w-181 overflow-visible max-lg:max-w-76`}
        >
          <div
            ref={yearsButtonsContainer}
            className={`pointer-events-none flex h-[100vh] select-none flex-col items-end justify-start overflow-y-scroll scrollbar-hide max-lg:justify-center`}
          >
            {historyDataYears?.map((item, key) => (
              <div
                ref={el => {
                  yearsButtons.current[key] = el;
                }}
                key={key}
                className={`${animateToggle ? `pointer-events-none select-none` : ``}`}
                // onClick={() => {
                //   animating(item?.id);
                // }}
              >
                <p
                  className={`text-regular78 max-lg:text-regular32 ${pagePercent === item?.id ? 'text-grey-900' : 'text-grey-200'} flex items-center justify-end`}
                  key={key}
                >
                  <motion.span
                    className={`${pagePercent === item?.id ? 'block' : 'hidden'}`}
                  >
                    {item?.frontNum}
                  </motion.span>
                  {item?.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          ref={scrollContentBox}
          animate={animateToggle ? `hidden` : `visible`}
          variants={sliding}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`mt-120 flex h-[calc(100vh-120px)] w-full max-w-700 flex-col items-start justify-start gap-24 overflow-y-auto overflow-x-hidden pt-15 scrollbar-hide max-lg:ml-24 max-lg:mt-60 max-lg:h-[calc(100vh-60px)] max-lg:px-0 max-lg:py-6 max-lg:pr-16`}
        >
          {historyData?.[pagePercent]?.map((item, key) => (
            <div
              className={`flex w-full min-w-647 items-start justify-start max-lg:min-w-[unset]`}
              key={key}
            >
              <p
                className={`text-bold16 max-lg:text-bold14 flex w-88 flex-shrink-0 items-center justify-start text-grey-500 max-lg:w-39 max-lg:flex-shrink-0`}
              >
                <span
                  className={`text-bold24 max-lg:text-bold14 text-grey-900`}
                >
                  {item?.time}
                </span>
                월
              </p>
              <p
                className={`text-regular18 max-lg:text-regular14 flex items-center justify-start text-grey-500`}
              >
                {HTMLReactParser(item?.text)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryList;
