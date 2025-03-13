import React from 'react';

const MoBottomHeader = () => {
  return (
    <section className={`flex h-64 w-full items-center justify-center gap-12`}>
      <button
        onClick={() => {
          window.open(`https://www.fondant.kr/`, `_blank`);
        }}
        className={`border-white-so text-bold14 flex h-40 w-174 items-center justify-center rounded-4 border-1 text-white-solid`}
      >
        퐁당
      </button>
      <button
        className={`text-bold14 flex h-40 w-174 items-center justify-center rounded-4 bg-white-solid text-grey-900`}
      >
        나의 후원 보기
      </button>
    </section>
  );
};

export default MoBottomHeader;
