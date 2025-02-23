// 개발중입니다

// 훅
import React, { useEffect, useRef, useState } from 'react';

//데이터
import { mediaData } from '@/db/mockup';
import Btn from '@/components/common/btn';

const VerticalScroller = () => {
  const verticalBox = useRef();
  const [position, setPosition] = useState('0');

  useEffect(() => {
    const positionCalc = () => {
      if (verticalBox) {
        const getPositon = verticalBox?.current?.getBoundingClientRect();
        const calculatedPosition =
          (getPositon?.top / getPositon?.height) * -100;
        // let calculatedPosition =
        //   ((window.innerHeight - getPositon.top) /
        //     (window.innerHeight + getPositon.height)) *
        //   100;
        // calculatedPosition = Math.min(100, Math.max(0, calculatedPosition)); // 0~100%로 제한
        console.log(calculatedPosition);
        if (calculatedPosition < 0) {
          console.log('스크롤 준비');
        } else if (calculatedPosition > 0 && calculatedPosition < 90) {
          setPosition(calculatedPosition);
          console.log('스크롤중');
        } else if (calculatedPosition > 90) {
          console.log('스크롤 끝남');
        }
      }
    };

    window.addEventListener('scroll', positionCalc);
    return () => window.removeEventListener('scroll', positionCalc);
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <div ref={verticalBox} className={`h-[700vh] w-full`}>
      <div
        className={`sticky top-0 flex h-[100vh] w-full flex-shrink-0 flex-col items-start justify-center overflow-hidden bg-[url(/public/images/bg/section3_bg.png)] bg-cover bg-center bg-no-repeat`}
      >
        {/* 컨텐츠 헤더 */}
        <div
          className={`flex w-full max-w-1560 items-start justify-between pl-380`}
        >
          <div className={`flex flex-col items-start justify-start`}>
            <span className={`text-bold48 text-white-solid`}>퐁당 콘텐츠</span>
            <span className={`text-regular24 text-white-solid`}>
              4만 여개의 다양한 콘텐츠를 무료로 시청하세요!
            </span>
          </div>
          <div>
            <Btn
              text='퐁당 바로가기'
              formMode='mode2-r'
              colorMode='mode3'
              arrowMode={true}
            />
          </div>
        </div>
        {/* 슬라이딩 컨텐츠 */}
        <div
          style={{
            transform: `translateX(calc(-${position}%))`,
            width: `${mediaData?.slice(0, 10).length * 374}px`,
          }}
          className={`duration-600 flex h-full max-h-544 flex-shrink-0 items-start justify-start gap-24 pl-380 transition-all ease-in-out`}
        >
          {mediaData?.slice(0, 10)?.map((item, key) => {
            return (
              <img
                key={key}
                className={`h-full max-h-448 w-350 object-cover`}
                src={item?.src}
                alt=''
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalScroller;
