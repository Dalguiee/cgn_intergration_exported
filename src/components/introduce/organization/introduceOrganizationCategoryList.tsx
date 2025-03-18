// 훅
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 각 데이터를 카테고리로 나누는 버튼 모음입니다.
// 데이터는 목업리스트에서 가져오며 id 값이 일치하는 컨텐츠를 걸러내는 기능을 합니다.
const IntroduceOrganizationCategoryList = ({}) => {
  const { subDepth } = useParams();
  const navigate = useNavigate();
  /* 클릭시 태그버튼의 색이 변하게 하는 state 값 저장 */
  const scrollContainer = useRef();
  const scrollObjects = useRef([]);
  const tabListData = [
    {
      id: 0,
      params: `chairman`,
      link: `/about/organization/chairman`,
      type: '이사장 인사',
    },
    {
      id: 1,
      params: `ceo`,
      link: '/about/organization/ceo',
      type: '대표 인사',
    },
    {
      id: 2,
      params: `people`,
      link: '/about/organization/people',
      type: '섬기는 분들',
    },
    {
      id: 3,
      params: `history`,
      link: '/about/organization/history',
      type: '연혁',
    },
    {
      id: 4,
      params: `location`,
      link: '/about/organization/location',
      type: '오시는 길',
    },
  ];

  return (
    <section
      ref={scrollContainer}
      className={`flex w-full flex-col items-start justify-center scrollbar-hide max-lg:overflow-x-scroll max-lg:px-16`}
    >
      <div
        className={`mx-auto flex w-fit items-center justify-center gap-8 max-lg:gap-4`}
      >
        {tabListData?.map((item, idx) => (
          <button
            ref={el => (scrollObjects.current[idx] = el)}
            onClick={() => {
              navigate(item?.link);
              const objLeft = scrollObjects?.current[idx].offsetLeft;
              scrollContainer?.current?.scrollTo({
                behavior: 'smooth',
                left: objLeft - 16,
              });
            }}
            key={item?.id}
            className={`bg-white-solid ${item?.params == subDepth ? 'text-bold16 max-lg:text-bold14 border-primary-400 text-primary-500' : 'text-regular16 max-lg:text-regular14'} h-48 min-w-120 text-nowrap rounded-999 border-1 border-grey-200 text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
          >
            {item?.type}
          </button>
        ))}
      </div>
    </section>
  );
};

export default IntroduceOrganizationCategoryList;
