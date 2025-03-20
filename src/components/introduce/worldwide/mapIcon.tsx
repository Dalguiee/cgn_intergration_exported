// 훅
import React from 'react';

// 데이터
const mapData = [
  {
    id: 0,
    name: `한국`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/korea.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/korea_selected.png`,
    position: ` absolute left-429 top-162 max-lg:top-[32%] max-lg:left-[49.3%]`,
  },
  {
    id: 1,
    name: ` 미주`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america_selected.png`,
    position: `absolute left-835 top-150 max-lg:top-[28%] max-lg:left-[93%]`,
  },
  {
    id: 2,
    name: `일본`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan_selected.png`,
    position: `absolute left-502 top-146 max-lg:top-[32.2%] max-lg:left-[53.1%]`,
  },
  {
    id: 3,
    name: `대만`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan_selected.png`,
    position: `absolute left-406 top-210 max-lg:top-[40.1%] max-lg:left-[46.8%]`,
  },
  {
    id: 4,
    name: `태국`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand_selected.png`,
    position: `absolute left-340 top-229 max-lg:top-[45.7%] max-lg:left-[39.5%]`,
  },
  {
    id: 5,
    longText: true,
    name: `인도네시아`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia_selected.png`,
    position: `absolute left-405 top-284 max-lg:top-[56.1%] max-lg:left-[44.1%]`,
  },
  {
    id: 6,
    longText: true,
    name: ` 프랑스`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france_selected.png`,
    position: `absolute left-38 top-124 max-lg:top-[25%] max-lg:left-[2.5%]`,
  },
];

const MapIcon = ({
  selectedCategoryArticleId,
  setSelectedCategoryArticleId,
}) => {
  return mapData?.map((item, idx) => (
    <div
      key={idx}
      className={`${item?.id === 0 ? `pointer-events-none select-none` : ``} ${item?.position} ${item?.rightSide ? `flex-row-reverse` : ``} flex h-66 ${item?.longText ? `w-120` : `w-80`} items-end justify-center gap-2 max-lg:h-[8%] max-lg:w-[5%] max-lg:gap-0`}
    >
      <div
        className={`max-lg:hidden ${selectedCategoryArticleId === item?.id ? `h-66` : `h-44`}`}
      >
        <div
          className={`flex h-16 min-w-27 items-center justify-center rounded-4 bg-grey-900 px-4`}
        >
          <span className={`text-bold10 whitespace-nowrap text-white-solid`}>
            {item?.name}
          </span>
        </div>
      </div>

      <button
        className={`h-fit w-fit max-lg:pointer-events-none`}
        onClick={() => {
          setSelectedCategoryArticleId(item?.id);
        }}
      >
        <img
          src={`${selectedCategoryArticleId === item?.id ? item?.selectedSrc : item?.src}`}
          className={` ${selectedCategoryArticleId === item?.id ? `h-66 w-54 max-lg:h-32 max-lg:w-26` : `h-44 w-36 max-lg:h-20 max-lg:w-16`} object-contain`}
          width={36}
          height={44}
          alt=''
        />
      </button>
    </div>
  ));
};

export default MapIcon;
