// 훅
import React, { useState } from 'react';

// 컴포넌트
import SelectBox from '@/components/common/selectBox';

const PaymentBox = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const selectData = [
    {
      id: 0,
      text: '정기후원',
      value: 1,
    },
    { id: 1, text: '일반후원1', value: 2 },
    { id: 2, text: '일반후원2', value: 3 },
    { id: 3, text: '일반후원3', value: 4 },
    { id: 4, text: '일반후원4', value: 5 },
    { id: 5, text: '일반후원5', value: 6 },
    { id: 6, text: '일반후원6', value: 7 },
    { id: 7, text: '일반후원7', value: 8 },
  ];

  return (
    <div
      className={`flex min-h-168 flex-col items-start justify-center gap-24 rounded-16 bg-white-solid px-40 py-24 max-lg:items-center max-lg:px-0`}
    >
      <span className={`text-bold24 text-grey-900`}>
        당신의 소중한 후원으로 오늘도 복음은 전해집니다!
      </span>
      <div
        className={`flex w-full items-center justify-center gap-8 max-lg:flex-col max-lg:gap-12`}
      >
        <SelectBox
          listData={selectData}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          className='w-290 max-w-290 max-lg:min-w-full'
        />
        <div
          className={`flex h-64 w-full max-w-874 items-center justify-center gap-8 max-lg:min-w-full max-lg:gap-5 max-md:h-48`}
        >
          <button
            className={`text-regular24 max-md:text-regular16 h-full w-full rounded-8 bg-grey-100 text-grey-900`}
          >
            10,000원
          </button>
          <button
            className={`text-regular24 max-md:text-regular16 h-full w-full rounded-8 bg-grey-100 text-grey-900`}
          >
            30,000원
          </button>
          <button
            className={`text-regular24 max-md:text-regular16 h-full w-full rounded-8 bg-grey-100 text-grey-900`}
          >
            50,000원
          </button>
          <button
            className={`text-regular24 max-md:text-regular16 h-full w-full rounded-8 bg-grey-100 text-grey-900`}
          >
            기타
          </button>
        </div>
        <button
          className={`text-bold24 flex h-64 w-300 max-w-300 items-center justify-center rounded-8 bg-primary-500 text-white-solid max-lg:min-w-full max-md:h-52`}
        >
          후원하기
        </button>
      </div>
    </div>
  );
};

export default PaymentBox;
