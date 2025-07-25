// 훅
import React, { useRef } from 'react';

// const [inputText, setInputText] = useState(''); 부모에서 props 전송필요, 검색용 String
const DefaultTextArea = ({
  placeholder = '입력해 주세요.',
  textClearBtn = false,
  inputText = '',
  setInputText,
  className = ``,
  maxlength = 999,
  onChange = () => {},
}) => {
  const inputBox = useRef();

  return (
    <div
      className={`${className && className} flex h-56 w-320 items-center justify-between gap-8 rounded-8 bg-white-solid py-16 pl-16 pr-12 outline outline-1 outline-grey-200 max-lg:h-48 max-lg:w-full max-lg:rounded-4`}
    >
      <textarea
        ref={inputBox}
        className={`text-regular16 max-lg:text-regular14 h-full w-full resize-none text-wrap text-grey-900 outline-none`}
        maxLength={maxlength}
        name={`findKeyword`}
        onChange={e => {
          setInputText(e.target.value);
          onChange();
        }}
        placeholder={placeholder}
        value={inputText}
      />
      <div className={`flex items-center justify-center gap-4`}>
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
      </div>
    </div>
  );
};

export default DefaultTextArea;
