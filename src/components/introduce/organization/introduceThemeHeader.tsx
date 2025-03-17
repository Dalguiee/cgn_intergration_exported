// 훅
import React from 'react';
import { useParams } from 'react-router-dom';

// 데이터
const currentPageData = [
  {
    id: 0,
    params: `chairman`,
    title: `이사장 인사`,
  },
  {
    id: 1,
    params: `ceo`,
    title: `대표 인사`,
  },
  {
    id: 2,
    params: `people`,
    title: `섬기는 분들`,
  },
  {
    id: 3,
    params: `history`,
    title: `연혁`,
  },
  {
    id: 4,
    params: `location`,
    title: `오시는 길`,
  },
];

const IntroduceThemeHeader = ({ className = `` }) => {
  // tidigns 페이지의 타이틀과 서브타이틀을 분기하는 데이터 입니다.
  const { subDepth } = useParams();

  const dataFind = currentPageData?.find(item => item?.params === subDepth);

  return (
    <>
      <section
        className={`${className && className} flex h-176 w-full flex-col items-center justify-center border-grey-100 pb-32 pt-40 max-lg:h-80 max-lg:border-t-1 max-lg:px-20 max-lg:py-24`}
      >
        <div className='flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 max-lg:text-bold24 text-grey-900`}>
            {dataFind?.title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default IntroduceThemeHeader;
