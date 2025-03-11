import React from 'react';

const DepthBackground = ({ depthActive, setDepthActive }) => {
  return (
    <div
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`absolute max-lg:hidden ${depthActive ? '' : 'hidden'} top-128 z-20 flex h-276 w-full items-center justify-center gap-20 bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url('${import.meta.env.VITE_PUBLIC_URL}images/bg/header_2depth.svg')`,
      }}
    ></div>
  );
};

export default DepthBackground;
