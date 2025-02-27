// 훅
import React from 'react';

const HomeTextBox = () => {
  return (
    <div className='flex h-396 w-full max-w-440 flex-col items-start justify-center gap-24 pl-40 max-lg:h-338 max-lg:max-w-361 max-lg:gap-16 max-lg:px-0'>
      <h2
        className={`text-bold48 max-lg:text-bold24 line-clamp-1 text-grey-900 max-lg:mb-10`}
      >
        선교 미디어 CGN
      </h2>
      <div className={`flex flex-col items-start justify-center`}>
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Christian
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          다양한 플랫폼과 콘텐츠를 통해
          <br className={`max-lg:hidden`} />
          &nbsp;24시간 ‘순수복음’을 전합니다
        </p>
      </div>
      <div className={`flex flex-col items-start justify-center`}>
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Global
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          6개 해외지사, 현지 맞춤 콘텐츠, 글로벌 서비스로
          <br className={`max-lg:hidden`} />
          &nbsp;‘어디서나 모두에게’ 다가갑니다
        </p>
      </div>
      <div className={`flex flex-col items-start justify-center`}>
        <p
          className={`text-bold24 max-lg:text-bold18 mb-8 line-clamp-1 text-primary-500 max-lg:mb-4`}
        >
          Network
        </p>
        <p
          className={`text-regular16 max-lg:text-regular14 line-clamp-2 text-grey-500`}
        >
          후원자, 교회, 선교사 등 다양한 동역자들과 ‘함께’
          <br className={`max-lg:hidden`} />
          &nbsp;선교합니다
        </p>
      </div>
    </div>
  );
};

export default HomeTextBox;
