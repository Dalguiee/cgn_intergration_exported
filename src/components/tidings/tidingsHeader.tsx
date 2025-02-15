import Locator from '@/layouts/locator';
import React from 'react';

const TidingsHeader = ({ title, subTitle }) => {
  return (
    <>
      <Locator />
      <section
        className={`flex h-216 w-full flex-col items-center justify-center pb-32 pt-80 max-md:px-20`}
      >
        <div className='text_section flex flex-col items-center justify-center gap-16'>
          <h1 className={`text-bold48 text-grey-900`}>{title}</h1>
          <span className={`text-regular18 text-grey-400`}>{subTitle}</span>
        </div>
        <div className={`flex items-center justify-center`}></div>
      </section>
    </>
  );
};

export default TidingsHeader;
