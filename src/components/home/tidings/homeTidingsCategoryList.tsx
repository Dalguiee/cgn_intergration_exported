// 훅
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';
import StyledButtons from '@/components/common/styledButtons';

const HomeCategoryList = ({ setSelectedCategoryArticleId }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
      className={`flex w-full max-w-1560 items-center justify-between gap-24 overflow-visible max-lg:mb-24`}
    >
      <span className={`text-bold48 flex-shrink-0 text-grey-900 max-lg:hidden`}>
        소식
      </span>

      <div
        className={`flex w-full items-center justify-start gap-8 overflow-x-scroll scrollbar-hide max-lg:gap-4 max-lg:px-16`}
      >
        {categoryTags?.map(item => (
          <button
            onClick={() => {
              setHighlight(item?.id);
              setSelectedCategoryArticleId(item?.id);
            }}
            key={item?.id}
            className={`${item?.id === 1 ? `hidden` : ``} flex-shrink-0 px-24 max-lg:px-18 ${item?.id == highlight ? 'text-bold16 border-primary-400 text-primary-500' : 'text-regular16'} max-lg:text-regular14 h-48 min-w-120 whitespace-nowrap rounded-999 border-1 border-grey-200 bg-white-solid text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
          >
            {item?.type}
          </button>
        ))}
      </div>
      <div className={`max-lg:hidden`}>
        <StyledButtons
          text='소식 바로가기'
          formMode='mode2-r'
          colorMode='mode3'
          className='w-139'
          arrowMode={true}
          onClick={() => {
            sessionStorage.setItem('scrollY', window.scrollY.toString());
            navigate(`/news/story`);
          }}
        />
      </div>
    </section>
  );
};

export default HomeCategoryList;
