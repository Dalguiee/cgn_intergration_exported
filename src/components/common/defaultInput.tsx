// const [searchText, setSearchText] = useState(''); 부모에서 props 전송 필요

import React, { useState } from 'react';

const DefaultInput = ({
  placeholder = '입력해 주세요.',
  searchBtn = true,
  pwdBtn = false,
  textClearBtn = false,
  inputText = '',
  setInputText,
}) => {
  const [pwMode, setPwMode] = useState(false); // 비밀번호 보여주기 유무

  // 검색 찾기
  const handleSearching = () => {
    console.log('검색 찾기');
  };

  // 비밀번호 보기 유무
  const handlePwdMode = () => {
    setPwMode(!pwMode);
  };

  return (
    <div
      className={`flex h-56 w-320 items-center justify-between gap-8 rounded-8 border-1 border-grey-200 bg-white-solid pl-16 pr-12 max-lg:h-48 max-lg:w-full`}
    >
      <input
        className={`text-regular16 w-full text-grey-900`}
        type={`${pwMode ? 'password' : 'text'}`}
        name={`findKeyword`}
        onChange={e => setInputText(e.target.value)}
        placeholder={placeholder}
        value={inputText}
      />
      <div className={`flex items-center justify-center gap-4`}>
        {/* 찾기 버튼 */}
        {searchBtn && (
          <button className='w-24 h-24' onClick={() => handleSearching()}>
            <img
              className='w-full h-full'
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/finder.svg`}
              alt='찾기 버튼'
              width={24}
              height={24}
            />
          </button>
        )}
        {/* 블라이드 버튼 */}
        {pwdBtn && (
          <button
            className='w-24 h-24'
            type='button'
            onClick={() => {
              handlePwdMode();
            }}
          >
            <img
              className='w-full h-full'
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/input_blind.svg`}
              alt='블라이드 버튼'
              width={24}
              height={24}
            />
          </button>
        )}
        {/* 텍스트 전체 지우기 */}
        {textClearBtn && inputText && (
          <button
            className='w-24 h-24'
            type='button'
            onClick={() => {
              setInputText('');
            }}
          >
            <img
              className='w-full h-full'
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/input_clear.svg`}
              alt='전체 지우기'
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default DefaultInput;
