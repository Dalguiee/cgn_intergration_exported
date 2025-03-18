// 훅
import React, { useState } from 'react';

// 컴포넌트
import SelectBox from '@/components/common/selectBox';

//후원내역 보고 페이지
const IntroducesupportReport = () => {
  const [dateYear, setDateYear] = useState({
    id: 7,
    text: '2023',
    src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2023.jpg`,
    value: 8,
  });
  const dateYearOption = [
    {
      id: 7,
      text: '2023',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2023.jpg`,
      value: 8,
    },
    {
      id: 6,
      text: '2022',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2022.jpg`,
      value: 7,
    },
    {
      id: 5,
      text: '2021',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2021.jpg`,
      value: 6,
    },
    {
      id: 4,
      text: '2020',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2020.jpg`,
      value: 5,
    },
    {
      id: 3,
      text: '2019',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2019.jpg`,
      value: 4,
    },
    {
      id: 2,
      text: '2018',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2018.jpg`,
      value: 3,
    },
    {
      id: 1,
      text: '2017',
      src: `${import.meta.env.VITE_PUBLIC_URL}images/donation/report_2017.jpg`,
      value: 2,
    },
  ];

  return (
    <div className='flex w-full flex-col items-center bg-primary-50 px-16 pb-78 max-lg:pb-22'>
      <SelectBox
        defaultValue='년도 선택'
        listData={dateYearOption}
        selectedItem={dateYear}
        setSelectedItem={setDateYear}
        className='w-full max-w-320'
      />
      <div className='mt-60 w-full max-w-1200 rounded-16 bg-white-solid max-lg:mt-24'>
        <img src={dateYear?.src} alt='' className='w-full' />
      </div>
    </div>
  );
};

export default IntroducesupportReport;
