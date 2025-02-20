// 커스텀 select 입니다. 사용하기 위해선 부모컴포넌트에서 selectData 라는 array 데이터와 [selectedItem, setSelectedItem] state 가 필요합니다
// width 도 props 로 받으며, 기본값은 30px 입니다.

import React, { useEffect, useRef, useState } from 'react';

const SelectBox = ({
  listData,
  selectedItem,
  setSelectedItem,
  width = '30',
}) => {
  // 열고 닫음 상태를 조정하는 boolean 입니다
  const [open, setOpen] = useState(false);
  const selectOpenBox = useRef(null);

  // 선택된 데이터를 넣는 항목, 페이지 진입시 첫줄 데이터를 placeholder 로 사용합니다
  useEffect(() => {
    setSelectedItem(listData?.[0]);
  }, []);

  // 내부에 스크롤 선택지 맨 위로 올려 보이게 합니다.
  useEffect(() => {
    selectOpenBox?.current.scrollTo(0, 0);
  }, [open]);

  return (
    <div
      style={{ width: `${width}px` }}
      className={`${width === '30' ? `w-30` : ``} ${open ? '' : ''} relative z-10 flex h-62 items-center justify-center`}
    >
      <div
        ref={selectOpenBox}
        data-custom-scroll
        style={{ transition: `0.8s` }}
        className={`${open ? 'h-300 overflow-y-scroll' : 'h-62 overflow-y-hidden'} absolute left-0 top-0 flex w-full flex-col items-start justify-start gap-12 rounded-8 bg-white-solid py-18 pl-12 outline outline-1 outline-grey-200 transition-all`}
      >
        <div className={`${open ? 'hidden' : 'pointer-events-none flex'}`}>
          <button
            className={`hover:text-bold18 text-regular18 cursor-pointer text-grey-400`}
          >
            {selectedItem?.text}
          </button>
        </div>

        {listData?.map((item, key) => (
          <div
            key={key}
            style={{ transition: `0.8s` }}
            className={`${open ? 'h-28 opacity-100' : 'h-0 opacity-0'}`}
          >
            <button
              onClick={() => {
                setOpen(false);
                setSelectedItem(item);
              }}
              className={`hover:text-bold18 text-regular18 cursor-pointer`}
            >
              {item?.text}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={`absolute right-10 ${open ? 'rotate-180 transform' : ''} transition`}
      >
        <img src='/public/images/icon/arrow_under_grey900.svg' alt='' />
      </button>
    </div>
  );
};

export default SelectBox;
