import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TabBroadcastPlatform = props => {
  const { setSupportTab } = props;

  return (
    <div
      className='relative flex w-full flex-col items-center justify-center bg-no-repeat max-lg:h-820 max-lg:bg-[#E9E7E4]'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_main_bg_tab.jpg)`,
      }}
    >
      <button
        className='fixed right-60 top-60 flex h-60 w-60 items-center justify-center rounded-60 bg-white-solid max-lg:right-16 max-lg:top-80 max-lg:h-40 max-lg:w-40'
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
      <div className='flex flex-col items-center'>
        <div className='text-bold48 max-lg:text-bold32 mb-40 max-lg:mb-24'>
          방송 & 플랫폼 후원
        </div>
        <div className='text-center max-lg:mb-60'>
          <span className='text-regular16'>
            어디서나 모두에게 <span className='text-bold16'>복음</span>을 전하기
            위해
            <br />
            <span className='text-bold16'>
              CGN은 TV방송, OTT플랫폼 ‘퐁당', 유튜브
            </span>{' '}
            등
            <br />
            사용자의 편의에 맞춰 다양한 플랫폼으로
            <br />
            콘텐츠를 나눌 수 있습니다.
            <br />
            <span className='text-bold16'>선교지 어디서든</span>
            복음을 접할 수 있도록
            <br />
            <span className='text-bold16'>방송</span>과{' '}
            <span className='text-bold16'>플랫폼 사역</span>을 위해 후원해주세요
          </span>
        </div>
        <div className='hidden gap-4 max-lg:flex'>
          <button className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
            정기후원
          </button>
          <button className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
            증액후원
          </button>
          <button className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
            일시후원
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabBroadcastPlatform;
