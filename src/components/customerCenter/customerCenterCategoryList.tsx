// 훅
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 데이터
const tabListData = [
  {
    id: 0,
    name: `공지사항`,
    path: `/customercenter/notice`,
  },
  {
    id: 1,
    name: `자주 묻는 질문`,
    path: `/customercenter/questions`,
  },
];

const CustomerCenterCategoryList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      className={`flex w-full flex-col items-start justify-center scrollbar-hide max-lg:overflow-x-scroll max-lg:px-16`}
    >
      <div
        className={`mx-auto flex w-fit items-center justify-center gap-8 max-lg:gap-4`}
      >
        {tabListData?.map((item, idx) => (
          <button
            onClick={() => {
              navigate(item?.path);
            }}
            key={idx}
            className={`bg-white-solid ${location?.pathname?.includes(item?.path) ? 'text-bold16 border-primary-400 text-primary-500' : 'text-regular16'} h-48 min-w-120 text-nowrap rounded-999 border-1 border-grey-200 text-grey-300 max-lg:h-36 max-lg:min-w-96 max-lg:px-12`}
          >
            {item?.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CustomerCenterCategoryList;
