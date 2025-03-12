// 훅
import React from 'react';

// 컴포넌트
import parse from 'html-react-parser';
import ResponsiveScanner from '@/components/common/responsiveScanner';

// 데이터
const oddDatas = [
  {
    id: 1,
    exception: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_2_1.png`,
    exceptionSrc: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_2_2.png`,
    exceptionMoSrc: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_followers_card_2_2.png`,
    title: `미디어선교 동역교회 신청`,
    subTitle: `CGN의 재정적인 지원을 위해 만들어진 후원회입니다.`,
    text: `CGN의 동역교회가 되어주세요!<br />콘텐츠 상영회, 교회별 맞춤 행사를 통해<br />미디어 선교에 함께하실 수 있습니다.`,
  },

  {
    id: 2,
    exception: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_3.png`,
    title: `동역교회 혜택`,
    subTitle: `문의) 후원기획실 cgngive@cgnmail.net 02)3275-9320`,
    text: `· 미디어 사역 및 후원참여 안내<br />· CGN의 다양한 콘텐츠 상영회(예:서서평 천천히 평온하게, 바울로부터)<br />· 교회 창립일 행사(가족 사진관)<br />· 어린이 주일 행사(CGN 캐릭터 양순이와 함께하는 어린이 맞춤 행사)<br />· CGN 개국 콘서트 티켓 선물`,
  },
  {
    id: 3,
    reverse: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_4.png`,
    title: `견학 신청`,
    subTitle: `문의) 커뮤니케이션실 cgnpr@cgnmail.net 02)3275-9321`,
    text: `CGN의 미디어 선교 사역 현장을 직접 방문해 보세요.<br />제작 스튜디오, 본사 라운딩 등 다양한 체험을 통해 CGN의<br />미디어 선교 사역을 배우고 느끼는 시간을 가질 수 있습니다.<br/ >방문 일자, 인원, 참여 연령을 알려주시면 맞춤형 견학을<br />진행해드립니다.`,
  },
];

const ActivityVisit = () => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);

  return (
    <section className={`w-full flex-col items-center justify-start`}>
      <div
        data-aos='fade-up'
        className={`flex w-full flex-col items-center justify-start pb-160 pt-80 max-lg:mb-60 max-lg:px-16 max-lg:pb-60 max-lg:pt-0`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start gap-160 max-lg:gap-60`}
        >
          {oddDatas?.map((item, key) => (
            <div
              key={key}
              className={`flex w-full items-end justify-start gap-16 max-lg:flex-col max-lg:items-center`}
            >
              <div
                key={key}
                className={`${item?.exception ? `flex-col-reverse` : ``} ${item?.reverse ? `flex-row-reverse` : ``} flex w-full items-start justify-center gap-60 max-lg:flex-col max-lg:items-center max-lg:gap-0`}
              >
                <img
                  className={`h-400 w-600 rounded-16 object-cover max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
                  src={item?.src}
                  width={600}
                  height={400}
                  alt=''
                />
                {item?.exception ? (
                  <img
                    className={`mt-24 h-592 w-454 rounded-16 max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361 lg:hidden`}
                    src={mobile ? item?.exceptionMoSrc : item?.exceptionSrc}
                    width={454}
                    height={592}
                    alt=''
                  />
                ) : (
                  ''
                )}

                <div
                  className={`w-full max-lg:mt-40 max-lg:max-w-361 ${item?.exception ? `max-w-600 max-lg:max-w-361` : ``}`}
                >
                  <p
                    className={`text-bold48 max-lg:text-bold24 mb-40 text-grey-900 max-lg:mb-8`}
                  >
                    {parse(item?.title)}
                  </p>
                  <p
                    className={`text-bold24 max-lg:text-bold16 mb-24 text-grey-900`}
                  >
                    {parse(item?.subTitle)}
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500`}
                  >
                    {parse(item?.text)}
                  </p>
                </div>
              </div>
              {item?.exception ? (
                <img
                  className={`h-full max-h-592 w-full max-w-454 rounded-16 object-cover max-lg:hidden max-lg:h-full max-lg:max-h-240 max-lg:w-full max-lg:max-w-361`}
                  src={mobile ? item?.exceptionMoSrc : item?.exceptionSrc}
                  width={454}
                  height={592}
                  alt=''
                />
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityVisit;
