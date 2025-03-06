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
    position: ` absolute left-411 top-162`,
  },
  {
    id: 1,
    name: ` 미주`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/america_selected.png`,
    position: `absolute left-835 top-150`,
  },
  {
    id: 2,
    name: `일본`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/japan_selected.png`,
    position: `absolute left-482 top-146`,
  },
  {
    id: 3,
    name: `대만`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/taiwan_selected.png`,
    position: `absolute left-382 top-210`,
  },
  {
    id: 4,
    name: `태국`,
    rightSide: false,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/thailand_selected.png`,
    position: `absolute left-325 top-229`,
  },
  {
    id: 5,
    name: `인도네시아`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/indonesia_selected.png`,
    position: `absolute left-405 top-284`,
  },
  {
    id: 6,
    name: ` 프랑스`,
    rightSide: true,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france.png`,
    selectedSrc: `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/france_selected.png`,
    position: `absolute left-38 top-124`,
  },
];

const MapIcon = ({ dataId = 999, className = ``, selectedCategoryId = 0 }) => {
  const dataFind = mapData.find(item => item.id === dataId);
  console.log(dataFind);

  return (
    <div
      className={`${className && className} ${dataFind?.position} ${dataFind?.rightSide ? `flex-row-reverse` : ``} flex h-66 w-120 items-end justify-center gap-2`}
    >
      <div
        className={`${selectedCategoryId === dataFind?.id ? `h-66` : `h-44`}`}
      >
        <div
          className={`flex h-16 min-w-27 items-center justify-center rounded-4 bg-grey-900 px-4`}
        >
          <span className={`text-bold10 text-nowrap text-white-solid`}>
            {dataFind?.name}
          </span>
        </div>
      </div>

      <img
        src={`${selectedCategoryId === dataFind?.id ? dataFind?.selectedSrc : dataFind?.src}`}
        className={` ${selectedCategoryId === dataFind?.id ? `h-66 w-54` : `h-44 w-36`} object-cover`}
        width={36}
        height={44}
        alt=''
      />
    </div>
  );
};

export default MapIcon;
