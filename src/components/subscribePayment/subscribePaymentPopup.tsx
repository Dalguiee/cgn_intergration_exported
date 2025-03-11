// 훅
import React, { useEffect } from 'react';

// 컴포넌트
import StyledButtons from '../common/styledButtons';

const SubscribePaymentPopup = ({ popupOpen, setPopupOpen }) => {
  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popupOpen]);

  return (
    <>
      <div
        className={`${popupOpen ? `` : `hidden`} fixed left-0 top-0 z-[100] h-screen w-screen bg-grey-900 opacity-95`}
      ></div>
      <div
        className={`${popupOpen ? `` : `hidden`} fixed left-[50%] top-[50%] z-[110] flex h-634 w-full max-w-600 translate-x-[-50%] translate-y-[-50%] transform flex-col items-center justify-start bg-white-solid px-16 py-16 max-lg:h-[calc(100%-100px)] max-lg:w-[calc(100%-10px)] max-lg:px-16 max-lg:pt-24 lg:rounded-8`}
      >
        <div
          className={`flex h-full w-full flex-col items-start justify-start gap-24 overflow-y-auto pl-4 pr-20 pt-16 max-lg:px-0 max-lg:py-0`}
        >
          <div
            className={`flex w-full flex-col items-start justify-start gap-32`}
          >
            <div>
              <p className={`text-regular16 text-grey-900`}>
                CGN은 증액후원신청 및 후원 안내를 위해
                <br />
                다음과 같이 개인정보를 수집, 이용하고자 합니다.
              </p>
            </div>
            <div>
              <p className={`text-regular16 text-grey-900`}>
                1. 개인정보 수집, 이용
                <br />
                본인은 [개인정보 보호법] 제15조(개인정보의 수집,이용)에 따라
                <br />
                아래와 같이 개인정보 수집, 이용에 동의합니다.
              </p>
            </div>
            <div>
              <p className={`text-regular16 text-grey-900`}>
                가.[수집,이용목적] 1) 증액후원 신청 및 후원 안내
                <br />
                2) CMS 출금이체를 통한 요금 수납, 정기 후원 관련 서비스
                <br />
                3) CGN 마케팅 정보 제공 및 안내
              </p>
            </div>
            <div>
              <p className={`text-regular16 text-grey-900`}>
                나.[수집,이용항목]
                <br />
                수집,이용항목 : 이름, 연락처
              </p>
            </div>
            <div>
              <p className={`text-regular16 text-grey-900`}>
                다. [보유 및 이용 기간]
                <br />
                수집 이용 동의 일로부터 CMS 출금 이체 종료일 후 5년까지{' '}
              </p>
            </div>
            <div>
              <p className={`text-regular16 text-grey-900`}>
                2. 신청자는 개인정보 수집 및 이용을 거부할 권리가 있으며,
                <br />
                권리 행사 시 출금이체 신청이 거부될 수 있습니다.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className={`h-fit w-full`}>
          <StyledButtons
            text={`닫기`}
            formMode={`mode2`}
            colorMode={`mode3`}
            className={`w-full`}
            onClick={() => {
              setPopupOpen(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SubscribePaymentPopup;
