import React from 'react';

const HomeTidingsSwiperButtons = ({ prevButtonRef, nextButtonRef }) => {
  return (
    <div className={`flex gap-8 max-lg:gap-4`}>
      <button
        className={`flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200 bg-white-solid max-lg:h-36 max-lg:w-36`}
        ref={prevButtonRef}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey900.svg`}
          width={24}
          height={24}
          alt=''
        />
      </button>
      <button
        className={`flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200 bg-white-solid max-lg:h-36 max-lg:w-36`}
        ref={nextButtonRef}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey900.svg`}
          width={24}
          height={24}
          alt=''
        />
      </button>
    </div>
  );
};

export default HomeTidingsSwiperButtons;
