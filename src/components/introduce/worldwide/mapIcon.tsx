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
    position: ` absolute left-411 top-162 max-lg:top-65 max-lg:left-189`,
  },
  {
    id: 1,
    name: ` 미주`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america_selected.png`,
    position: `absolute left-835 top-150 max-lg:top-60 max-lg:left-365`,
  },
  {
    id: 2,
    name: `일본`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan_selected.png`,
    position: `absolute left-482 top-146 max-lg:top-64 max-lg:left-207`,
  },
  {
    id: 3,
    name: `대만`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan_selected.png`,
    position: `absolute left-382 top-210 max-lg:top-84 max-lg:left-179`,
  },
  {
    id: 4,
    name: `태국`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand_selected.png`,
    position: `absolute left-325 top-229 max-lg:top-90 max-lg:left-144`,
  },
  {
    id: 5,
    name: `인도네시아`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia_selected.png`,
    position: `absolute left-405 top-284 max-lg:top-121 max-lg:left-170`,
  },
  {
    id: 6,
    name: ` 프랑스`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france_selected.png`,
    position: `absolute left-38 top-124 max-lg:top-48 max-lg:left-1`,
  },
];

const MapIcon = ({
  selectedCategoryArticleId,
  setSelectedCategoryArticleId,
}) => {
  return mapData?.map((item, idx) => (
    <div
      key={idx}
      className={`${item?.position} ${item?.rightSide ? `flex-row-reverse` : ``} flex h-66 w-120 items-end justify-center gap-2 max-lg:h-32 max-lg:w-26`}
    >
      <div
        className={`max-lg:hidden ${selectedCategoryArticleId === item?.id ? `h-66` : `h-44`}`}
      >
        <div
          className={`flex h-16 min-w-27 items-center justify-center rounded-4 bg-grey-900 px-4`}
        >
          <span className={`text-bold10 text-nowrap text-white-solid`}>
            {item?.name}
          </span>
        </div>
      </div>

      <button
        className={`max-lg:pointer-events-none`}
        onClick={() => {
          setSelectedCategoryArticleId(item?.id);
        }}
      >
        <img
          src={`${selectedCategoryArticleId === item?.id ? item?.selectedSrc : item?.src}`}
          className={` ${selectedCategoryArticleId === item?.id ? `h-66 w-54 max-lg:h-32 max-lg:w-26` : `h-44 w-36 max-lg:h-20 max-lg:w-16`} object-cover`}
          width={36}
          height={44}
          alt=''
        />
      </button>
    </div>
  ));
};

export default MapIcon;
