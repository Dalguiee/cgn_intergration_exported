// 훅
import React from 'react';

// 컴포넌트
import MediaDescriptionCard from './mediaDescriptionCard';

const MediaDescriptionSection2 = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start pb-120 pt-120`}
    >
      <div className={`w-full max-w-1200`}>
        <p className={`text-bold32 mb-40 text-grey-900`}>
          퐁당(FONDANT) 주요 기능
        </p>
        <div
          className={`flex w-full flex-wrap items-center justify-center gap-20`}
        >
          <MediaDescriptionCard />
        </div>
      </div>
    </section>
  );
};

export default MediaDescriptionSection2;
