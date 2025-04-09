// 훅
import React, { useEffect, useRef } from 'react';

// 기념일 후원 전문보기 팝업
const AnniversaryPopup = props => {
  const { isOpen } = props;

  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        isOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed top-0 z-[100] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)] max-lg:px-10'>
      <div
        ref={modalRef}
        className='max-lg:min-h-auto flex h-auto min-h-586 w-600 flex-col justify-between rounded-8 bg-white-solid px-16 pb-24 pt-16 max-lg:rounded-0 max-lg:pb-40'
      >
        <div
          className='h-480 w-full overflow-y-auto overflow-x-hidden ps-4 pt-16 max-lg:mb-50 max-lg:h-450'
          data-custom-scroll
        >
          <span className='text-regular16 leading-12'>
            CGN은 후원 증서 신청 및 후원 안내를 위해
            <br />
            다음과 같이 개인정보를 수집, 이용하고자 합니다.
            <br />
            <br />
            1. 개인정보 수집, 이용
            <br />
            본인은 [개인정보 보호법] 제15조(개인정보의 수집,이용)에 따라 아래와
            같이<span className='max-lg:mr-4'></span>
            <br className='max-lg:hidden' />
            개인정보 수집, 이용에 동의합니다.
            <br />
            <br />
            가.[수집,이용목적]
            <br />
            1) 기념일 후원증서신청 및 후원 안내
            <br />
            2) CGN 마케팅 정보 제공 및 안내
            <br />
            <br />
            나.[수집,이용항목]
            <br />
            수집, 이용항목 : 이름, 기념일 명칭, 기념일날짜, 연락처
            <br />
            <br />
            다. [보유 및 이용 기간]
            <br />
            1) 수집 이용 동의 일로부터 5년까지
            <br />
            2) 신청자는 개인정보 수집 및 이용을 거부할 권리가 있으며,
            <br className='max-lg:hidden' />
            <span className='max-lg:mr-4'></span>
            권리 행사 시 후원 증서 신청이 거부될 수 있습니다.
          </span>
        </div>
        <div className='mt-4 w-full shrink-0'>
          <button
            className='text-bold16 flex h-54 w-full items-center justify-center rounded-4 border-1 border-[black]'
            onClick={() => isOpen(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryPopup;
