// 훅
import React from 'react';
import HTMLReactParser from 'html-react-parser';

// 데이터
const cableData = [
  {
    title: `IPTV`,
    subTitle: `CGN 방송을 국내 모든 IPTV에서<br />실시간으로 시청하실 수 있습니다.`,
    data: [
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_1_1.png`,

        value: `237번`,
      },
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_1_2.png`,
        value: `292번`,
      },
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_1_3.png`,
        value: `271번`,
      },
    ],
  },
  {
    title: `케이블`,
    subTitle: `CGN 방송을 LG헬로비전, 딜라이브 등을 통해<br />전국 122개 지역에서 실시간으로 시청하실 수 있습니다.`,
    data: [
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_2_1.png`,
        value: `288번`,
      },
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_2_2.png`,
        value: `304번`,
      },
      {
        src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cable_icon_2_3.png`,
        value: `550번`,
      },
    ],
  },
];

const MediaDescriptionSection4 = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start pb-120 pt-120`}
    >
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start`}
      >
        <p className={`text-bold32 mb-40 w-full text-grey-900`}>케이블/IPTV</p>
        <div className={`flex w-full items-start justify-center gap-38`}>
          {cableData?.map((item, idx) => (
            <div
              key={idx}
              className={`flex h-534 w-full flex-col items-center justify-center rounded-16 bg-grey-50`}
            >
              <div
                className={`mb-60 flex w-full max-w-448 flex-col items-center justify-center gap-12`}
              >
                {item?.data?.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex h-52 w-full items-center justify-between rounded-12 bg-white-solid px-41`}
                  >
                    <img
                      src={item?.src}
                      className={`h-24 w-115`}
                      width={115}
                      height={24}
                      alt=''
                    />
                    <span className={`text-bold18 text-grey-900`}>
                      {item?.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className={`text-center`}>
                <p className={`text-bold40 mb-26 text-grey-900`}>
                  {item?.title}
                </p>
                <p className={`text-regular18 text-grey-500`}>
                  {HTMLReactParser(item?.subTitle)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-120 flex w-full max-w-1200 flex-col items-center justify-start`}
      >
        <p className={`text-bold32 mb-40 w-full`}>위성</p>

        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/satellite_background.png)`,
          }}
          className={`flex h-600 w-full flex-col items-center justify-start rounded-24 bg-cover bg-center bg-no-repeat`}
        >
          <div className={`h-full w-full pt-126`}>
            <p className={`text-bold32 text-center text-white-solid`}>
              CGN은 2개의 위성을 사용하여
              <span className={`text-primary-500`}>
                전 세계 150여 개국에 방송을 송출
              </span>
              하고 있습니다.
              <br />
              수신기와 안테나만 설치하면 월비용 부담 없이 방송 시청이
              가능합니다.
            </p>

            <div className={`mt-98 flex items-center justify-center gap-10`}>
              <div
                className={`flex h-64 w-141 items-center justify-center rounded-999 bg-white-solid`}
              >
                <span className={`text-bold24 text-grey-900`}>한국</span>
              </div>
              <div
                className={`flex h-64 w-141 items-center justify-center rounded-999 bg-white-solid`}
              >
                <span className={`text-bold24 text-grey-900`}>미수</span>
              </div>
              <div
                className={`flex h-64 w-141 items-center justify-center rounded-999 bg-white-solid`}
              >
                <span className={`text-bold24 text-grey-900`}>일본</span>
              </div>
              <div
                className={`flex h-64 w-141 items-center justify-center rounded-999 bg-white-solid`}
              >
                <span className={`text-bold24 text-grey-900`}>중문</span>
              </div>
            </div>
          </div>

          <div className={`flex h-105 w-full items-center justify-center`}>
            <p className={`text-regular24 text-grey-50`}>
              채널문의 02-796-1118
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDescriptionSection4;
