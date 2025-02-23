import React from 'react';

const formModeData = [
  {
    id: 1,
    mode: 'mode1',
    className: `min-w-300 h-64  text-bold24 max-lg:h-52 max-lg:text-bold18`,
  },
  {
    id: 2,
    mode: 'mode2',
    className: `min-w-98 h-54 text-bold16 max-lg:h-40 max-lg:text-bold14`,
  },
  {
    id: 3,
    mode: 'mode3',
    className: `min-w-96 h-40 text-regular14 max-lg:h-32 max-lg:text-regular14`,
  },
  {
    id: 4,
    mode: 'mode1-r',
    className: `min-w-300 h-54 rounded-999 text-bold16 max-lg:h-48 max-lg:text-bold16`,
  },
  {
    id: 5,
    mode: 'mode2-r',
    className: `min-w-98 h-40 rounded-999 text-bold14 max-lg:h-32 max-lg:text-regular12`,
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
];

const Btn = ({
  text = '텍스트 props 필요',
  formMode = 'mode1',
  colorMode = 'mode1',
  arrowMode = false,
  widthFull = false,
}) => {
  const formModeObj = formModeData.find(item => item.mode === formMode);
  const colorModeObj = colorModeData.find(item => item.mode === colorMode);

  return (
    <button
      className={`flex items-center justify-center text-nowrap rounded-8 px-16 ${formModeObj && formModeObj?.className} ${widthFull ? '!w-full' : ''} ${colorModeObj && colorModeObj?.className}`}
    >
      <span>{text === '' ? '빈 값을 가져옴' : text}</span>
      <img
        className={`${arrowMode ? '' : 'hidden'} h-16 w-16`}
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
        width={16}
        height={16}
        alt='화살표'
      />
    </button>
  );
};

export default Btn;
