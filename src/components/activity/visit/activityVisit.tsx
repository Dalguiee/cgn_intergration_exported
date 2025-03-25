// 훅
import React, { useEffect } from 'react';

// 컴포넌트
import ActivityVisitCard from '@/components/activity/visit/activityVisitCard';

// 데이터
const oddDatas = [
  {
    id: 1,
    exception: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/activity/visit_content_1_1.png`,
    exceptionSrc: `${import.meta.env.VITE_PUBLIC_URL}images/activity/visit_content_1_2.png`,
    exceptionMoSrc: `${import.meta.env.VITE_PUBLIC_URL}images/activity/mo_visit_content_1_2.png`,
    title: `미디어선교 동역교회 신청`,
    subTitle: ``,
    text: [
      `CGN의 동역교회가 되어주세요!`,
      `콘텐츠 상영회, 교회별 맞춤 행사를 통해`,
      `미디어 선교에 함께하실 수 있습니다.`,
    ],
  },

  {
    id: 2,
    exception2: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/activity/visit_content_2.png`,
    title: `동역교회 혜택`,
    subTitle: `문의) 후원기획실 <br className="lg:hidden"/>cgngive@cgnmail.net 02)3275-9320`,
    text: [
      `· 미디어 사역 및 후원참여 안내`,
      `· CGN의 다양한 콘텐츠 상영회(예:서서평 천천히 평온하게, 바울로부터)`,
      `· 교회 창립일 행사(가족 사진관)`,
      `· 어린이 주일 행사(CGN 캐릭터 양순이와 함께하는 어린이 맞춤 행사)`,
      `· CGN 개국 콘서트 티켓 선물`,
    ],
  },
  {
    id: 3,
    reverse: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/activity/visit_content_3.png`,
    title: `견학 신청`,
    subTitle: `문의) 커뮤니케이션실 <br className="lg:hidden"/>cgnpr@cgnmail.net 02)3275-9321`,
    text: [
      `CGN의 미디어 선교 사역 현장을 직접 방문해 보세요.`,
      `제작 스튜디오, 본사 라운딩 등 다양한 체험을 통해 CGN의`,
      `미디어 선교 사역을 배우고 느끼는 시간을 가질 수 있습니다.`,
      `방문 일자, 인원, 참여 연령을 알려주시면 맞춤형 견학을`,
      `진행해드립니다.`,
    ],
    moText1: `CGN의 미디어 선교 사역 현장을 직접 방문해 보세요.`,
    moText2: `제작 스튜디오, 본사 라운딩 등 다양한 체험을 통해 CGN의 미디어<br />선교 사역을 배우고 느끼는 시간을 가질 수 있습니다.<br/ >방문 일자, 인원, 참여 연령을 알려주시면 맞춤형 견학을<br />진행해드립니다.`,
  },
];

// 페이지 최상단 이동
const ActivityVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`w-full flex-col items-center justify-start`}>
      <div
        className={`flex w-full flex-col items-center justify-start pb-160 pt-80 max-lg:mb-0 max-lg:px-16 max-lg:pb-120 max-lg:pt-0`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start gap-160 max-lg:gap-0`}
        >
          {oddDatas?.map((item, key) => (
            <ActivityVisitCard key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityVisit;
