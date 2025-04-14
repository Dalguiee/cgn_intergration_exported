// 훅
import HTMLReactParser from 'html-react-parser';
import React from 'react';

const HomeTwoPartedBanner = ({ item = [], mobile }) => {
  return (
    <div
      data-aos='fade-up'
      className={`mx-auto flex h-fit w-1560 items-center justify-start overflow-x-visible max-lg:w-fit lg:px-16`}
    >
      <div
        className={`flex h-fit w-full items-center justify-start gap-24 max-md:gap-12`}
      >
        {item?.map((item, key) => (
          <button
            onClick={() => {
              window.open(item?.link, `_blank`);
            }}
            key={key}
            style={{
              backgroundImage: `${mobile ? `url(${item?.moSrc})` : `url(${item?.src})`} `,
            }}
            className={`flex aspect-[768/200] w-1/2 flex-shrink-0 flex-col items-start justify-center gap-4 rounded-16 bg-cover bg-center bg-no-repeat px-33 max-lg:w-568 max-lg:px-31 max-md:w-277 max-md:gap-2 max-md:rounded-8 max-md:px-16`}
          >
            <p
              className={`text-bold32 max-md:text-bold18 line-clamp-1 w-full text-left text-white-solid`}
            >
              {item?.title ? HTMLReactParser(item?.title) : ``}
            </p>
            <p
              className={`text-regular18 max-md:text-regular12 line-clamp-1 w-full text-left text-white-solid`}
            >
              {item?.subTitle ? HTMLReactParser(item?.subTitle) : ``}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeTwoPartedBanner;
