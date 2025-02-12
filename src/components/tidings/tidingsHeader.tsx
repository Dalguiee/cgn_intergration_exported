import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const pageData = [
  {
    pageName: 'tidings',
    title: '캠페인 / 이벤트',
    subTitle: 'CGN의 캠페인/이벤트를 확인해 보세요.',
  },
  {
    pageName: 'tidingsStory',
    title: 'ddddd',
    subTitle: 'ffff',
  },
  {
    pageName: 'tidingsSupport',
    title: 'zzzzz',
    subTitle: 'qqqqq',
  },
];

const TidingsHeader = () => {
  return (
    <section className={`flex w-full flex-col items-center justify-center`}>
      <div className='text_section flex flex-col items-center justify-center gap-16'>
        <h1 className={`text-bold48 text-grey-900`}>캠페인 / 이벤트</h1>
        <span className={`text-regular18 text-grey-400`}>
          CGN의 캠페인/이벤트를 확인해 보세요.
        </span>
      </div>
      <div className={`flex items-center justify-center`}></div>
    </section>
  );
};

export default TidingsHeader;
