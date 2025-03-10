// 훅
import React from 'react';

// 컴포넌트
import parse from 'html-react-parser';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroduceFollowers = () => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);

  const oddDatas = [
    {
      id: 0,
      exception: false,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_1.png`,
      title: `실행위원회`,
      subTitle: `CGN 사역을 체계적으로 지원하기 위한 전문인 모임입니다.`,
      text: `각 분야의 전문인 7명으로 구성되어<br />CGN의 예산, 주요 정책, 행사 등을 검토·자문하고 있습니다.`,
    },
    {
      id: 1,
      exception: true,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_2_1.png`,
      exceptionSrc: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_2_2.png`,
      exceptionMoSrc: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_followers_card_2_2.png`,
      title: `운영위원회`,
      subTitle: `CGN의 재정적인 지원을 위해 만들어진 후원회입니다.`,
      text: `2008년부터 ‘CGN 운영위원회’라는 이름으로 정식 출범해<br />200여 명의 운영위원들이 CGN 사역을 돕고 있습니다.`,
    },

    {
      id: 2,
      exception: false,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_3.png`,
      title: `여성 운영위원회`,
      subTitle: `순수복음 콘텐츠를 전해져야 함을<br />공감하고 후원하는 여성들의 모임입니다.`,
      text: `선교미디어 방송 CGN을 후원하는 여성들의 모임으로<br />현재 60여명의 회원으로 구성되어 있습니다.`,
    },
    {
      id: 3,
      reverse: true,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_4.png`,
      title: `드림온맘`,
      subTitle: `기도로 CGN을 돕는 중보기도팀입니다.`,
      text: `CGN의 사역 및 직원, 시청자, 후원자들을 위해<br />함께 기도해주시는 귀한 기도모임입니다.`,
    },
    {
      id: 4,
      exception: false,
      src: `${import.meta.env.VITE_PUBLIC_URL}images/introduce/followers_card_5.png`,
      title: `드림온핸즈`,
      subTitle: `CGN의 사역을 돕기 위해 조직된 자원봉사단체입니다.`,
      text: `미디어 선교를 위해 귀한 시간과 손길로 CGN 사역에<br />필요한 부분을 섬기고 있습니다.`,
    },
  ];
  return (
    <div
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
  );
};

export default IntroduceFollowers;
