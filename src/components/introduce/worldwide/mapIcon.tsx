// 훅
import React from 'react';

// 데이터
const mapData = [
  {
    id: 0,
    name: `한국`,
    rightSide: false,
    src: `/public/images/worldwide/korea.png`,
    selectedSrc: `/public/images/worldwide/korea_selected.png`,
    position: ` absolute left-431 top-184`,
    selectedPosition: ` absolute left-0 top-0`,
  },
  {
    id: 1,
    name: `일본`,
    rightSide: true,
    src: `/public/images/worldwide/japan.png`,
    selectedSrc: `/public/images/worldwide/japan_selected.png`,
    position: `absolute left-502 top-183`,
    selectedPosition: `absolute left-502 top-183`,
  },
  {
    id: 2,
    name: `대만`,
    rightSide: false,
    src: `/public/images/worldwide/taiwan.png`,
    selectedSrc: `/public/images/worldwide/taiwan_selected.png`,
    position: `absolute left-411 top-224`,
    selectedPosition: `absolute left-411 top-224`,
  },
  {
    id: 3,
    name: `태국`,
    rightSide: false,
    src: `/public/images/worldwide/thailand.png`,
    selectedSrc: `/public/images/worldwide/thailand_selected.png`,
    position: `absolute left-351 top-255`,
    selectedPosition: `absolute left-351 top-255`,
  },
  {
    id: 4,
    name: `인도네시아`,
    rightSide: true,
    src: `/public/images/worldwide/indonesia.png`,
    selectedSrc: `/public/images/worldwide/indonesia_selected.png`,
    position: `absolute left-423 top-306`,
    selectedPosition: `absolute left-423 top-306`,
  },
  {
    id: 5,
    name: ` 프랑스`,
    rightSide: true,
    src: `/public/images/worldwide/france.png`,
    selectedSrc: `/public/images/worldwide/france_selected.png`,
    position: `absolute left-70 top-144`,
    selectedPosition: `absolute left-70 top-144`,
  },
  {
    id: 6,
    name: ` 미주`,
    rightSide: false,
    src: `/public/images/worldwide/america.png`,
    selectedSrc: `/public/images/worldwide/america_selected.png`,
    position: `absolute left-835 top-150`,
    selectedPosition: `absolute left-835 top-150`,
  },
];

const MapIcon = ({ dataId = 999, className = ``, selectedCategoryId = 0 }) => {
  const dataFind = mapData.find(item => item.id === dataId);
  console.log(dataFind);

  return (
    <div
      className={`${className && className} ${selectedCategoryId === dataFind?.id ? dataFind?.selectedPosition : dataFind?.position} ${dataFind?.rightSide ? `flex-row-reverse` : ``} flex gap-2`}
    >
      <div
        className={`flex h-16 min-w-27 items-center justify-center rounded-4 bg-grey-900 px-4`}
      >
        <span className={`text-bold10 text-white-solid`}>{dataFind?.name}</span>
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
