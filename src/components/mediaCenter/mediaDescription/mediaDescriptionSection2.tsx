// 훅
import React from 'react';

// 컴포넌트
import MediaDescriptionSection2Card from './mediaDescriptionSection2Card';

const MediaDescriptionSection2 = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start pb-120 pt-120 max-lg:pb-60 max-lg:pt-60`}
    >
      <div className={`w-full max-w-1200`}>
        <p
          className={`text-bold32 max-lg:text-bold24 mb-40 w-full text-grey-900 max-lg:mb-24 max-lg:text-center`}
        >
          퐁당(FONDANT) 주요 기능
        </p>
        <div
          className={`flex w-full flex-wrap items-center justify-center gap-20 max-lg:px-16`}
        >
          <MediaDescriptionSection2Card />
        </div>
      </div>
    </section>
  );
};

export default MediaDescriptionSection2;
