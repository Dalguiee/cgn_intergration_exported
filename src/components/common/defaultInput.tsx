// 훅
import React, { useEffect, useRef, useState } from 'react';

// const [inputText, setInputText] = useState(''); 부모에서 props 전송필요, 검색용 String
const DefaultInput = ({
  placeholder = '입력해 주세요.',
  searchBtn = true,
  pwdBtn = false,
  textClearBtn = false,
  paymentMode = false,
  numberMode = false,
  inputText = '',
  setInputText,
  className = ``,
  maxlength = 999,
  onChange = () => {},
}) => {
  const [pwMode, setPwMode] = useState(false); // 비밀번호 보여주기 유무
  const inputBox = useRef();

  // 검색 찾기
  const handleSearching = () => {
    console.log('검색 찾기');
  };

  // 비밀번호 보기 버튼 및 password 모드 유무
  const handlePwdMode = () => {
    setPwMode(!pwMode);
  };

  // 텍스트 숫자로 바꾸는 함수
  const numberChanging = value => {
    const numberValue = value.replace(/[^0-9]/g, '');
    setInputText(numberValue);
  };

  return (
    <div
      className={`${className && className} flex h-56 w-320 items-center justify-between gap-8 rounded-8 bg-white-solid pl-16 pr-12 outline outline-1 outline-grey-200 max-lg:h-48 max-lg:w-full`}
    >
      <input
        ref={inputBox}
        className={`text-regular16 max-lg:text-regular14 w-full text-grey-900`}
        type={`${pwMode ? 'password' : ''}`}
        inputMode={`${numberMode ? `numeric` : ``}`}
        maxLength={maxlength}
        name={`findKeyword`}
        onChange={e => {
          if (numberMode) {
            numberChanging(e.target.value);
            onChange();
          } else {
            setInputText(e.target.value);
            onChange();
          }
        }}
        placeholder={placeholder}
        value={inputText}
      />
      <div className={`flex items-center justify-center gap-4`}>
        {/* 찾기 버튼 */}
        {searchBtn && (
          <button className='h-24 w-24' onClick={() => handleSearching()}>
            <img
              className='h-full w-full'
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
            className='h-24 w-24'
            type='button'
            onClick={() => {
              handlePwdMode();
            }}
          >
            <img
              className='h-full w-full'
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
            className='h-24 w-24'
            type='button'
            onClick={() => {
              setInputText('');
            }}
          >
            <img
              className='h-full w-full'
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/input_clear.svg`}
              alt='전체 지우기'
              width={24}
              height={24}
            />
          </button>
        )}
        {/* 원 추가 */}
        {paymentMode && (
          <span
            className={`text-regular18 max-lg:text-regular14 text-grey-900 max-lg:text-grey-400`}
          >
            원
          </span>
        )}
      </div>
    </div>
  );
};

export default DefaultInput;
