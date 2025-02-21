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
    console.log(Math.round(campaignData?.length / 4));
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
    <section
      className={`flex h-1004 w-full flex-col items-center justify-center gap-40`}
    >
      <div className={`flex w-full max-w-1560 items-center justify-between`}>
        <h2 className={`text-bold48 text-grey-900`}>캠페인/이벤트</h2>
        <div className={`items=center flex justify-between`}>
          <div className={`flex items-center justify-center gap-8`}>
            <button
              onClick={() => {
                pagingPrev();
              }}
              className={`h-40 w-40`}
            >
              <img
                src='/public/images/icon/arrow_left_rounded.svg'
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
                src='/public/images/icon/arrow_right_rounded.svg'
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
      <div className={`flex items-center justify-between gap-40`}>
        <div className={`relative`}>
          {campaignData?.slice(0, 1)?.map((item, key) => (
            <button
              key={key}
              style={{ backgroundImage: `url("${item?.src}")` }}
              className={`bg-[url("${item?.src}")] flex aspect-[792/660] h-660 w-full max-w-792 flex-col items-start justify-between rounded-16 px-24 pb-33 pt-24`}
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
        <div className={`relative grid grid-cols-2 grid-rows-2 gap-24`}>
          {campaignData?.slice(startNum, endNum)?.map((item, key) => (
            <div className={`h-316 max-w-352`} key={key}>
              <button
                style={{ backgroundImage: `url("${item?.src}")` }}
                className={`flex aspect-[352/240] h-240 w-full max-w-352 items-start justify-start rounded-8 bg-cover bg-no-repeat px-12 py-12`}
              >
                {item?.tag?.map((tag, key) => {
                  if (tag?.id === 1 || tag?.id === 3) {
                    return <TagIcon key={key} id={tag?.id} mode={'mode1'} />;
                  }
                })}
              </button>
              <p className={`text-regular24 mt-12 line-clamp-2 text-grey-900`}>
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
