// 훅
import React from 'react';

// 컴포넌트
import PcTabContext from '@/components/introducesupport/main/pcTabContext';

const PcTabBroadcastPlatform = props => {
  const { setSupportTab } = props;

  return (
    <div
      className='absolute left-0 top-0 z-10 flex aspect-[2100_/_960] h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pcTabBroadcastPlatform_bg.jpg)`,
      }}
    >
      <PcTabContext title={`방송 & 플랫폼 후원`}>
        <p className={`text-regular24 text-grey-900`}>
          어디서나 모두에게 <span className={`text-bold24`}>복음</span>을 전하기
          위해
        </p>
        <p className={`text-regular24 text-grey-900`}>
          <span className={`text-bold24`}>CGN TV</span>방송, 은{' '}
          <span className={`text-bold24`}>OTT플랫폼 '퐁당', 유튜브</span> 등
          사용자의 편의에 맞춰
        </p>
        <p className={`text-regular24 text-grey-900`}>
          다양한 플랫폼으로 콘텐츠를 나누고 있습니다.
        </p>
        <p className={`text-regular24 text-grey-900`}>
          <span className={`text-bold24`}>선교지 어디서든</span> 복음을 접할 수
          있도록 <span className={`text-bold24`}>방송</span>과{' '}
          <span className={`text-bold24`}>플랫폼 사역</span>을 위해
          후원해주세요.
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

export default PcTabBroadcastPlatform;
