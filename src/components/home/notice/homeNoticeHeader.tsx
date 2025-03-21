// 훅
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const HomeNoticeHeader = () => {
  const navigate = useNavigate();
  return (
    <section
      className={`flex w-full max-w-1560 items-center justify-between gap-24 max-lg:mb-16 max-lg:px-16`}
    >
      <div
        className={`flex items-center justify-start gap-24 scrollbar-hide max-lg:overflow-x-scroll`}
      >
        <span className={`text-bold48 max-lg:text-bold24 text-grey-900`}>
          공지사항
        </span>
        {/* <div
          className={`flex w-fit items-center justify-center gap-8 max-lg:gap-4`}
        ></div> */}
      </div>
      <div>
        <StyledButtons
          text='바로가기'
          className='w-116 max-lg:w-fit max-lg:!gap-0 max-lg:border-none max-lg:px-0'
          formMode='mode2-r'
          colorMode='mode3'
          arrowMode={true}
          onClick={() => {
            sessionStorage.setItem('scrollY', window.scrollY.toString());
            navigate(`/customer/notice`);
          }}
        />
      </div>
    </section>
  );
};

export default HomeNoticeHeader;
