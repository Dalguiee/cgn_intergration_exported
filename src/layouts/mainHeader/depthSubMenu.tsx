import React from 'react';

const DepthSubMenu = ({ depthActive, setDepthActive }) => {
  return (
    <div
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`absolute max-lg:hidden ${depthActive ? '' : 'hidden'} top-130 z-10 flex h-276 w-full items-center justify-center gap-20 bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url('${import.meta.env.VITE_PUBLIC_URL}images/bg/header_2depth.svg')`,
      }}
    >
      {/* {centerMenu.map(menu => (
        <div
          className='flex flex-col items-center justify-start h-full'
          key={menu.key}
        ></div>
      ))} */}
    </div>
  );
};

export default DepthSubMenu;
