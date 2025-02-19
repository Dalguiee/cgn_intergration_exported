import SelectBox from '@/components/common/selectBox';
import React from 'react';
import { validators } from 'tailwind-merge';

const FirstSection = () => {
  const selectData = [
    {
      id: 0,
      value: '정기후원',
    },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
    { id: 1, value: '일반후원' },
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
          className={`flex h-168 w-full max-w-1560 flex-col items-start justify-center gap-24 rounded-16 bg-white-solid px-20 py-40`}
        >
          <span className={`text-bold24 text-grey-900`}>
            당신의 소중한 후원으로 오늘도 복음은 전해집니다!
          </span>
          <div>
            <SelectBox listData={selectData} width='500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
