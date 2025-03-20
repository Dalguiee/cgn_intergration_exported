// 훅
import React from 'react';

// 데이터
import { homeTowPartedBannersData } from '@/db/mockup';

const HomeTowPartedBanner = ({ mobile }) => {
  return (
    <div
      data-aos='fade-up'
      className='flex max-h-200 w-full items-center justify-start overflow-x-visible max-md:max-h-92 lg:px-16'
    >
      <div
        className={`flex aspect-[1560/200] h-full w-full max-w-1560 items-center justify-start gap-24 max-md:h-92 max-md:w-fit max-md:justify-start max-md:gap-12 lg:mx-auto`}
      >
        {homeTowPartedBannersData?.slice(0, 2)?.map((item, key) => (
          <button
            key={key}
            style={{
              backgroundImage: `${mobile ? `url(${item?.moSrc})` : `url(${item?.src})`} `,
            }}
            className={`h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-md:w-277 max-md:flex-shrink-0 max-md:rounded-8`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeTowPartedBanner;
