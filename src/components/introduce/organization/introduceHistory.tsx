import HTMLReactParser from 'html-react-parser';
import React, { useState } from 'react';

const IntroduceHistory = () => {
  const [data1SelecTed, setData1Selected] = useState(0);
  const data1Years = [
    {
      id: 0,
      frontNum: `20`,
      year: `24`,
    },
    {
      id: 1,
      frontNum: `20`,
      year: `23`,
    },
    {
      id: 2,
      frontNum: `20`,
      year: `22`,
    },
    {
      id: 3,
      frontNum: `20`,
      year: `21`,
    },
    {
      id: 4,
      frontNum: `20`,
      year: `20`,
    },
  ];
  const data1 = [
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개1`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시1`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최1`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개2`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시2`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최2`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
  ];
  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <div className={`flex w-1200 items-start justify-start`}>
        <div className={`h-fit w-full max-w-181`}>
          <div className={`flex flex-col items-end justify-start`}>
            {data1Years?.map((item, key) => (
              <button
                onClick={() => {
                  setData1Selected(item?.id);
                }}
              >
                <p
                  className={`text-regular78 ${data1SelecTed === item?.id ? 'text-grey-900' : 'text-grey-200'} flex items-center justify-end`}
                  key={key}
                >
                  <span
                    className={`${data1SelecTed === item?.id ? 'block' : 'hidden'}`}
                  >
                    {item?.frontNum}
                  </span>
                  {item?.year}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div
          className={`ml-240 flex w-full flex-col items-start justify-start gap-24 px-66`}
        >
          {data1?.[data1SelecTed]?.map((item, key) => (
            <div className={`flex items-start justify-start`} key={key}>
              <p
                className={`text-bold16 flex w-88 items-center justify-start text-grey-500`}
              >
                <span className={`text-bold24 text-grey-900`}>
                  {item?.time}
                </span>
                월
              </p>
              <p
                className={`text-regular18 flex items-center justify-start text-grey-500`}
              >
                {HTMLReactParser(item?.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroduceHistory;
