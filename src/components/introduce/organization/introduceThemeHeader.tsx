// 훅
import React from 'react';

const IntroduceThemeHeader = ({
  className = ``,
  selectedCategoryArticleId,
}) => {
  // tidigns 페이지의 타이틀과 서브타이틀을 분기하는 데이터 입니다.
  const currentPageData = [
    {
      id: 0,
      title: `이사장 인사`,
    },
    {
      id: 1,
      title: `대표 인사`,
    },
    {
      id: 2,
      title: `섬기는 분들`,
    },
    {
      id: 3,
      title: `연혁`,
    },
    {
      id: 4,
      title: `오시는 길`,
    },
  ];

  return (
    <>
      <section
        className={`${className && className} flex h-176 w-full flex-col items-center justify-center border-grey-100 pb-32 pt-40 max-lg:h-80 max-lg:border-t-1 max-lg:px-20 max-lg:py-24`}
      >
        <div className='flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 max-lg:text-bold24 text-grey-900`}>
            {currentPageData[selectedCategoryArticleId]?.title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default IntroduceThemeHeader;
