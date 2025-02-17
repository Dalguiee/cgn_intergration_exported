import Locator from '@/layouts/locator';
import React from 'react';
import { useLocation } from 'react-router-dom';

const TidingsHeader = () => {
  const location = useLocation();

  // tidigns 페이지의 타이틀과 서브타이틀을 분기하는 데이터 입니다.
  const currentPageData = [
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
  ];

  // 주소값을 스캔하여 자동으로 타이틀을 추가합니다. 위의 데이터를 기반으로 합니다.
  const currentPath = currentPageData.filter(item => {
    return location.pathname.includes(item.path);
  });

  return (
    <>
      <Locator />
      <section
        className={`flex h-176 w-full flex-col items-center justify-center pb-32 pt-40 max-md:h-80 max-md:px-20 max-md:py-24`}
      >
        <div className='flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 text-grey-900 max-md:text-bold24`}>
            {currentPath[0]?.title}
          </h1>
          <span className={`text-regular18 text-grey-400 max-md:hidden`}>
            {currentPath[0]?.subTitle}
          </span>
        </div>
      </section>
    </>
  );
};

export default TidingsHeader;
