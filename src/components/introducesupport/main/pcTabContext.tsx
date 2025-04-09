// 훅
import React from 'react';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const PcTabContext = ({ title = ``, children }) => {
  return (
    <div className={`flex h-451 flex-col items-center justify-start gap-40`}>
      <div>
        <p className={`text-bold48 text-grey-900`}>{title}</p>
      </div>
      <div className={`flex items-start justify-center gap-16`}>
        <StyledButtons
          text={`정기후원`}
          formMode={`mode1`}
          colorMode={`mode1`}
          className={`text-regular18 !h-60 w-110`}
          onClick={() => {
            window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
          }}
        />
        <StyledButtons
          text={`증액후원`}
          formMode={`mode1`}
          colorMode={`mode1`}
          className={`text-regular18 !h-60 w-110`}
          onClick={() => {
            window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
          }}
        />
        <StyledButtons
          text={`일시후원`}
          formMode={`mode1`}
          colorMode={`mode1`}
          className={`text-regular18 !h-60 w-110`}
          onClick={() => {
            window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
          }}
        />
      </div>
      <div
        className={`line-clamp-4 flex flex-col items-center justify-start gap-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default PcTabContext;
