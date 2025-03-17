import React, { useEffect, useState } from 'react';

// 데이터
const mockupStartDate = {
  year: 2000,
  month: 1,
  day: 1,
  hour: 1,
  minute: 1,
};

const mockupEndDate = {
  year: 3000,
  month: 2,
  day: 2,
  hour: 2,
  minute: 2,
};

const Maintenance = () => {
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});

  useEffect(() => {
    setStartDate(mockupStartDate);
    setEndDate(mockupEndDate);
  });

  return (
    <section
      className={`flex w-full flex-col items-center justify-start py-160`}
    >
      <div
        className={`flex w-full max-w-600 flex-col items-center justify-start gap-24 px-24 max-lg:gap-20`}
      >
        <img
          className={`h-70 w-200 object-cover max-lg:h-42 max-lg:w-120`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/cgn_logo_malfunction.png`}
          width={200}
          height={70}
          alt=''
        />
        <div className={`w-full text-center`}>
          <p className={`text-bold32 max-lg:text-bold24 mb-16 text-grey-900`}>
            죄송합니다. <br className={`lg:hidden`} />
            현재 점검중입니다.
          </p>
          <p className={`text-regular18 max-lg:text-regular16 text-grey-500`}>
            이용에 불편을 드려 죄송합니다. <br />
            현재 사이트 리뉴얼 중이므로 <br className={`lg:hidden`} />
            접속이 원활하지 않습니다. <br /> 빠른 시일 내 작업을 완료하고
            <br className={`lg:hidden`} />
            새로운 모습으로 찾아 뵙겠습니다.
          </p>
        </div>
        <div
          className={`flex w-full flex-col items-center justify-center rounded-8 bg-primary-100 py-16`}
        >
          <p className={`text-bold16 text-grey-900`}>점검 기간</p>
          <div className={`flex items-center justify-center text-grey-500`}>
            <div
              className={`text-regular24 max-lg:text-regular16 flex items-center justify-start text-grey-500`}
            >
              <span>{startDate?.year}.</span>
              <span>{String(startDate?.month).padStart(2, `0`)}.</span>
              <span>{String(startDate?.day).padStart(2, `0`)}</span>
              &nbsp;
              <span>{String(startDate?.hour).padStart(2, `0`)}:</span>
              <span>{String(startDate?.minute).padStart(2, `0`)}</span>
            </div>
            <span className={`text-regular24 max-lg:text-regular16`}>
              &nbsp;~&nbsp;
            </span>
            <div
              className={`text-regular24 max-lg:text-regular16 flex items-center justify-start`}
            >
              <span>{endDate?.year}.</span>
              <span>{String(endDate?.month).padStart(2, `0`)}.</span>
              <span>{String(endDate?.day).padStart(2, `0`)}</span>
              &nbsp;
              <span>{String(endDate?.hour).padStart(2, `0`)}:</span>
              <span>{String(endDate?.minute).padStart(2, `0`)}</span>
            </div>
          </div>
        </div>
        <p className={`text-bold32 max-lg:text-bold24 text-grey-900`}>
          감사합니다
        </p>
      </div>
    </section>
  );
};

export default Maintenance;
