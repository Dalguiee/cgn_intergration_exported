import React from 'react';

const NoSearchResult = () => {
  return (
    <section className={`w-full flex-col items-center justify-start`}>
      <div className={`flex flex-col items-center justify-start`}>
        <img
          className={`mb-24 h-100 w-100 object-cover`}
          width={100}
          height={100}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/outofservice.png`}
          alt=''
        />
        <p className={`text-bold32 mb-16 text-grey-900`}>
          검색 결과가 없습니다.
        </p>
        <p className={`text-regular18 text-grey-500`}>
          입력하신 단어가 정확한지 확인해 보세요.
        </p>
      </div>
    </section>
  );
};

export default NoSearchResult;
