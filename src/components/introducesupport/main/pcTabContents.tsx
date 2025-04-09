// 훅
import React from 'react';

// 컴포넌트
import PcTabContext from '@/components/introducesupport/main/pcTabContext';

const PcTabContents = props => {
  const { setSupportTab } = props;
  return (
    <div
      className='absolute left-0 top-0 z-10 flex aspect-[2100_/_960] h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pcTabContents_bg.jpg)`,
      }}
    >
      <PcTabContext title={`콘텐츠 제작 후원`}>
        <p className={`text-regular24 text-grey-900`}>
          <span className={`text-bold24`}>말씀, 세미나 콘텐츠</span>부터
          다큐멘터리, 간증, 찬양, 믿음의 다음세대를 위한
        </p>
        <p className={`text-regular24 text-grey-900`}>
          어린이 콘텐츠까지{` `}
          <span className={`text-bold24`}>
            오직 복음의 진리만을 담은 건강하고 감동적인 콘텐츠
          </span>
          를
        </p>
        <p className={`text-regular24 text-grey-900`}>
          제작하고 있습니다. 콘텐츠 범람의 시대, 더욱 창의적인 콘텐츠로
        </p>
        <p className={`text-regular24 text-grey-900`}>
          복음을 효과적으로 전할 수 있도록 후원으로 함께해주세요.
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

export default PcTabContents;
