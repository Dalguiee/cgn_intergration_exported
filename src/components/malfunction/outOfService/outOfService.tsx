import StyledButtons from '@/components/common/styledButtons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OutOfService = () => {
  const navigate = useNavigate();

  return (
    <section
      className={`flex w-full flex-col items-center justify-start py-160`}
    >
      <div
        className={`flex w-full max-w-600 flex-col items-center justify-start gap-24 px-24 max-lg:gap-20`}
      >
        <img
          className={`h-100 w-100 object-cover max-lg:h-60 max-lg:w-60`}
          src={`/public/images/logo/outofservice.png`}
          width={100}
          height={100}
          alt=''
        />
        <div className={`w-full pb-40 text-center`}>
          <p className={`text-bold32 max-lg:text-bold24 mb-16 text-grey-900`}>
            죄송합니다. <br className={`lg:hidden`} />
            해당 페이지를 찾을 수 없습니다.
          </p>
          <p className={`text-regular18 max-lg:text-regular16 text-grey-500`}>
            존재하지 않는 주소를 입력하셨거나 요청하신 <br />
            페이지의 주소가 변경/삭제되어 찾을 수 없습니다. <br />
            주소를 다시 확인해 주세요.
          </p>
        </div>
        <div className={`flex h-64 w-full items-center justify-center gap-8`}>
          <StyledButtons
            text={`이전으로 가기`}
            className={`w-full max-w-176 max-lg:max-w-[unset]`}
            formMode={`mode1`}
            colorMode={`mode3`}
            onClick={() => {
              navigate(-1);
            }}
          />
          <StyledButtons
            text={`홈으로 가기`}
            className={`w-full max-w-300 max-lg:max-w-[unset]`}
            formMode={`mode1`}
            colorMode={`mode1`}
            onClick={() => {
              navigate(`/home`);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OutOfService;
