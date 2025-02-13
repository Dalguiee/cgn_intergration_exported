import React, { createContext } from 'react';
export const dataContext = createContext(null);

const Context = ({ children }) => {
  const tidingsList = [
    { id: 0, type: '전체' },
    { id: 1, type: '진행중' },
    { id: 2, type: '종료' },
  ];

  const tidingsMockup = [
    {
      id: 1,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트1',
      detail_title: '기특하데이1',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 2,
      tag: [
        { text: '이벤트', mode: 'mode1' },
        { text: '캠페인', mode: 'mode1' },
      ],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트2',
      detail_title: '기특하데이2',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 3,
      tag: [
        { text: '이벤트', mode: 'mode1' },
        { text: '진행중', mode: 'mode1' },
      ],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트3',
      detail_title: '기특하데이3',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 4,
      tag: [
        { text: '이벤트', mode: 'mode1' },
        { text: '종료', mode: 'mode1' },
      ],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트4',
      detail_title: '기특하데이4',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 5,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트5',
      detail_title: '기특하데이5',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 6,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트6',
      detail_title: '기특하데이6',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 7,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트7',
      detail_title: '기특하데이7',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 8,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트8',
      detail_title: '기특하데이8',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
    {
      id: 9,
      tag: [{ text: '이벤트', mode: 'mode1' }],
      src: '/public/images/tidings/card_content_small.png',
      content_src: [
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
        '/public/images/tidings/card_content_big.png',
      ],
      title: '방학 퀴즈 뽀개기 이벤트9',
      detail_title: '기특하데이9',
      sub_title: '1. 다양한 신규 콘텐츠 공개',
      content: `▶ 1월 1일 공개된  <CGN과 함께 일-일 통독>은 새롭게 론칭한 성경 통독 프로그램입니다. 기존 <하루 20분 공동체 성경읽기>의 업그레이드 버전으로 새로운 삽화와 1인 낭독으로 성경 통독에 대한 흥미를 북돋습니다. 하루 15분이면 1년 1독을 완성하도록 구성했죠. 특히 아름답고 풍성한 삽화로 눈과 귀가 즐거운 성경읽기를 할 수 있답니다. 현재 CGN TV를 통해 방송되고 있으며, 퐁당과 유튜브에도 매일 업로드됩니다. (tip! OTT '퐁당'에서 시청하면 자동 진도체크가 되어 편리하게 통독할 수 있답니다.)`,
      start_date: '2022-01-01',
      end_date: '2024.11.05',
    },
  ];

  return (
    <dataContext.Provider value={{ tidingsMockup, tidingsList }}>
      {children}
    </dataContext.Provider>
  );
};

export default Context;
