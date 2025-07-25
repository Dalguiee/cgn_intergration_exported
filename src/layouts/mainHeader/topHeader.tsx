import { useState } from 'react';

const TopHeader = () => {
  const [langActive, setLangActive] = useState(false); // 언어 선택 활성화 상태
  return (
    <div
      className={`flex h-48 w-full max-w-1560 items-center justify-end gap-10 max-lg:hidden`}
    >
      <div className='flex h-24 items-center justify-center gap-12'>
        <div className={`h-full`}>
          <button
            onClick={() => {
              window.open(`https://www.fondant.kr/`, `_blank`);
            }}
            className='h-full'
          >
            <p className='text-regular14 text-grey-400'>퐁당</p>
          </button>
        </div>
        <span className='separator'></span>
        <div className='h-full'>
          <button
            onClick={() => {
              window.open(
                `https://mrmweb.hsit.co.kr/v2/?server=7kOXiyc9Ff6n5QWUwZDJyQ==&action=info`,
                `_blank`
              );
            }}
          >
            <p className={`text-regular14 flex h-full text-grey-400`}>
              나의 후원 보기
            </p>
          </button>
        </div>
        {/* <span className='separator'></span>
        <button
          className={`group flex items-center justify-center`}
          onClick={() => {
            setLangActive(!langActive);
          }}
        >
          <span className={`text-regular14 text-grey-400`}>KOR</span>
          <img
            className={`ml-4 ${langActive ? '' : 'rotate-180'} transition-all`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/orange_tri.svg`}
            alt=''
          />
        </button> */}
      </div>
    </div>
  );
};

export default TopHeader;
