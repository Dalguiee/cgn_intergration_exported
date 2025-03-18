import React from 'react';

const MoTabGlobal = props => {
  const { setSupportTab } = props;
  return (
    <div
      className='relative flex h-820 w-full flex-col items-center justify-center bg-[#E9E7E4] bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/moTabGlobal_bg.jpg)`,
        backgroundSize: `auto 100%`,
      }}
    >
      <button
        className='fixed right-16 top-80 flex h-40 w-40 items-center justify-center rounded-60 bg-white-solid'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/close.svg`}
          alt=''
          className='h-24 w-24'
        />
      </button>
      <div className='mt-[-90px] flex flex-col items-center'>
        <div className='text-bold32 mb-24'>퐁당 글로벌 후원</div>
        <div className='mb-60 text-center'>
          <span className='text-regular16'>
            선교지를 위한 <span className='text-bold16'>‘퐁당 글로벌’</span>
            은 실시간 라이브 채널 시청,
            <br />
            해외지사의{' '}
            <span className='text-bold16'>
              다국어 콘텐츠, 실시간 번역 자막 등 언어권별
            </span>
            로<br />
            필요한 콘텐츠를 활용하실 수 있도록 서비스 하고 있습니다.
            <br />
            <span className='text-bold16'>더 많은 언어</span>로{' '}
            <span className='text-bold16'>복음이 전해질 수 있도록</span>
            <br />
            글로벌 콘텐츠 제작과 운영을 위해 후원해주세요.
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

export default MoTabGlobal;
