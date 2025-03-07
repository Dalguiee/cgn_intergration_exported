// 훅
import React from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import Locator from '@/components/common/locator';

const ThemeHeader = ({ className = `` }) => {
  const location = useLocation();

  // tidigns 페이지의 타이틀과 서브타이틀을 분기하는 데이터 입니다.
  const currentPageData = [
    {
      path: 'introduce/vision',
      title: '미션&비전',
      subTitle: '하나님의 사랑과 복음을 전하는 통로 CGN',
    },
    {
      path: 'introduce/organization',
      title: '기관 소개',
      subTitle: 'CGN의 해외지사를 소개합니다.',
    },
    {
      path: 'introduce/worldwide',
      title: '해외지사 소개',
      subTitle: '하나님의 사랑과 복음을 전하는 통로 CGN을 소개합니다.',
    },
    {
      path: 'introduce/recruit',
      title: '채용',
      subTitle: 'CGN에서 함께할 인재를 찾습니다.',
    },
    {
      path: 'introduce/ambassador',
      title: '홍보대사',
      subTitle: 'CGN의 홍보대사를 소개합니다.',
    },

    {
      path: 'introduce/recruit',
      title: '채용',
      subTitle: 'CGN에서 함께할 인재를 찾습니다.',
    },

    {
      path: 'tidings/campaign',
      title: '캠페인/이벤트',
      subTitle: 'CGN의 캠페인/이벤트를 확인해 보세요.',
    },
    {
      path: 'tidings/mission',
      title: '선교 스토리',
      subTitle: 'CGN의 선교 소식을 확인해 보세요.',
    },
    {
      path: 'tidings/support',
      title: '후원 스토리',
      subTitle: 'CGN의 후원 소식을 확인해 보세요.',
    },
    {
      path: 'tidings/broadcast',
      title: '보도 자료',
      subTitle: 'CGN의 보도 자료를 확인해 보세요.',
    },
  ];

  // 주소값을 스캔하여 자동으로 타이틀을 추가합니다. 위의 데이터를 기반으로 합니다.
  const currentPath = currentPageData.filter(item => {
    return location.pathname.includes(item.path);
  });

  return (
    <>
      <Locator className={className} />
      <section
        className={`${className && className} flex h-176 w-full flex-col items-center justify-center border-grey-100 pb-32 pt-40 max-lg:h-80 max-lg:border-t-1 max-lg:px-20 max-lg:py-24`}
      >
        <div className='flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 max-lg:text-bold24 text-grey-900`}>
            {currentPath[0]?.title}
          </h1>
          <span className={`text-regular18 text-grey-400 max-lg:hidden`}>
            {currentPath[0]?.subTitle}
          </span>
        </div>
      </section>
    </>
  );
};

export default ThemeHeader;
