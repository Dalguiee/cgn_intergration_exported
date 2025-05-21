// 훅
import React from 'react';
import { useLocation } from 'react-router-dom';

// 미션과 후원에서 사용되는 페이지 중간 텍스트 애니메이터 입니다.
const TextScroll = () => {
  const location = useLocation();

  return (
    <div
      className={`animation pointer-events-none mb-60 mt-152 w-full select-none overflow-x-hidden max-lg:hidden`}
    >
      <div
        data-comment='text_scroll_box'
        className={`flex items-center justify-center gap-34`}
      >
        {Array.from(Array(30))?.map((item, key) => (
          <>
            <span
              key={key}
              className={`text-bold78 whitespace-nowrap text-grey-900`}
            >
              {location.pathname.includes('/news/story')
                ? `CGN Mission Story`
                : `CGN Supporter Story`}
            </span>
            <img
              className={`h-45 w-16`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/text_scroll_logo.png`}
              alt=''
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default TextScroll;
