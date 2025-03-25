import React from 'react';

const MoTopHeader = ({
  burger,
  setBurger,
  languageActiveIdx,
  setLanguageActiveIdx,
}) => {
  return (
    <>
      <div
        className={`hidden items-center justify-center gap-12 ${burger ? '' : 'hidden'}`}
      >
        <button
          className={`text-white-solid ${languageActiveIdx === 0 ? 'text-bold16 underline decoration-[1.5px] underline-offset-[2px]' : 'text-regular16'}`}
          onClick={() => {
            setLanguageActiveIdx(0);
          }}
        >
          KR
        </button>
        <span className={`border-pirmary-100 h-12 w-1 border-l-1`}></span>
        <button
          className={`text-white-solid ${languageActiveIdx === 1 ? 'text-bold16 underline decoration-[1.5px] underline-offset-[2px]' : 'text-regular16'}`}
          onClick={() => {
            setLanguageActiveIdx(1);
          }}
        >
          EN
        </button>
      </div>
      <button
        onClick={() => {
          setBurger(item => {
            return !item;
          });
        }}
        className={`hidden h-32 w-32 items-center justify-center px-6 max-lg:block`}
      >
        <div className={`flex flex-col items-end justify-center gap-5`}>
          <span
            className={`${burger ? 'translate-y-3 rotate-[-45deg] transform border-white-solid' : ''} w-full rounded-999 border-t-2 border-grey-900 transition`}
          ></span>
          <span
            className={`${burger ? 'hidden' : ''} w-[65%] rounded-999 border-t-2 border-grey-900`}
          ></span>
          <span
            className={`${burger ? 'translate-y-[-4px] rotate-[45deg] transform border-white-solid' : ''} w-full rounded-999 border-t-2 border-grey-900`}
          ></span>
        </div>
      </button>
    </>
  );
};

export default MoTopHeader;
