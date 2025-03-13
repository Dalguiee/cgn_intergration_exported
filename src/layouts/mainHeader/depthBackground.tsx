import React from 'react';

const DepthBackground = ({ depthActive, setDepthActive }) => {
  return (
    <div
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`absolute max-lg:hidden ${depthActive ? 'opacity-1' : 'pointer-events-none select-none opacity-0'} top-128 z-[79] flex h-276 w-full items-center justify-center gap-20 bg-cover bg-center bg-no-repeat`}
      style={{
        transition: `0.5s`,
        backgroundImage: `url('${import.meta.env.VITE_PUBLIC_URL}images/bg/header_2depth.svg')`,
      }}
    ></div>
  );
};

export default DepthBackground;
