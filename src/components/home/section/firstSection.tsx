// 개발중입니다.

// 훅
import React from 'react';

// 컴포넌트
import PaymentBox from '@/components/home/section/paymentBox';

const FirstSection = () => {
  return (
    <>
      <section
        className={`relative flex h-918 w-full items-start justify-center bg-[url('/public/images/bg/main_first_section_bg.png')] bg-cover bg-center bg-no-repeat pt-200`}
      >
        <div className={`w-full max-w-1560 px-16`}>
          <div className={`mb-200 flex flex-col items-start justify-center`}>
            <span className={`text-bold78 text-white-solid`}>
              세상에 없는 가치와
              <br />
              감동을 담다
            </span>
            <span className={`text-regular32 text-grey-50`}>
              CGN이 세상에 없는 가치와 감동을 전합니다.
            </span>
          </div>
        </div>
      </section>
      <div
        className={`top-777 w-full max-w-1560 px-16 lg:absolute lg:left-1/2 lg:translate-x-[-50%]`}
      >
        <PaymentBox />
      </div>
    </>
  );
};

export default FirstSection;
