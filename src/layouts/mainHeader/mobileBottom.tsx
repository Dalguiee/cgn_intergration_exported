import React from 'react';

const MobileBottom = ({ burger }) => {
  return (
    <section
      className={`flex items-center justify-center ${burger ? '' : 'hidden'} h-64 w-full gap-12`}
    >
      <button
        className={`border-white-so flex h-40 w-174 items-center justify-center rounded-4 border-1 text-bold14 text-white-solid`}
      >
        퐁당
      </button>
      <button
        className={`flex h-40 w-174 items-center justify-center rounded-4 bg-white-solid text-bold14 text-grey-900`}
      >
        나의 후원 보기
      </button>
    </section>
  );
};

export default MobileBottom;
