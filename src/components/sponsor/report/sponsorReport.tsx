import React, { useState } from 'react';
import SelectBox from '@/components/common/selectBox';

//후원내역 보고 페이지
const sponsorReport = () => {
  const [dateYear, setDateYear] = useState({ text: '' });
  const dateYearOption = [
    {
      id: 0,
      text: '2025',
      value: 1,
    },
    { id: 1, text: '2026', value: 2 },
  ];

  return (
    <div className='flex w-full flex-col items-center bg-primary-50 px-16 pb-78 max-lg:pb-22'>
      <SelectBox
        defultValue='년도 선택'
        listData={dateYearOption}
        selectedItem={dateYear}
        setSelectedItem={setDateYear}
        className='w-full max-w-320'
      />
      <div className='mt-60 min-h-713 w-full max-w-1200 rounded-16 bg-white-solid max-lg:mt-24'></div>
    </div>
  );
};

export default sponsorReport;
