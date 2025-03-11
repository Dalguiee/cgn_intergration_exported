// 훅
import React from 'react';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const MediaDescriptionSection3 = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start bg-grey-50 pb-129 pt-100 max-lg:px-16 max-lg:pb-60 max-lg:pt-0`}
    >
      <div className={`w-full max-w-1200`}>
        <p
          className={`text-bold32 max-lg:text-bold24 mb-40 w-full text-grey-900 max-lg:mb-24 max-lg:text-center`}
        >
          이용 방법
        </p>

        <div
          className={`flex w-full items-center justify-center gap-24 max-lg:flex-col max-lg:gap-16`}
        >
          <div
            className={`flex h-370 w-full flex-col items-center justify-between rounded-16 bg-white-solid px-24 py-40 max-lg:h-300`}
          >
            <div className={`text-center`}>
              <p
                className={`text-bold24 max-lg:text-bold18 mb-21 text-grey-900 max-lg:mb-16`}
              >
                퐁당 어플리케이션
              </p>
              <p
                className={`text-regular16 max-lg:text-regular14 text-grey-500`}
              >
                구글 플레이스토어, 애플 앱스토어에서
                <br />
                ‘퐁당' 검색 후 앱을 다운로드하세요.
              </p>
            </div>
            <div className={`flex flex-col items-center justify-start gap-8`}>
              <StyledButtons
                className={`w-300 max-lg:h-48 max-lg:gap-8`}
                formMode={`mode1-r`}
                colorMode={`mode2`}
                playStoreMode={true}
                text={`플레이 스토어로 이동`}
              />
              <StyledButtons
                className={`w-300 max-lg:h-48 max-lg:gap-8`}
                formMode={`mode1-r`}
                colorMode={`mode2`}
                appStoreMode={true}
                text={`앱 스토어로 이동`}
              />
            </div>
          </div>
          <img
            className={`h-370 w-373 object-cover max-lg:hidden`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/fondant_app_logo.png`}
            width={373}
            height={370}
            alt=''
          />
          <div
            className={`flex h-370 w-full flex-col items-center justify-between rounded-16 bg-white-solid px-24 py-40 max-lg:h-244`}
          >
            <div className={`text-center`}>
              <p
                className={`text-bold24 max-lg:text-bold18 mb-21 text-grey-900 max-lg:mb-16`}
              >
                퐁당 웹
              </p>
              <p
                className={`text-regular16 max-lg:text-regular14 text-grey-500`}
              >
                웹에서 쉽게 퐁당을 이용할 수 있습니다.
                <br />
                지금 바로 만나보세요
              </p>
            </div>
            <div className={`flex flex-col items-center justify-start gap-8`}>
              <StyledButtons
                className={`w-300 max-lg:h-48`}
                formMode={`mode1-r`}
                colorMode={`mode2`}
                text={`퐁당 바로가기`}
              />
            </div>
          </div>
        </div>

        <div
          className={`mx-auto mt-24 flex h-181 max-w-384 flex-col items-center justify-between rounded-16 bg-white-solid px-24 py-40 text-center max-lg:mt-16 max-lg:h-172`}
        >
          <p className={`text-bold24 max-lg:text-bold18 text-grey-900`}>
            스마트TV
          </p>
          <p className={`text-regular16 max-lg:text-regular14 text-grey-500`}>
            삼성, LG, 구글 안드로이드 스마트TV에서
            <br />
            퐁당을 이용할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaDescriptionSection3;
