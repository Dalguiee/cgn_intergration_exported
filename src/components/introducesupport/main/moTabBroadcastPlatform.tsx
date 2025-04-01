import React from 'react';

const MoTabBroadcastPlatform = props => {
  const { setSupportTab } = props;

  return (
    <div
      className='relative flex h-820 w-full flex-col items-center justify-center bg-[#E9E7E4] bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/moTabBroadcastPlatform_bg.jpg)`,
        backgroundSize: `auto 100%`,
      }}
    >
      <button
        className='fixed right-16 top-[50%] flex h-40 w-40 items-center justify-center rounded-60 bg-white-solid'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/close.svg`}
          alt=''
          className='h-24 w-24'
        />
      </button>
      <div className='mt-[-90px] flex flex-col items-center'>
        <div className='text-bold32 mb-24'>방송 & 플랫폼 후원</div>
        <div className='mb-60 text-center'>
          <span className='text-regular16'>
            어디서나 모두에게 <span className='text-bold16'>복음</span>을 전하기
            위해
            <br />
            <span className='text-bold16'>
              CGN은 TV방송, OTT플랫폼 ‘퐁당', 유튜브
            </span>
            등
            <br />
            사용자의 편의에 맞춰 다양한 플랫폼으로
            <br />
            콘텐츠를 나눌 수 있습니다.
            <br />
            <span className='text-bold16'>선교지 어디서든 </span>
            복음을 접할 수 있도록
            <br />
            <span className='text-bold16'>방송</span>과{' '}
            <span className='text-bold16'>플랫폼 사역</span>을 위해 후원해주세요
          </span>
        </div>
        <div className='flex gap-4'>
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
            }}
            className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            정기후원
          </button>
          <button
            onClick={() => {
              window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
            }}
            className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            증액후원
          </button>
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
            }}
            className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            일시후원
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoTabBroadcastPlatform;
