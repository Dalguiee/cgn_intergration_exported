import React, { createContext } from 'react';
export const dataContext = createContext(null);

// 이곳은 본래 서버에서 와야할 컨텐츠 데이터들을 프론트 작업중 임시로 받기위해 데이터 혹은 조각함수를 저장하는 곳입니다.
const Context = ({ children }) => {
  // 소식에서 사용되는 컨텐츠 카드 정보입니다.
  const cardData = [
    {
      id: 1,
      type: ['이벤트'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 2,
      type: ['캠페인'],

      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 3,
      type: ['이벤트', '진행중'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 4,
      type: ['이벤트', '진행중'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 5,
      type: ['캠페인', '종료'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      detail_title: '기특하데이',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 6,
      type: ['캠페인', '종료'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 7,
      type: ['캠페인', '종료'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 8,
      type: ['캠페인', '종료'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 9,
      type: ['캠페인', '종료'],
      src: '/public/images/tidings/card_content_small.png',
      title: 'Test Title 1',
      content: 'Test Content 1',
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
  ];

  return (
    <dataContext.Provider value={{ cardData }}>{children}</dataContext.Provider>
  );
};

export default Context;
