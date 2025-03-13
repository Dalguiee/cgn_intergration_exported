// 훅
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// 각 데이터를 카테고리로 나누는 버튼 모음입니다.
// 데이터는 목업리스트에서 가져오며 id 값이 일치하는 컨텐츠를 걸러내는 기능을 합니다.
const CategoryList = ({
  selectedCategoryArticleId,
  setSelectedCategoryArticleId,
}) => {
  const location = useLocation();
  /* 클릭시 태그버튼의 색이 변하게 하는 state 값 저장 */
  const [categoryTags, setCategoryTags] = useState([]);
  const scrollContainer = useRef();
  const scrollObjects = useRef([]);
  const tabListData = [
    {
      id: 0,
      path: `/introduce/organization`,
      tags: [
        { id: 0, type: '이사장 인사' },
        { id: 1, type: '대표 인사' },
        { id: 2, type: '섬기는 분들' },
        { id: 3, type: '연혁' },
        { id: 4, type: '오시는 길' },
      ],
    },
    {
      id: 1,
      path: `/tidings/campaign`,
      tags: [
        { id: 1, type: '진행중' },
        { id: 3, type: '종료' },
      ],
    },
    {
      id: 2,
      path: `/tidings/mission`,
      tags: [
        { id: 14, type: 'CGN 소식' },
        { id: 9, type: '해외지사' },
        { id: 5, type: '선교지' },
        { id: 4, type: '선교사 기도제목' },
        { id: 10, type: '기타' },
      ],
    },
    {
      id: 3,
      path: `/tidings/support`,
      tags: [
        { id: 11, type: '후원' },
        { id: 12, type: '후원영상' },
      ],
    },
    {
      id: 4,
      path: `/introduce/worldwide`,
      tags: [
        { id: 0, type: '한국' },
        { id: 1, type: '미주' },
        { id: 2, type: '일본' },
        { id: 3, type: '대만' },
        { id: 4, type: '태국' },
        { id: 5, type: '인도네시아' },
        { id: 6, type: '프랑스' },
      ],
    },
    {
      id: 3,
      path: `/policy/`,
      tags: [
        { id: 0, type: '후원' },
        { id: 1, type: '후원영상' },
      ],
    },
  ];

  // 태그 데이터 정리
  useEffect(() => {
    if (location.pathname) {
      const tagDataFind = tabListData.filter(item => {
        return location?.pathname?.includes(item?.path);
      });
      const totalTag = {
        id: 0,
        type: '전체',
      };
      if (location?.pathname?.includes(`/tidings/`)) {
        setCategoryTags([totalTag, ...tagDataFind?.[0]?.tags]);
      } else {
        setCategoryTags([...tagDataFind?.[0]?.tags]);
      }
    }
  }, [location?.pathname]);

  return (
    <section
      ref={scrollContainer}
      className={`flex w-full flex-col items-start justify-center scrollbar-hide max-lg:overflow-x-scroll max-lg:px-16`}
    >
      <div
        className={`mx-auto flex w-fit items-center justify-center gap-8 max-lg:gap-4`}
      >
        {categoryTags?.map((item, idx) => (
          <button
            ref={el => (scrollObjects.current[idx] = el)}
            onClick={() => {
              setSelectedCategoryArticleId(item?.id);
              console.log(scrollObjects?.current[idx].offsetLeft);
              scrollObjects?.current[idx]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              });
            }}
            key={item?.id}
            className={`bg-white-solid ${item?.id == selectedCategoryArticleId ? 'text-bold16 max-lg:text-bold14 border-primary-400 text-primary-500' : 'text-regular16 max-lg:text-regular14'} h-48 min-w-120 text-nowrap rounded-999 border-1 border-grey-200 text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
          >
            {item?.type}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
