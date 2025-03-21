// 훅
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

const HomeCategoryList = ({
  selectedCategoryArticleId,
  setSelectedCategoryArticleId,
}) => {
  const location = useLocation();
  const [categoryTags, setCategoryTags] = useState([]);

  // 좌우 자동스크롤 위한 ref
  const scrollContainer = useRef();
  const scrollObjects = useRef([]);

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
      className={`flex w-full max-w-1560 items-center justify-between gap-24 overflow-visible max-lg:mb-24`}
    >
      <div
        ref={scrollContainer}
        className={`flex w-full items-center justify-start gap-8 overflow-x-scroll scrollbar-hide max-lg:gap-4 max-lg:px-16`}
      >
        {categoryTags?.map((item, idx) => (
          <button
            ref={el => (scrollObjects.current[idx] = el)}
            onClick={() => {
              setSelectedCategoryArticleId(item?.id);
              const objLeft = scrollObjects?.current[idx].offsetLeft;
              scrollContainer?.current?.scrollTo({
                behavior: 'smooth',
                left: objLeft - 16,
              });
            }}
            key={item?.id}
            className={`${item?.id === 1 ? `hidden` : ``} flex-shrink-0 px-24 max-lg:px-18 ${item?.id == selectedCategoryArticleId ? 'text-bold16 border-primary-400 text-primary-500' : 'text-regular16'} max-lg:text-regular14 h-48 min-w-120 whitespace-nowrap rounded-999 border-1 border-grey-200 bg-white-solid text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
          >
            {item?.type}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeCategoryList;
