import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 상단에 카테고리로 나뉘는 버튼 모음입니다.
// 데이터는 목업파일의 리스트에서 가져오며 id 값이 일치하는 컨텐츠를 걸러내는 기능을 합니다.
const TabBtn = ({ category, setData, mockData }) => {
  const [highlight, setHighlight] = useState(0);
  const [defaultMock, setDefaultMock] = useState();

  const location = useLocation();

  useEffect(() => {
    setDefaultMock(mockData);
  }, [mockData, location]);

  const filtering = selectedItem => {
    setHighlight(selectedItem.id);
    setData(
      mockData.filter(item => {
        return item.tag.some(obj => obj.id === selectedItem.id);
      })
    );
  };

  const paramsSearch = new URLSearchParams(location.search);
  const paramsData = Object.fromEntries(paramsSearch);

  if (category === '') return <></>;
  return (
    <section
      className={`flex w-full flex-wrap items-center justify-center gap-8 max-md:px-20`}
    >
      <button
        onClick={() => {
          setHighlight(0);
          setData(defaultMock ? defaultMock : mockData);
        }}
        className={`${highlight === 0 ? 'border-primary-400 text-primary-500' : ''} text-regular16 h-48 w-120 rounded-999 border-1 border-grey-200 text-grey-300`}
      >
        전체
      </button>

      {category.map(item => (
        <button
          onClick={() => {
            filtering(item);
          }}
          key={item.id}
          className={`${item.id == highlight ? 'border-primary-400 text-primary-500' : ''} text-regular16 h-48 w-120 rounded-999 border-1 border-grey-200 text-grey-300`}
        >
          {item.type}
        </button>
      ))}
    </section>
  );
};

export default TabBtn;
