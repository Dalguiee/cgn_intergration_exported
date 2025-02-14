import Locator from '@/layouts/locator';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TidingsHeader = () => {
  return (
    <>
      <Locator />
      <section
        className={`flex h-216 w-full flex-col items-center justify-center pb-32 pt-80 max-md:px-20`}
      >
        <div className='text_section flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 text-grey-900`}>캠페인 / 이벤트</h1>
          <span className={`text-regular18 text-grey-400`}>
            CGN의 캠페인/이벤트를 확인해 보세요.
          </span>
        </div>
        <div className={`flex items-center justify-center`}></div>
      </section>
    </>
  );
};

export default TidingsHeader;
