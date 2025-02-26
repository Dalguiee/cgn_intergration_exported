// 훅
import React from 'react';

// 데이터
import { homeTowPartedBannersData } from '@/db/mockup';

const HomeTowPartedBanner = ({ mobile }) => {
  return (
    <div className='flex max-h-200 w-full items-center justify-center px-16 max-lg:max-h-92 max-lg:pb-60'>
      <div
        className={`flex aspect-[1560/200] h-full w-full max-w-1560 items-center justify-start gap-24 scrollbar-hide max-lg:h-92 max-lg:w-fit max-lg:justify-start max-lg:gap-12 max-lg:overflow-x-scroll`}
      >
        <button
          style={{
            backgroundImage: `${mobile ? `url(${homeTowPartedBannersData?.[0]?.moSrc})` : `url(${homeTowPartedBannersData?.[0]?.src})`} `,
          }}
          className={`h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0 max-lg:rounded-8`}
        ></button>
        <button
          style={{
            backgroundImage: `${mobile ? `url(${homeTowPartedBannersData?.[1]?.moSrc})` : `url(${homeTowPartedBannersData?.[1]?.src})`} `,
          }}
          className={`h-full w-1/2 rounded-16 bg-cover bg-center bg-no-repeat max-lg:w-277 max-lg:flex-shrink-0 max-lg:rounded-8`}
        ></button>
      </div>
    </div>
  );
};

export default HomeTowPartedBanner;
