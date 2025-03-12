import React from 'react';

const formModeData = [
  {
    id: 1,
    mode: 'mode1',
    className: `min-w-fit h-64 text-bold24 max-lg:h-52 max-lg:text-bold18 px-24 max-lg:px-16`,
  },
  {
    id: 2,
    mode: 'mode2',
    className: `min-w-fit h-54 text-bold16 max-lg:h-40 max-lg:text-bold14 px-24 max-lg:px-16`,
  },
  {
    id: 3,
    mode: 'mode3',
    className: `min-w-fit h-40 text-regular14 max-lg:h-32 max-lg:text-regular14`,
  },
  {
    id: 4,
    mode: 'mode1-r',
    className: `min-w-fit h-54 rounded-999 text-bold16 max-lg:h-36 max-lg:text-bold14 px-24 max-lg:px-12`,
  },
  {
    id: 5,
    mode: 'mode2-r',
    className: `min-w-fit h-40 rounded-999 text-bold14 max-lg:h-32 max-lg:text-regular12 px-24`,
  },
  {
    id: 6,
    mode: 'mode3-r',
    className: `min-w-fit h-40 rounded-999 text-bold14 max-lg:h-32 max-lg:text-regular12 px-24`,
  },
];

const colorModeData = [
  {
    id: 1,
    mode: 'mode1',
    className: `bg-primary-500 hover:bg-primary-400 disabled:bg-primary-600 disabled:text-grey-300 text-white-solid`,
  },
  {
    id: 2,
    mode: 'mode2',
    className: `bg-grey-900 hover:bg-grey-700 disabled:bg-grey-400 disabled:text-grey-300 text-white-solid`,
  },
  {
    id: 3,
    mode: 'mode3',
    className: `bg-white-solid hover:text-grey-500 disabled:border-grey-400 disabled:text-grey-300 border-1 border-grey-900 text-grey-900`,
  },
  {
    id: 4,
    mode: 'mode4',
    className: `bg-transparent hover:text-grey-500 disabled:border-grey-400 disabled:text-grey-300 border-1 border-grey-900 text-grey-900`,
  },
];

const StyledButtons = ({
  text = '텍스트 props 필요',
  formMode = 'mode1',
  colorMode = 'mode1',
  className = '',
  arrowMode = false,
  playStoreMode = false,
  appStoreMode = false,
  downloadMode = false,
  downloadItem = null,
  children = null,
  onClick = () => {},
}) => {
  const formModeObj = formModeData.find(item => item.mode === formMode);
  const colorModeObj = colorModeData.find(item => item.mode === colorMode);

  return (
    <button
      style={{ transition: `0.5s` }}
      onClick={() => {
        onClick();
      }}
      className={`${className} flex items-center justify-center gap-8 text-nowrap ${downloadMode ? `rounded-4` : `rounded-8`} max-lg:gap-4 ${formModeObj && formModeObj?.className} ${colorModeObj && colorModeObj?.className}`}
    >
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/play_store.svg`}
        className={`${playStoreMode ? `` : `hidden`} h-24 w-24 object-cover`}
        width={24}
        height={24}
        alt=''
      />
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/app_store.svg`}
        className={`${appStoreMode ? `` : `hidden`} h-24 w-24 object-cover`}
        width={24}
        height={24}
        alt=''
      />
      <span>{text === '' ? '빈 값을 가져옴' : text}</span>
      <img
        className={`${arrowMode ? '' : 'hidden'} h-24 w-24 max-lg:h-16 max-lg:w-16`}
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
        width={24}
        height={24}
        alt='화살표'
      />
      <img
        className={`${downloadMode ? '' : 'hidden'} h-24 w-24 max-lg:h-16 max-lg:w-16`}
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/download_arrow_grey_900.svg`}
        width={24}
        height={24}
        alt='다운로드화살표'
      />
      {children}
    </button>
  );
};

export default StyledButtons;
