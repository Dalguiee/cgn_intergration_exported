import React from 'react';

const MoTabContents = props => {
  const { setSupportTab } = props;
  return (
    <div
      className='relative flex h-820 w-full flex-col items-center justify-center bg-[#E9E7E4] bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/moTabContents_bg.jpg)`,
        backgroundSize: `auto 100%`,
      }}
    >
      <button
        className='fixed right-16 top-80 flex h-40 w-40 items-center justify-center rounded-60 bg-white-solid'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/close.svg`}
          alt=''
          className='h-24 w-24'
        />
      </button>
      <div className='mt-[-90px] flex flex-col items-center'>
        <div className='text-bold32 mb-24'>콘텐츠 제작 후원</div>
        <div className='mb-60 text-center'>
          <span className='text-regular16'>
            <span className='text-bold16'>말씀, 세미나 콘텐츠</span> 부터
            다큐멘터리, 간증, 찬양, 믿음의
            <br />
            다음세대를 위한 어린이 콘텐츠까지{' '}
            <span className='text-bold16'>오직 복음의 진리만을</span>
            <br />
            <span className='text-bold16'>담은 건강하고 감동적인 콘텐츠</span>를
            제작하고 있습니다.
            <br />
            콘텐츠 범람의 시대, 더욱 창의적인 콘텐츠로
            <br />
            복음을 효과적으로 전할 수 있도록 후원으로 함께해주세요.
          </span>
        </div>
        <div className='flex gap-4'>
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

export default MoTabContents;
