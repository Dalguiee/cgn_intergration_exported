// 훅
import React from 'react';

// 컴포넌트
import PcTabContext from '@/components/introducesupport/main/pcTabContext';

const PcTabGlobal = props => {
  const { setSupportTab } = props;
  return (
    <div
      className='absolute left-0 top-0 z-10 flex aspect-[2100_/_960] h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pcTabContents_bg.jpg)`,
      }}
    >
      <PcTabContext title={`퐁당 글로벌 후원`}>
        <p className={`text-regular24 text-grey-900`}>
          선교지를 위한<span className={`text-bold24`}>‘퐁당 글로벌’</span> 은
          실시간 라이브 채널 시청, 해외지사의
        </p>
        <p className={`text-regular24 text-grey-900`}>
          <span className={`text-bold24`}>
            다국어 콘텐츠, 실시간 번역 자막 등 언어권별
          </span>
          로
        </p>
        <p className={`text-regular24 text-grey-900`}>
          필요한 콘텐츠를 활용하실 수 있도록 서비스하고 있습니다.
        </p>
        <p className={`text-regular24 text-grey-900`}>
          <span className={`text-bold24`}>더 많은 언어</span>로{' '}
          <span className={`text-bold24`}>복음이 전해질 수 있도록</span>
        </p>
        <p className={`text-regular24 text-grey-900`}>
          글로벌 콘텐츠 제작과 운영을 위해 후원해주세요.
        </p>
      </PcTabContext>

      <button
        className='fixed right-80 top-60 flex h-60 w-60 items-center justify-center rounded-60 bg-white-solid'
        onClick={() => setSupportTab(null)}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/close.svg`}
          alt=''
          className='h-32 w-32'
        />
      </button>
    </div>
  );
};

export default PcTabGlobal;
