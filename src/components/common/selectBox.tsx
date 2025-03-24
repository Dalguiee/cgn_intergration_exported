// props 로 받는 listData 로써 array 데이터수급, [selectedItem, setSelectedItem] state 필요.

import React, { useEffect, useRef, useState } from 'react';

const SelectBox = ({
  listData = [],
  selectedItem,
  setSelectedItem,
  defaultValue = '',
  widthFull = false,
  upMode = false,
  className = '',
  height = '',
}) => {
  // 열고 닫음 상태를 조정하는 boolean 입니다
  const [open, setOpen] = useState(false);
  const selectOpenBox = useRef(null);

  // 선택된 데이터를 넣는 항목, 페이지 진입시 첫줄 데이터를 placeholder 로 사용합니다
  useEffect(() => {
    if (!defaultValue) {
      setSelectedItem(listData?.[0]);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // 내부에 스크롤 선택지 맨 위로 올려 보이게 합니다.
  useEffect(() => {
    if (upMode) {
      selectOpenBox?.current.scrollTo(999, 0);
    } else {
      selectOpenBox?.current.scrollTo(0, 0);
    }
  }, [open]);

  //외부 클릭 감지 시 setOpen(false)
  const handleClickOutside = event => {
    if (
      selectOpenBox.current &&
      !selectOpenBox.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className={`relative z-10 flex cursor-pointer items-center justify-center max-lg:h-48 ${widthFull ? '!w-full' : ''} ${className && className} ${height ? `h-${height}` : 'h-62'}`}
    >
      <div
        className={`${open ? `h-fit` : 'h-full'} absolute left-0 overflow-hidden ${upMode ? `bottom-0` : `top-0`} flex w-full items-center justify-center rounded-8 bg-white-solid outline outline-1 outline-offset-[-1px] outline-grey-200 max-lg:rounded-4`}
      >
        <ul
          ref={selectOpenBox}
          className={`${open ? `h-fit` : 'h-full'} flex w-full ${upMode ? `flex-col-reverse` : `flex-col`} items-start justify-start overflow-y-hidden`}
        >
          <li
            className={`${open ? '' : ''} pointer-events-none flex w-full items-center justify-start rounded-8 border-1 border-grey-200 px-12 max-lg:h-48 max-lg:rounded-4 ${height ? `h-${height}` : 'h-62'}`}
          >
            <button
              className={`hover:text-bold18 max-lg:text-bold14 text-regular18 max-lg:text-regular14 flex h-full w-full cursor-pointer select-none items-center justify-start text-grey-900`}
            >
              {selectedItem?.text ? selectedItem?.text : defaultValue}
            </button>
          </li>
          <li className='max-h-310 w-full overflow-auto' data-custom-scroll>
            {listData?.map((item, key) => (
              <div
                key={key}
                className={`${open ? '' : 'hidden h-0'} ${height ? `h-${height}` : 'h-62'} flex w-full select-none items-center justify-start max-lg:h-48`}
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    setSelectedItem(item);
                  }}
                  className={`text-regular18 max-lg:text-regular14 max-lg:text-regular14 flex h-full w-full items-center justify-start px-12 hover:bg-primary-50`}
                >
                  <span
                  // className={`${selectedItem?.id === item?.id ? 'text-primary-500' : ''}`}
                  >
                    {item?.text}
                  </span>
                </button>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div
        className={`pointer-events-none absolute right-10 select-none ${open ? 'rotate-180 transform' : ''} transition`}
      >
        <img
          src={`${upMode ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_up_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_under_grey900.svg`} `}
          alt=''
        />
      </div>
    </div>
  );
};

export default SelectBox;
