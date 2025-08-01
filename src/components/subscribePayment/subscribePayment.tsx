// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import DefaultInput from '@/components/common/defaultInput';
import SelectBox from '@/components/common/selectBox';
import StyledButtons from '@/components/common/styledButtons';
import CompleteBox from '@/components/common/completeBox';

// 데이터
const priceData = [
  { id: 0, text: '+5,000원', value: `5000` },
  { id: 1, text: '+10,000원', value: `10000` },
  { id: 2, text: '+30,000원', value: `30000` },
];

const phoneNumberData = [
  { id: 0, text: '010' },
  { id: 1, text: '019' },
  { id: 2, text: '017' },
  { id: 3, text: '018' },
];

const SubscribePayment = ({ setPopupOpen }) => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location?.search);
  const queryData = Object.fromEntries(querySearch);
  const [completePopup, setCompletePopup] = useState(true);

  // 금액입력
  const [selectedPrice, setSelectedPrice] = useState({});
  const [writedPrice, setWritedPrice] = useState(``);

  // 이름
  const [writedName, setWritedName] = useState(``);

  // 전화번호
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState({});
  const [writedMiddlePhoneNumber, setWritedMiddlePhoneNumber] = useState(``);
  const [writedLastPhoneNumber, setWritedLastPhoneNumber] = useState(``);

  // 동의
  const [agree, setAgree] = useState(false);

  // useEffect(() => {
  //   if (queryData) {
  //     const beforeSelectedPrice = priceData?.find(
  //       item => item?.id === Number(queryData?.selectedId)
  //     );
  //     setSelectedPrice(beforeSelectedPrice);
  //   }
  // }, [location?.pathname]);

  // 최상단 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 가격 천단위 따옴표 추가
  const formatNumberWithQuotes = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section
      className={`flex w-full flex-col items-center justify-start max-lg:px-16`}
    >
      <div className={`pb-32 pt-80 max-lg:pb-0 max-lg:pt-60`}>
        <h1
          className={`text-bold40 max-lg:text-bold24 text-center text-grey-900`}
        >
          증액후원을 통해 <br /> CGN에 대한 사랑을 더해주세요.
        </h1>
      </div>
      <section
        className={`flex w-full max-w-720 flex-col items-center justify-start gap-24 pb-120 pt-40 max-lg:pb-60`}
      >
        {/* 후원 버튼모음 */}
        <div
          className={`flex h-64 w-full max-w-874 items-center justify-center gap-8 max-lg:h-48 max-lg:min-w-full max-lg:gap-5`}
        >
          {priceData?.map((item, key) => {
            return (
              <button
                key={key}
                onClick={() => {
                  if (selectedPrice?.id === item?.id) {
                    setSelectedPrice({});
                    setWritedPrice(``);
                  } else {
                    setSelectedPrice(item);
                    setWritedPrice(item?.value);
                  }
                }}
                className={`${item?.id === selectedPrice?.id ? 'text-bold24 max-lg:text-bold16 border-1 border-primary-500 bg-transparent text-primary-500' : 'text-regular24 max-lg:text-regular16 text-grey-900'} h-full w-full rounded-8 bg-grey-100 max-lg:rounded-4`}
              >
                {item?.text}
              </button>
            );
          })}
        </div>
        {/* 가격 직접입력 input */}
        <div className={`w-full`}>
          <DefaultInput
            searchBtn={false}
            numberMode={true}
            placeholder={`직접 입력`}
            paymentMode={true}
            className={`w-full`}
            inputText={formatNumberWithQuotes(writedPrice)}
            setInputText={setWritedPrice}
            onChange={() => {
              setSelectedPrice({});
            }}
          />
        </div>
        {/* 이름 */}
        <div className={`w-full`}>
          <p className={`text-regular14 mb-8 pl-4 text-grey-900`}>이름</p>
          <div>
            <DefaultInput
              searchBtn={false}
              placeholder={`이름을 입력하세요`}
              className={`w-full`}
              inputText={writedName}
              setInputText={setWritedName}
            />
          </div>
        </div>
        {/* 연락처 */}
        <div className={`w-full`}>
          <p className={`text-regular14 mb-8 pl-4 text-grey-900`}>연락처</p>
          <div className={`flex items-center justify-between gap-12`}>
            <SelectBox
              listData={phoneNumberData}
              selectedItem={selectedPhoneNumber}
              setSelectedItem={setSelectedPhoneNumber}
              className={`w-full`}
            />
            <span className={``}>-</span>
            <DefaultInput
              searchBtn={false}
              placeholder={``}
              numberMode={true}
              maxlength={4}
              className={`w-full`}
              inputText={writedMiddlePhoneNumber}
              setInputText={setWritedMiddlePhoneNumber}
            />
            <span className={``}>-</span>
            <DefaultInput
              searchBtn={false}
              placeholder={``}
              numberMode={true}
              maxlength={4}
              className={`w-full`}
              inputText={writedLastPhoneNumber}
              setInputText={setWritedLastPhoneNumber}
            />
          </div>
        </div>
        {/* 체크박스 및 개인정보 처리방침 팝업열기버튼 */}
        <div
          className={`flex w-full items-center justify-center gap-8 max-lg:justify-start`}
        >
          <button
            onClick={() => {
              setAgree(!agree);
            }}
            className={`flex h-24 w-24 items-center justify-center rounded-4 border-1 border-grey-900 bg-white-solid`}
          >
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/check_grey_900.svg`}
              className={`${agree ? `` : `hidden`} h-24 w-24`}
              width={24}
              height={24}
              alt=''
            />
          </button>
          <span className={`text-regular16 text-grey-900`}>
            개인정보 처리방침 동의
          </span>
          <button
            onClick={() => {
              setPopupOpen(true);
            }}
          >
            <span className={`text-bold16 text-grey-900`}>[전문보기]</span>
          </button>
        </div>
        {/* 신청하기 버튼 */}
        <div className={`mt-16 w-full`}>
          <StyledButtons
            className={`${agree && (writedPrice !== `` || selectedPrice?.id !== undefined) && writedName !== `` && writedMiddlePhoneNumber !== `` && writedLastPhoneNumber !== `` ? `` : `pointer-events-none !bg-primary-600 !text-grey-300`} w-full`}
            formMode={`mode1`}
            colorMode={`mode1`}
            text='증액후원 신청하기'
          />
        </div>
      </section>
      <CompleteBox
        completePopup={completePopup}
        setCompletePopup={setCompletePopup}
      >
        증액 후원 신청이 완료되었습니다.
        <br />
        후원자님 고맙습니다.
      </CompleteBox>
    </section>
  );
};

export default SubscribePayment;
