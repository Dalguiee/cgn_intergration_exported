import React, { useState } from 'react';

const Pagination = ({
  listData,
  setListStartNum,
  setListEndNum,
  className = ``,
}) => {
  // 좌우 페이징용 state
  const [pagingCategoryStartNum, setPagingCategoryStartNum] = useState(0);
  const [pagingCategoryEndNum, setPagingCategoryEndNum] = useState(10);
  // 페이지네이션 클릭 하이라이트
  const [highlight, setHighlight] = useState(0);

  const pagingCategoryDecrement = () => {
    if (pagingCategoryStartNum > 0) {
      setPagingCategoryStartNum(item => {
        return item - 10;
      });
      setPagingCategoryEndNum(item => {
        return item - 10;
      });
    }
  };

  const pagingCategoryIncrement = () => {
    if (pagingCategoryEndNum < Math.ceil(listData?.length / 10)) {
      setPagingCategoryStartNum(item => {
        return item + 10;
      });
      setPagingCategoryEndNum(item => {
        return item + 10;
      });
    }
  };

  return (
    <div
      className={`flex items-center justify-center gap-12 ${className && className}`}
    >
      <div className={`flex items-center justify-center gap-14`}>
        <span className={`text-regular16 text-grey-400`}>이전</span>
        <button
          className={`${pagingCategoryStartNum > 0 ? `` : `pointer-events-none select-none`} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200`}
          onClick={() => {
            pagingCategoryDecrement();
          }}
        >
          <img
            src={`${pagingCategoryStartNum > 0 ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey200.svg`} `}
            className={`h-24 w-24`}
            width={24}
            height={24}
            alt=''
          />
        </button>
      </div>

      <div className={`flex items-center justify-center gap-8`}>
        {[...Array(Math.ceil(listData?.length / 10))]
          ?.slice(pagingCategoryStartNum, pagingCategoryEndNum)
          ?.map((_, idx) => (
            <button
              className={`${highlight === pagingCategoryStartNum + idx ? `bg-primary-500` : ``} flex h-40 w-40 items-center justify-center rounded-999`}
              onClick={() => {
                const newPage = pagingCategoryStartNum + idx;
                setListStartNum(newPage * 10);
                setListEndNum((newPage + 1) * 10);
                setHighlight(newPage);
              }}
            >
              <span
                className={`${highlight === pagingCategoryStartNum + idx ? `text-white-solid` : `text-grey-500`} text-regular16`}
              >
                {pagingCategoryStartNum + idx + 1}
              </span>
            </button>
          ))}
      </div>

      <div className={`flex items-center justify-center gap-14`}>
        <button
          className={`${pagingCategoryEndNum < Math.ceil(listData?.length / 10) ? `` : `pointer-events-none select-none`} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200`}
          onClick={() => {
            pagingCategoryIncrement();
          }}
        >
          <img
            src={`${pagingCategoryEndNum < Math.ceil(listData?.length / 10) ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey200.svg`} `}
            className={`h-24 w-24`}
            width={24}
            height={24}
            alt=''
          />
        </button>
        <span className={`text-regular16 text-grey-400`}>다음</span>
      </div>
    </div>
  );
};

export default Pagination;
