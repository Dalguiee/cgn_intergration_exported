import { useState } from 'react';

const TopHeader = () => {
  const [langActive, setLangActive] = useState(false); // 언어 선택 활성화 상태
  return (
    <div
      className={`flex h-48 w-full max-w-1560 items-center justify-end gap-10 max-lg:hidden`}
    >
      <div className='flex h-24 items-center justify-center gap-12'>
        <button className='h-full'>
          <p className='text-regular14 text-grey-400'>퐁당</p>
        </button>
        <span className='separator'></span>
        <div className='h-full'>
          <span className={`flex h-full text-regular14 text-grey-400`}>
            나의 후원 보기
          </span>
        </div>
        <span className='separator'></span>
        <button
          className={`group flex items-center justify-center`}
          onClick={() => {
            setLangActive(!langActive);
          }}
        >
          <span className={`text-regular14 text-grey-400`}>KOR</span>
          <img
            className={`ml-4 ${langActive ? '' : 'rotate-180'}`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/orange_tri.svg`}
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
