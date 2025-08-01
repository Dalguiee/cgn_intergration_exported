import React from 'react';

const DepthBackground = ({ depthActive, setDepthActive }) => {
  return (
    <div
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`absolute max-lg:hidden ${depthActive ? 'opacity-1' : 'pointer-events-none select-none opacity-0'} top-128 z-[79] flex h-276 w-full items-center justify-center gap-20 bg-primary-500 bg-contain bg-center bg-no-repeat`}
      style={{
        transition: `0.5s`,
      }}
    >
      <div
        style={{
          backgroundImage: `url('${import.meta.env.VITE_PUBLIC_URL}images/bg/header_2depth.svg')`,
        }}
        className={`absolute left-[50%] top-0 h-full w-full max-w-1920 translate-x-[-50%] bg-cover bg-center bg-no-repeat`}
      ></div>
    </div>
  );
};

export default DepthBackground;
