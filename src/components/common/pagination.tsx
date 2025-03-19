import React, { useState } from 'react';

const Pagination = ({
  listData,
  setListStartNum,
  setListEndNum,
  className = ``,
  bucketNumber = 10,
}) => {
  // 좌우 페이징용 객체 slice 저장용 state 항상 10개 단위로 움직입니다.
  const [pagingCategoryStartNum, setPagingCategoryStartNum] = useState(0);
  const [pagingCategoryEndNum, setPagingCategoryEndNum] = useState(10);
  // 페이지네이션 클릭 하이라이트
  const [highlight, setHighlight] = useState(0);

  // 하단 페이징 숫자 갯수는 10개로 지정하였습니다.
  // next
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
  // prev
  const pagingCategoryIncrement = () => {
    if (pagingCategoryEndNum < Math.ceil(listData?.length / bucketNumber)) {
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
        {/* <span className={`text-regular16 text-grey-400`}>이전</span> */}
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
        {/* 전체 데이터 갯수에서 리스트에 보여줄 갯수만큼 나눈 숫자 */}
        {[...Array(Math.ceil(listData?.length / bucketNumber))]
          // 그리고 그걸 10개들이로 나눕니다
          ?.slice(pagingCategoryStartNum, pagingCategoryEndNum)
          ?.map((_, idx) => (
            <button
              className={`${highlight === pagingCategoryStartNum + idx ? `bg-primary-500` : ``} flex h-40 w-40 items-center justify-center rounded-999`}
              onClick={() => {
                const newPage = pagingCategoryStartNum + idx;
                setListStartNum(newPage * bucketNumber);
                setListEndNum((newPage + 1) * bucketNumber);
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
          className={`${pagingCategoryEndNum < Math.ceil(listData?.length / bucketNumber) ? `` : `pointer-events-none select-none`} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200`}
          onClick={() => {
            pagingCategoryIncrement();
          }}
        >
          <img
            src={`${pagingCategoryEndNum < Math.ceil(listData?.length / bucketNumber) ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey200.svg`} `}
            className={`h-24 w-24`}
            width={24}
            height={24}
            alt=''
          />
        </button>
        {/* <span className={`text-regular16 text-grey-400`}>다음</span> */}
      </div>
    </div>
  );
};

export default Pagination;
