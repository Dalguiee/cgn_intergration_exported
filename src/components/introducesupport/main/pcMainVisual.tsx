import React from 'react';

const PcMainVisual = props => {
  const { setSupportTab } = props;
  return (
    <div className='relative aspect-[2100_/_960] w-full'>
      <div
        className='aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_main_bg2.jpg)`,
        }}
      ></div>
      <div
        className='absolute top-0 aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_main_bg.jpg)`,
        }}
      ></div>
    </div>
  );
};
export default PcMainVisual;
