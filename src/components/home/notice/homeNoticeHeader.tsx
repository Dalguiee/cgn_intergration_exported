// 훅
import React from 'react';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const HomeNoticeHeader = () => {
  return (
    <section
      className={`flex w-full max-w-1560 items-center justify-between gap-24 max-lg:px-16`}
    >
      <div
        className={`flex items-center justify-start gap-24 max-lg:overflow-x-scroll`}
      >
        <span className={`text-bold48 text-grey-900 max-lg:hidden`}>
          공지사항
        </span>
        <div
          className={`flex w-fit items-center justify-center gap-8 max-lg:gap-4`}
        ></div>
      </div>
      <div className={`max-lg:hidden`}>
        <StyledButtons
          text='바로가기'
          className='w-112'
          formMode='mode2-r'
          colorMode='mode3'
          arrowMode={true}
        />
      </div>
    </section>
  );
};

export default HomeNoticeHeader;
