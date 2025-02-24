// 훅
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';
import Btn from '@/components/common/btn';

// 각 데이터를 카테고리로 나누는 버튼 모음입니다.
// 데이터는 목업리스트에서 가져오며 id 값이 일치하는 컨텐츠를 걸러내는 기능을 합니다.
const Section4CategoryList = ({ setSelectedCategoryArticleId }) => {
  const location = useLocation();
  /* 클릭시 태그버튼의 색이 변하게 하는 state 값 저장 */
  const [highlight, setHighlight] = useState(0);
  const [categoryTags, setCategoryTags] = useState([]);

  // 태그 데이터 정리
  useEffect(() => {
    if (location.pathname) {
      const totalTag = {
        id: 0,
        type: '전체',
      };
      setCategoryTags([totalTag, ...mockupData]);
    }
  }, [location.pathname]);

  return (
    <section
      className={`mx-auto flex w-full max-w-1560 items-center justify-between gap-24 pb-10 max-lg:overflow-x-scroll`}
    >
      <div className={`flex items-center justify-start gap-24`}>
        <span className={`text-bold48 text-grey-900 max-lg:hidden`}>소식</span>
        <div
          className={`flex w-fit items-center justify-center gap-8 max-lg:gap-4 max-lg:px-20`}
        >
          {categoryTags?.map(item => (
            <button
              onClick={() => {
                setHighlight(item?.id);
                setSelectedCategoryArticleId(item?.id);
              }}
              key={item?.id}
              className={`${item?.id == highlight ? 'text-bold16 border-primary-400 text-primary-500' : 'text-regular16'} h-48 min-w-120 text-nowrap rounded-999 border-1 border-grey-200 text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
            >
              {item?.type}
            </button>
          ))}
        </div>
      </div>
      <div className={`max-lg:hidden`}>
        <Btn
          text='소식 바로가기'
          formMode='mode2-r'
          colorMode='mode3'
          arrowMode={true}
        />
      </div>
    </section>
  );
};

export default Section4CategoryList;
