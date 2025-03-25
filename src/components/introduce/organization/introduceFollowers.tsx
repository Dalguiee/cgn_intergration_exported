// 훅
import React from 'react';

// 컴포넌트
import IntroduceFollwersCard from './introduceFollwersCard';

//데이터
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

const IntroduceFollowers = () => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-start pb-160 pt-80 max-lg:mb-60 max-lg:px-16 max-lg:pb-60 max-lg:pt-0`}
    >
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start gap-160 max-lg:gap-60`}
      >
        {oddDatas?.map((item, key) => (
          <IntroduceFollwersCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default IntroduceFollowers;
