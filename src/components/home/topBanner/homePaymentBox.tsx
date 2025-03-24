// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import SelectBox from '@/components/common/selectBox';
import StyledButtons from '@/components/common/styledButtons';
import { useNavigate } from 'react-router-dom';

// 데이터
const subscribesData = [
  {
    id: 0,
    text: '정기후원',
    value: 1,
  },
  { id: 1, text: '일시후원' },
  { id: 2, text: '증액후원' },
];
const priceData = [
  { id: 0, text: '10,000원' },
  { id: 1, text: '30,000원' },
  { id: 2, text: '50,000원' },
  { id: 3, text: '기타' },
];

const HomePaymentBox = () => {
  const navigate = useNavigate();
  // select box 와 송신하는 state
  const [selectedSubscribes, setselectedSubscribes] = useState([]);
  // 버튼항목과 송신하는 state
  const [selectedPrice, setSelectedPrice] = useState({});

  useEffect(() => {
    if (selectedSubscribes?.id === 2) {
      sessionStorage.setItem('scrollY', window.scrollY.toString());
      navigate(`offermore`);
      // window.open(
      //   `https://cgndev.onflou.co.kr/offermore?selectedId=${selectedPrice?.id}`,
      //   `_blank`
      // );
      // setselectedSubscribes(subscribesData?.[0]);
    }
    // setselectedSubscribes([]);
  }, [selectedSubscribes]);

  return (
    <div
      className={`flex min-h-168 w-full flex-shrink-0 flex-col items-start justify-center gap-24 rounded-16 bg-white-solid px-40 max-lg:items-center max-lg:gap-16 max-lg:px-16`}
    >
      <span className={`text-bold24 max-lg:text-bold18 text-grey-900`}>
        당신의 소중한 후원으로 오늘도 복음은 전해집니다!
      </span>
      <div
        className={`flex w-full items-center justify-center gap-8 max-lg:flex-col max-lg:gap-12`}
      >
        <SelectBox
          listData={subscribesData}
          selectedItem={selectedSubscribes}
          setSelectedItem={setselectedSubscribes}
          className='w-full max-w-290 max-lg:min-w-full'
        />
        <div
          className={`flex h-64 w-full max-w-874 items-center justify-center gap-8 max-lg:h-48 max-lg:min-w-full max-lg:gap-5`}
        >
          {priceData?.map((item, key) => {
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedPrice(item);
                }}
                className={`${item?.id === selectedPrice?.id ? 'text-bold24 max-lg:text-bold16 border-1 border-primary-500 bg-transparent text-primary-500' : 'text-regular24 max-lg:text-regular16 text-grey-900'} h-full w-full rounded-8 bg-grey-100 max-lg:rounded-4`}
              >
                {item?.text}
              </button>
            );
          })}
        </div>
        <div className={`max-lg:w-full lg:w-300`}>
          <StyledButtons
            text='후원하기'
            formMode='mode1'
            colorMode='mode1'
            className={`w-full`}
            onClick={() => {
              if (selectedSubscribes?.id === 2) {
                window.open(
                  `https://cgndev.onflou.co.kr/offermore?selectedId=${selectedPrice?.id}`,
                  `_blank`
                );
              } else if (selectedSubscribes?.id === 0) {
                window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
              } else if (selectedSubscribes?.id === 1) {
                window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
              }
            }}
          />
        </div>

        {/* <button
          className={`text-bold24 flex h-64 w-300 max-w-300 items-center justify-center rounded-8 bg-primary-500 text-white-solid max-lg:min-w-full max-md:h-52`}
        >
          후원하기
        </button> */}
      </div>
    </div>
  );
};

export default HomePaymentBox;
