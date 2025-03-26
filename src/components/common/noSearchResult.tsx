import React from 'react';

const NoSearchResult = ({ mode = `mode1` }) => {
  return (
    <section className={`w-full flex-col items-center justify-start py-100`}>
      <div className={`flex flex-col items-center justify-start`}>
        <img
          className={`mb-24 h-100 w-100 object-cover max-lg:h-60 max-lg:w-60`}
          width={100}
          height={100}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/outofservice.png`}
          alt=''
        />
        {mode === `mode1` ? (
          <>
            <p className={`text-bold32 max-lg:text-bold24 mb-16 text-grey-900`}>
              검색 결과가 없습니다.
            </p>
            <p className={`text-regular18 max-lg:text-regular16 text-grey-500`}>
              입력하신 단어가 정확한지 확인해 보세요.
            </p>
          </>
        ) : (
          ``
        )}
        {mode === `mode2` ? (
          <>
            <p className={`text-bold32 max-lg:text-bold24 mb-16 text-grey-900`}>
              내역이 없습니다.
            </p>
          </>
        ) : (
          ``
        )}
      </div>
    </section>
  );
};

export default NoSearchResult;
