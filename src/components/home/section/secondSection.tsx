// 개발중입니다.

// 훅
import Btn from '@/components/common/btn';
import React, { useState } from 'react';

// 데이터
import { mockupData } from '@/db/mockup';
import TagIcon from '@/components/common/tagIcon';

const SecondSection = () => {
  const campaignData = mockupData?.[0]?.data;
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(4);

  const pagingNext = () => {
    if (endNum < campaignData?.length) {
      setStartNum(item => {
        return item + 4;
      });
      setEndNum(item => {
        return item + 4;
      });
    } else {
      console.log('페이지 최대치도달');
    }
  };
  const pagingPrev = () => {
    if (startNum > 0) {
      setStartNum(item => {
        return item - 4;
      });
      setEndNum(item => {
        return item - 4;
      });
    } else {
      console.log('페이지 최소치도달');
    }
  };

  return (
    <div
      className={`flex h-1004 w-full flex-col items-center justify-center gap-40 px-16 max-lg:h-fit max-lg:gap-0`}
    >
      {/* 컨텐츠 헤더 */}
      <div
        className={`flex w-full max-w-1560 items-center justify-between max-lg:hidden`}
      >
        <h2 className={`text-bold48 text-grey-900`}>캠페인/이벤트</h2>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center justify-center gap-8`}>
            <button
              onClick={() => {
                pagingPrev();
              }}
              className={`h-40 w-40`}
            >
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_rounded.svg`}
                width={40}
                height={40}
                alt='왼쪽'
              />
            </button>
            <button
              onClick={() => {
                pagingNext();
              }}
              className={`h-40 w-40`}
            >
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_rounded.svg`}
                width={40}
                height={40}
                alt='오른쪽'
              />
            </button>
          </div>
          <div className={`ml-24`}>
            <Btn
              text='전체보기'
              formMode='mode2-r'
              colorMode='mode3'
              arrowMode={true}
            />
          </div>
        </div>
      </div>
      {/* 컨텐츠 */}
      <div
        className={`flex w-full max-w-1560 flex-shrink-0 items-center justify-between gap-40 max-lg:flex-col max-lg:gap-12`}
      >
        {/* 왼쪽 및 반응형 위쪽 */}
        <div
          className={`flex aspect-[792/660] h-full max-h-660 w-full max-w-792 items-center justify-center max-lg:aspect-[360/300] max-lg:max-h-[unset] max-lg:max-w-[unset]`}
        >
          {campaignData?.slice(0, 1)?.map((item, key) => (
            <button
              key={key}
              style={{ backgroundImage: `url("${item?.src}")` }}
              className={`bg-[url("${item?.src}")] flex h-full w-full flex-col items-start justify-between rounded-8 bg-cover bg-center bg-no-repeat px-24 pb-33 pt-24`}
            >
              {item?.tag?.map((tag, key) => {
                if (tag?.id === 2 || tag?.id === 7) {
                  return <TagIcon key={key} id={tag?.id} mode={'mode3'} />;
                }
              })}
              <p className={`text-bold32 ml-19 text-grey-900`}>{item?.title}</p>
            </button>
          ))}
        </div>
        {/* 오른쪽 및 반응형 아래쪽 */}
        <div
          className={`grid h-full w-full max-w-728 grid-cols-2 grid-rows-2 gap-24 max-lg:w-full max-lg:max-w-[unset] max-lg:grid-rows-1 max-lg:gap-12`}
        >
          {campaignData?.slice(startNum, endNum)?.map((item, key) => (
            <div
              data-aos='fade-up'
              className={`h-fit w-full max-w-352 max-lg:min-h-179 max-lg:max-w-[unset]`}
              key={key}
            >
              <button
                style={{ backgroundImage: `url("${item?.src}")` }}
                className={`flex aspect-[352/240] h-full max-h-240 w-full items-start justify-start rounded-8 bg-cover bg-center bg-no-repeat px-12 py-12 max-lg:aspect-[175/119] max-lg:h-fit max-lg:w-full`}
              >
                {item?.tag?.map((tag, key) => {
                  if (tag?.id === 1 || tag?.id === 3) {
                    return <TagIcon key={key} id={tag?.id} mode={'mode1'} />;
                  }
                })}
              </button>
              <p
                className={`text-regular24 max-lg:text-regular16 mt-12 line-clamp-2 text-grey-900`}
              >
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
