import React from 'react';
import StyledButtons from './styledButtons';

const CompleteBox = ({
  children = ``,
  completePopup = false,
  setCompletePopup,
}) => {
  return (
    <>
      <div
        className={`${completePopup ? `` : `hidden`} fixed left-0 top-0 z-[99] h-[100vh] w-[100vw] bg-black opacity-85`}
      ></div>
      <div
        className={`${completePopup ? `` : `hidden`} fixed left-[50%] top-[50%] z-[100] flex w-full min-w-320 max-w-900 translate-x-[-50%] translate-y-[-50%] transform flex-col items-center justify-between gap-4 rounded-8 bg-white-solid px-16 py-16`}
      >
        <p
          className={`text-regular16 h-full w-full py-16 text-center text-grey-900`}
        >
          {children}
        </p>
        <StyledButtons
          onClick={() => {
            setCompletePopup(false);
          }}
          className={`w-full`}
          text={`확인`}
          formMode={`mode2`}
          colorMode={`mode3`}
        />
      </div>
    </>
  );
};

export default CompleteBox;
