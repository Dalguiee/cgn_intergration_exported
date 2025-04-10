// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import DefaultInput from '@/components/common/defaultInput';
import SelectBox from '@/components/common/selectBox';
import StyledButtons from '@/components/common/styledButtons';
import CompleteBox from '@/components/common/completeBox';
import DefaultTextArea from '@/components/common/defaultTextArea';

// 데이터

const phoneNumberData = [
  { id: 0, text: '010' },
  { id: 1, text: '019' },
  { id: 2, text: '017' },
  { id: 3, text: '018' },
];

const ParticipatePrayer = () => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location?.search);
  const queryData = Object.fromEntries(querySearch);
  const [completePopup, setCompletePopup] = useState(true);

  // 이름
  const [writedName, setWritedName] = useState(``);

  // 나이
  const [writedAge, setWritedAge] = useState(``);

  // 기도제목
  const [writedPray, setWritedPray] = useState(``);

  // 최상단 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      className={`flex w-full flex-col items-center justify-start max-lg:px-16`}
    >
      <div className={`pb-32 pt-80 max-lg:pb-0 max-lg:pt-60`}>
        <h1
          className={`text-bold24 max-lg:text-bold24 text-center text-grey-900`}
        >
          기도제목을 작성해주시면{` `}
          <br />
          CGN 직원들과 드림온맘 중보기도팀이 온 마음 다해 기도하겠습니다.
        </h1>
      </div>
      <section
        className={`flex w-full max-w-720 flex-col items-center justify-start gap-24 pb-120 pt-40 max-lg:pb-60`}
      >
        {/* 이름 */}
        <div className={`w-full`}>
          <p className={`text-regular14 mb-8 pl-4 text-grey-900`}>이름</p>
          <div>
            <DefaultInput
              searchBtn={false}
              maxlength={10}
              placeholder={`이름을 입력해 주세요.`}
              className={`w-full`}
              inputText={writedName}
              setInputText={setWritedName}
            />
          </div>
        </div>
        {/* 나이 */}
        <div className={`w-full`}>
          <p className={`text-regular14 mb-8 pl-4 text-grey-900`}>나이</p>
          <div>
            <DefaultInput
              searchBtn={false}
              numberMode={true}
              maxlength={3}
              placeholder={`나이를 입력해 주세요.`}
              className={`w-full`}
              inputText={writedAge}
              setInputText={setWritedAge}
            />
          </div>
        </div>
        {/* 기도제목 */}
        <div className={`w-full`}>
          <p className={`text-regular14 mb-8 pl-4 text-grey-900`}>기도제목</p>
          <div>
            <DefaultTextArea
              placeholder={`기도 제목을 입력해 주세요.`}
              maxlength={500}
              textClearBtn={true}
              inputText={writedPray}
              setInputText={setWritedPray}
              className={`!h-120 w-full`}
            />
          </div>
        </div>

        {/* 신청하기 버튼 */}
        <div className={`mt-16 w-full`}>
          <StyledButtons
            className={`${writedName !== `` && writedAge !== `` ? `` : `pointer-events-none !bg-primary-600 !text-grey-300`} w-full`}
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
        기도 신청이 완료되었습니다.
        <br />
        진심을 다해 기도 드리겠습니다.
      </CompleteBox>
    </section>
  );
};

export default ParticipatePrayer;
