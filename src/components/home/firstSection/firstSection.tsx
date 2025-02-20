import BigButton from '@/components/common/bigButton';
import SelectBox from '@/components/common/selectBox';
import React, { useState } from 'react';

const FirstSection = () => {
  // 선택지에서 선택된 데이터가 들어있습니다.
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
      className={`flex h-918 w-full items-center justify-center bg-[url('/public/images/bg/main_first_section_bg.png')] bg-cover bg-center bg-no-repeat`}
    >
      <div className={`w-full max-w-1560`}>
        <div className={`mb-200 flex flex-col items-start justify-center`}>
          <span className={`text-bold78 text-white-solid`}>
            세상에 없는 가치와
            <br />
            감동을 담다
          </span>
          <span className={`text-regular32 text-grey-50`}>
            CGN이 세상에 없는 가치와 감동을 전합니다.
          </span>
        </div>
        <div
          className={`flex min-h-168 w-full max-w-1560 flex-col items-start justify-center gap-24 rounded-16 bg-white-solid px-40 py-24`}
        >
          <span className={`text-bold24 text-grey-900`}>
            당신의 소중한 후원으로 오늘도 복음은 전해집니다!
          </span>
          <div className={`flex flex-wrap items-center justify-center gap-8`}>
            <SelectBox
              listData={selectData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              width='290'
            />
            <button
              className={`text-regular24 h-64 w-212 rounded-8 bg-grey-100 text-grey-900`}
            >
              10,000원
            </button>
            <button
              className={`text-regular24 h-64 w-212 rounded-8 bg-grey-100 text-grey-900`}
            >
              30,000원
            </button>
            <button
              className={`text-regular24 h-64 w-212 rounded-8 bg-grey-100 text-grey-900`}
            >
              50,000원
            </button>
            <button
              className={`text-regular24 h-64 w-212 rounded-8 bg-grey-100 text-grey-900`}
            >
              기타
            </button>
            <button
              className={`text-bold24 flex h-64 w-300 items-center justify-center rounded-8 bg-primary-500 text-white-solid`}
            >
              후원하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
