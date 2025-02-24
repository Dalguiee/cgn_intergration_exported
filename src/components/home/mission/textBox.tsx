import React from 'react';

const TextBox = () => {
  return (
    <div className='flex h-396 w-440 flex-col items-start justify-center gap-24 pl-40 max-lg:h-338 max-lg:gap-16'>
      <h2
        className={`text-bold48 max-lg:text-bold24 text-grey-900 max-lg:mb-18`}
      >
        선교 미디어 CGN
      </h2>
      <div
        className={`flex flex-col items-start justify-center gap-8 max-lg:gap-4`}
      >
        <p className={`text-bold24 max-lg:text-bold18 text-primary-500`}>
          Christian
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          다양한 플랫폼과 콘텐츠를 통해
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          24시간 ‘순수복음’을 전합니다
        </p>
      </div>
      <div
        className={`flex flex-col items-start justify-center gap-8 max-lg:gap-4`}
      >
        <p className={`text-bold24 max-lg:text-bold18 text-primary-500`}>
          Global
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          6개 해외지사, 현지 맞춤 콘텐츠, 글로벌 서비스로
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          ‘어디서나 모두에게’ 다가갑니다
        </p>
      </div>
      <div
        className={`flex flex-col items-start justify-center gap-8 max-lg:gap-4`}
      >
        <p className={`text-bold24 max-lg:text-bold18 text-primary-500`}>
          Network
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          후원자, 교회, 선교사 등 다양한 동역자들과 ‘함께’
        </p>
        <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
          선교합니다
        </p>
      </div>
    </div>
  );
};

export default TextBox;
