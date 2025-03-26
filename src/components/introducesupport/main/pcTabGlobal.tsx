import React from 'react';

const PcTabGlobal = props => {
  const { setSupportTab } = props;
  return (
    <div
      className='absolute z-10 flex aspect-[2100_/_960] w-full flex-col items-center justify-center bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pcTabGlobal_bg.jpg)`,
        backgroundSize: `100% auto`,
      }}
    >
      <button
        className='fixed right-16 top-160 flex h-60 w-60 items-center justify-center rounded-60 bg-white-solid'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/close.svg`}
          alt=''
          className='h-32 w-32'
        />
      </button>
      <button
        onClick={() => {
          window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
        }}
        className='absolute left-[40.5%] top-[33.6%] aspect-[110_/_60] w-[5.8%] text-[0]'
      >
        정기후원
      </button>
      <button
        onClick={() => {
          window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
        }}
        className='absolute left-[47.1%] top-[33.6%] aspect-[110_/_60] w-[5.8%] text-[0]'
      >
        증액후원
      </button>
      <button
        onClick={() => {
          window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
        }}
        className='absolute left-[53.7%] top-[33.6%] aspect-[110_/_60] w-[5.8%] text-[0]'
      >
        일시후원
      </button>
    </div>
  );
};

export default PcTabGlobal;
