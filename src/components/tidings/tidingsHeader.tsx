import Locator from '@/layouts/locator';
import React from 'react';
import { useLocation } from 'react-router-dom';

const TidingsHeader = () => {
  const location = useLocation();

  // tidigns 페이지의 타이틀과 서브타이틀을 분기하는 데이터 입니다.
  const curretPageData = [
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
  const curretPath = curretPageData.filter(item => {
    return location.pathname.includes(item.path);
  });

  return (
    <>
      <Locator />
      <section
        className={`flex h-216 w-full flex-col items-center justify-center pb-32 pt-80 max-md:px-20`}
      >
        <div className='text_section flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 text-grey-900`}>{curretPath[0].title}</h1>
          <span className={`text-regular18 text-grey-400`}>
            {curretPath[0].subTitle}
          </span>
        </div>
        <div className={`flex items-center justify-center`}></div>
      </section>
    </>
  );
};

export default TidingsHeader;
