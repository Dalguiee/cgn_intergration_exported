import React, { useState } from 'react';

const SelectBox = ({ listData, width = '30' }) => {
  const [open, setOpen] = useState(false);
  const [placeHolder, setPlaceHolder] = useState([]);
  console.log(width);
  return (
    <div
      style={{ width: `${width}px` }}
      className={`relative z-10 flex w-290 items-center ${width === '30' ? `w-30` : ``} ${open ? 'border-transparent' : 'border-grey-200'} justify-between rounded-8 border-1 py-12 pr-16`}
    >
      <div></div>

      <div
        className={`border-grey-200 px-16 py-12 ${open ? 'absolute top-0 h-fit rounded-8 border border-1' : 'h-0'} flex w-full flex-col items-start justify-start gap-8 bg-white-solid transition`}
      >
        <div
          className={` ${open ? 'hidden' : ''} absolute top-[50%] translate-y-[-50%] transform`}
        >
          <button className={`hover:text-bold18 text-regular18 cursor-pointer`}>
            {listData?.[0]?.value}
          </button>
        </div>

        {listData.map((item, key) => (
          <div key={key} className={` ${open ? '' : 'hidden'}`}>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className={`hover:text-bold18 text-regular18 cursor-pointer`}
            >
              {item?.value}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={`${open ? 'rotate-180 transform' : ''} transition`}
      >
        <img src='/public/images/icon/arrow_under_grey900.svg' alt='' />
      </button>
    </div>
  );
};

export default SelectBox;
