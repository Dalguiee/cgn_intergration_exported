// 훅
import React from 'react';
import HTMLReactParser from 'html-react-parser';

// 컴포넌트
import MediaDescriptionSection1 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection1';
import MediaDescriptionSection2 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection2';
import MediaDescriptionSection3 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection3';

// 데이터
const cableData = [
  {
    title: `IPTV`,
    subTitle: `CGN 방송을 국내 모든 IPTV에서<br />실시간으로 시청하실 수 있습니다.`,
    data: [
      {
        src: `/public/images/mediacenter/cable_icon_1_1.svg`,

        value: `237번`,
      },
      {
        src: `/public/images/mediacenter/cable_icon_1_2.svg`,
        value: `292번`,
      },
      {
        src: `/public/images/mediacenter/cable_icon_1_3.svg`,
        value: `271번`,
      },
    ],
  },
  {
    title: `케이블`,
    subTitle: `CGN 방송을 LG헬로비전, 딜라이브 등을 통해<br />전국 122개 지역에서 실시간으로 시청하실 수 있습니다.`,
    data: [
      {
        src: `/public/images/mediacenter/cable_icon_2_1.svg`,
        value: `288번`,
      },
      {
        src: `/public/images/mediacenter/cable_icon_2_2.svg`,
        value: `304번`,
      },
      {
        src: `/public/images/mediacenter/cable_icon_2_3.svg`,
        value: `550번`,
      },
    ],
  },
];

const MediaDescription = () => {
  return (
    <section className={`w-full`}>
      <MediaDescriptionSection1 />
      <MediaDescriptionSection2 />
      <MediaDescriptionSection3 />
      <section
        className={`flex w-full flex-col items-center justify-start pb-120 pt-120`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start`}
        >
          <p className={`text-bold32 mb-40 w-full text-grey-900`}>
            케이블/IPTV
          </p>
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

        <div className={`w-full max-w-1200`}>
          <p className={`text-bold32 w-full`}></p>
        </div>
      </section>
    </section>
  );
};

export default MediaDescription;
