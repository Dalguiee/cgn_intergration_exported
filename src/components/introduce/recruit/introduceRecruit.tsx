// 훅
import React, { useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';

// 데이터
import { recruitData } from '@/db/mockup';
import RecruitCard from './recruitCard';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const textData = [
  {
    id: 0,
    number: `01`,
    text: `선교의 비전을<br />따르는 사람`,
  },
  {
    id: 1,
    number: `02`,
    text: `성장과 도전을<br />추구하는 사람`,
  },
  {
    id: 2,
    number: `03`,
    text: `열린 마음으로<br />협력하는 사람`,
  },
  {
    id: 3,
    number: `04`,
    text: `말씀과 기도에<br />힘쓰는 사람`,
  },
];

const IntroduceRecruit = () => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);
  const foldBreakpoint = ResponsiveScanner(`(max-width: 360px)`);
  const [whileItem, setWhileItem] = useState([]);
  const [endedItem, setEndedItem] = useState([]);

  useEffect(() => {
    const filteredWhileItem = recruitData?.filter(item => {
      return item?.tag?.some(obj => obj?.id === 1);
    });
    const filteredEndedItem = recruitData?.filter(item => {
      return item?.tag?.some(obj => obj?.id === 3);
    });

    setWhileItem(filteredWhileItem);
    setEndedItem(filteredEndedItem);
  }, []);

  // 상단이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start`}
    >
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start gap-60 pb-120 pt-40 max-lg:pb-60 max-lg:pt-0`}
      >
        <img
          className={`w-full object-cover max-lg:h-275`}
          src={`${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_recruit_banner.png` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/recruit_banner.png`} `}
          width={1200}
          height={540}
          alt=''
        />
        <span className={`text-bold40 text-grey-900 max-lg:hidden`}>
          인재상
        </span>
        <div
          className={`flex w-full max-w-1200 items-center justify-center gap-120 max-lg:h-fit max-lg:max-w-455 max-lg:flex-wrap max-lg:gap-24 lg:h-360`}
        >
          <span
            className={`text-bold32 absolute text-grey-900 lg:hidden ${foldBreakpoint ? `hidden` : ``}`}
          >
            인재상
          </span>

          {textData?.map((item, idx) => (
            <div
              key={item?.id}
              className={`relative flex h-144 w-170 flex-shrink-0 flex-col items-center justify-start gap-24 before:pointer-events-none before:absolute before:left-[50%] before:top-[50%] before:z-[1] before:h-360 before:w-360 before:translate-x-[-50%] before:translate-y-[-50%] before:transform before:select-none before:rounded-999 before:mix-blend-multiply max-lg:h-160 max-lg:w-160 max-lg:gap-8 max-lg:pt-36 before:max-lg:h-160 before:max-lg:w-160 ${idx === 0 ? `before:bg-primary-100` : ``} ${idx === 1 ? `before:bg-primary-200` : ``} ${idx === 2 ? `before:bg-primary-300` : ``} ${idx === 3 ? `before:bg-primary-400` : ``} before:content-[""]`}
            >
              <span className={`text-bold32 max-lg:text-bold16 text-grey-900`}>
                {item?.number}
              </span>
              <span
                className={`text-bold32 max-lg:text-bold16 text-center text-grey-900`}
              >
                {HTMLReactParser?.(item?.text)}
              </span>
              <span
                className={`${idx === 3 ? `hidden` : ``} text-bold32 absolute right-[-40%] top-[43%] text-grey-900 max-lg:hidden`}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex w-full flex-col items-center justify-start bg-white-solid pb-120 pt-120 max-lg:px-16 max-lg:pt-60`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start`}
        >
          <p
            className={`text-bold40 max-lg:text-bold24 mb-40 text-grey-900 max-lg:mb-24`}
          >
            채용 공고
          </p>
          <div
            className={`flex w-full items-start justify-center gap-16 max-lg:flex-col max-lg:items-center max-lg:justify-start`}
          >
            <div
              className={`flex w-full flex-col items-center justify-start gap-16`}
            >
              {whileItem?.map((item, idx) => (
                <RecruitCard key={idx} item={item} />
              ))}
            </div>
            <div
              className={`flex w-full flex-col items-center justify-start gap-16`}
            >
              {endedItem?.map((item, idx) => (
                <RecruitCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceRecruit;
