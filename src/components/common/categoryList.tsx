import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// 각 데이터를 카테고리로 나누는 버튼 모음입니다.
// 데이터는 목업리스트에서 가져오며 id 값이 일치하는 컨텐츠를 걸러내는 기능을 합니다.
const CategoryList = ({ setSelectedId }) => {
  const location = useLocation();
  const [highlight, setHighlight] = useState(0);

  const tabListData = [
    {
      id: 0,
      path: `/tidings/campaign`,
      tags: [
        { id: 1, type: '진행중' },
        { id: 3, type: '종료' },
      ],
    },
    {
      id: 1,
      path: `/tidings/mission`,
      tags: [
        { id: 6, type: 'CGN' },
        { id: 9, type: '해외지사' },
        { id: 5, type: '선교지' },
        { id: 4, type: '선교사 기도제목' },
        { id: 10, type: '기타' },
      ],
    },
    {
      id: 2,
      path: `/tidings/support`,
      tags: [
        { id: 11, type: '후원' },
        { id: 12, type: '후원영상' },
      ],
    },
  ];

  const tagDataFind = tabListData.filter(item => {
    return item.path.includes(location.pathname);
  });

  if (!tagDataFind) return <></>;
  return (
    <section
      className={`flex w-full flex-wrap items-center justify-center gap-8 max-lg:px-20`}
    >
      <button
        onClick={() => {
          setHighlight(0);
          setSelectedId(0);
        }}
        className={`${highlight === 0 ? 'border-primary-400 text-primary-500' : ''} h-48 w-120 rounded-999 border-1 border-grey-200 text-regular16 text-grey-300`}
      >
        전체
      </button>

      {tagDataFind?.[0]?.tags.map(item => (
        <button
          onClick={() => {
            setHighlight(item.id);
            setSelectedId(item.id);
          }}
          key={item.id}
          className={`${item.id == highlight ? 'border-primary-400 text-primary-500' : ''} h-48 w-120 rounded-999 border-1 border-grey-200 text-regular16 text-grey-300`}
        >
          {item.type}
        </button>
      ))}
    </section>
  );
};

export default CategoryList;
