// 훅
import React from 'react';

// 컴포넌트
import HTMLReactParser from 'html-react-parser';

const mediaCardData = [
  {
    id: 0,
    title: `국내 최대 순수 기독 콘텐츠 라이브러리`,
    subTitle: `퐁당 오리지널, 영화, 키즈, 예배, 큐티, 강의 등 4만여 개 이상의<br />검증된 기독 콘텐츠 무료 제공`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_1.png`,
  },
  {
    id: 0,
    title: `CGN 라이브 채널`,
    subTitle: `CGN의 한국, 미주, 일본, 중문 채널 라이브 24시간 스트리밍`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_2.png`,
  },
  {
    id: 0,
    title: `교회를 돕는 양육`,
    subTitle: `교회 소식부터 교회 영상과 클래스까지 교회 홈페이지처럼 맞춤으로<br />제공하는 서비스`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_3.png`,
  },
  {
    id: 0,
    title: `이용자 참여 서비스`,
    subTitle: `댓글 서비스와 LIVE 실시간 채팅으로 나누는 복음의 은혜`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_4.png`,
  },
  {
    id: 0,
    title: `간편 로그인과 쉬운 검색`,
    subTitle: `SNS를 통해 1초 만에 가입 및 간편 로그인, 원하는 콘텐츠를 빠르게<br />찾는 쉬운 검색`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_5.png`,
  },
  {
    id: 0,
    title: `정주행 채널`,
    subTitle: `큐레이션 된 콘텐츠를 모두 모은 정주행 채널`,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/media_card_content_6.png`,
  },
];

const MediaDescriptionCard = () => {
  return mediaCardData?.map((item, idx) => (
    <div
      className={`flex h-500 w-590 flex-col items-center justify-between rounded-16 bg-secondary-blue px-32 pb-63 pt-60`}
      key={idx}
    >
      <div className={`w-full`}>
        <p className={`text-bold24 mb-16 text-white-solid`}>{item?.title}</p>
        <p className={`text-regular16 text-grey-100`}>
          {HTMLReactParser?.(item?.subTitle)}
        </p>
      </div>
      <img src={item?.src} alt='' />
    </div>
  ));
};

export default MediaDescriptionCard;
