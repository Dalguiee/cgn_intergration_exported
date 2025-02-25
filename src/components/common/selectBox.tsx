// 개발중
// 사용하기 위해선 부모컴포넌트에서 selectData 라는 array 데이터와 [selectedItem, setSelectedItem] state 가 필요합니다
// width 도 props 로 받으며, 기본값은 30px 입니다.

import React, { useEffect, useRef, useState } from 'react';

const SelectBox = ({
  listData = [],
  selectedItem,
  setSelectedItem,
  // placeholder 는 string 으로 받음
  placeholder = '',
  widthFull = false,
  className = '',
}) => {
  // 열고 닫음 상태를 조정하는 boolean 입니다
  const [open, setOpen] = useState(false);
  const selectOpenBox = useRef(null);
  const [objSelected, setObjSelected] = useState(false);

  // 선택된 데이터를 넣는 항목, 페이지 진입시 첫줄 데이터를 placeholder 로 사용합니다
  useEffect(() => {
    setSelectedItem(listData?.[0]);
  }, []);

  // 내부에 스크롤 선택지 맨 위로 올려 보이게 합니다.
  useEffect(() => {
    selectOpenBox?.current.scrollTo(0, 0);
  }, [open]);

  useEffect(() => {});

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className={`relative z-10 flex h-62 cursor-pointer items-center justify-center ${widthFull ? '!w-full' : ''} ${className && className}`}
    >
      <div
        className={`${open ? `h-fit` : 'h-full'} absolute left-0 top-0 flex w-full items-center justify-center rounded-8 bg-white-solid outline outline-1 ${objSelected ? 'outline-primary-500' : 'outline-grey-200'}`}
      >
        <ul
          ref={selectOpenBox}
          data-custom-scroll
          className={`${open ? `h-fit` : 'h-full'} flex w-full flex-col items-start justify-start overflow-y-hidden`}
        >
          <li
            className={`${open ? 'hidden' : 'pointer-events-none flex'} px-12 py-16`}
          >
            <button
              className={`hover:text-bold18 text-regular18 h-full w-full cursor-pointer select-none ${objSelected ? 'text-primary-500' : 'text-grey-400'}`}
            >
              {selectedItem?.text}
            </button>
          </li>

          {listData?.map((item, key) => (
            <li
              key={key}
              className={`${open ? 'h-fit opacity-100' : 'h-0 opacity-0'} w-full hover:bg-primary-50`}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedItem(item);
                  setObjSelected(true);
                }}
                className={`text-regular18 flex h-full w-full items-center justify-start px-12 py-16`}
              >
                <span
                  className={`${selectedItem?.id === item?.id ? 'text-primary-500' : ''}`}
                >
                  {item?.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`absolute right-10 ${open ? 'rotate-180 transform' : ''} transition`}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_under_grey900.svg`}
          alt=''
        />
      </div>
    </div>
  );
};

export default SelectBox;
