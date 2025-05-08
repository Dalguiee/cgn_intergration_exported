// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import DefaultInput from '@/components/common/defaultInput';
import StyledButtons from '@/components/common/styledButtons';
import CompleteBox from '@/components/common/completeBox';
import DefaultTextArea from '@/components/common/defaultTextArea';

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
      className={`flex w-full flex-col items-center justify-start px-16 pt-40 max-lg:pt-0`}
    >
      <div
        className={`flex w-full max-w-720 flex-col items-center justify-start border-t-3 border-grey-900 pb-120 max-lg:border-t-0 max-lg:pb-60`}
      >
        <div className={`w-full py-40 max-lg:pb-32 max-lg:pt-24`}>
          <p className={`text-bold16 mb-6 text-grey-900 lg:hidden`}>
            CGN은 소중한 시청자, 후원자님을 위해 함께 기도합니다.
          </p>
          <h3
            className={`text-bold24 max-lg:text-bold24 max-lg:text-regular14 text-center text-grey-900 max-lg:text-start max-lg:text-grey-500`}
          >
            기도제목을 작성해주시면{` `}
            <br className={`max-lg:hidden`} />
            CGN 직원들과 드림온맘 중보기도팀이 <br className={`lg:hidden`} />온
            마음 다해 기도하겠습니다.
          </h3>
        </div>

        {/* 컨텐츠 */}
        <div
          className={`flex w-full flex-col items-center justify-start gap-24 bg-white-solid px-40 py-40 max-lg:px-0 max-lg:py-24`}
        >
          <p className={`text-bold24 w-full max-lg:text-center`}>
            나의 기도 제목
          </p>
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
        </div>

        {/* 신청하기 버튼 */}
        <div className={`mt-40 w-full max-lg:mt-24`}>
          <StyledButtons
            className={`${writedName !== `` && writedAge !== `` ? `` : `pointer-events-none !bg-primary-600 !text-grey-300`} w-full`}
            formMode={`mode1`}
            colorMode={`mode1`}
            text='신청하기'
          />
        </div>
      </div>
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
