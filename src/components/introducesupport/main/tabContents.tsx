import React, { useEffect, useState } from 'react';

const TabContents = props => {
  const { setSupportTab } = props;
  return (
    <div className='relative w-full max-lg:h-820 max-lg:bg-[#E9E7E4]'>
      <button
        className='absolute right-60 top-60 flex h-60 w-60 items-center justify-center rounded-60 bg-white-solid max-lg:right-16 max-lg:top-22 max-lg:h-40 max-lg:w-40'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/close.svg`}
          alt=''
          className='h-24 w-24'
        />
      </button>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
      <div className=''>
        <div className=''>방송 & 플랫폼 후원</div>
        <div className='flex'>
          <button className=''>정기후원</button>
          <button className=''>증액후원</button>
          <button className=''>일시후원</button>
        </div>
        <div className=''>
          <span className=''>어디서나 모두에게 복음 을 전하기 위해</span>
          <span className=''>
            <span className=''>CGN</span>은{' '}
            <span className=''>TV방송, OTT플랫폼 ‘퐁당’ ,유튜브</span> 등
            사용자의 편의에 맞춰
          </span>
          <span className=''>다양한 플랫폼으로 콘텐츠를 나누고 있습니다.</span>
          <span className=''>
            <span className=''>선교지 어디서든</span> 복음을 접할 수 있도록{' '}
            <span className=''>방송</span>과{' '}
            <span className=''>플랫폼 사역</span>을 위해 후원해주세요.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabContents;
