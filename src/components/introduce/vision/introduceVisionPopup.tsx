// 훅
import React, { useEffect } from 'react';

// 컴포넌트
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroduceVisionPopup = ({ popupOpen, setPopupOpen }) => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popupOpen]);

  // 로고파일 다운로드
  const documentDownload = () => {
    const url = `${import.meta.env.VITE_PUBLIC_URL}data/logo.zip`;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo.zip'; // 다운로드할 파일 이름
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const colorData = [
    {
      id: 0,
      colorType: `Corporate Mark`,
      colorTitle: `CGN Orange`,
      colorCode: `#ff6b00`,
      colorCodeSub1: `#ff6b00`,
      colorCodeSub2: `PANTONE 1505 C`,
      colorCodeSub3: `C0 M71 Y100 K0`,
      colorCodeSub4: `R255 G107 B0`,
    },
    {
      id: 1,
      colorType: `Matching Color`,
      colorTitle: `CGN Light Gray`,
      colorCode: `#CBC3BB`,
      colorCodeSub1: `#cbc3bb`,
      colorCodeSub2: `PANTONE Warmgray 2 C`,
      colorCodeSub3: `C0 M71 Y100 K0`,
      colorCodeSub4: `R255 G107 B0`,
    },
    {
      id: 2,
      colorType: `Logotype`,
      colorTitle: `CGN Dark Gray`,
      colorCode: `#4A4F54`,
      colorCodeSub1: `#4a4f54`,
      colorCodeSub2: `PANTONE 7540 C`,
      colorCodeSub3: `C0 M71 Y100 K0`,
      colorCodeSub4: `R255 G107 B0`,
    },
  ];

  return (
    <>
      <div
        className={`${popupOpen ? `` : `hidden`} fixed left-0 top-0 z-[100] h-screen w-screen bg-grey-900 opacity-95`}
      ></div>
      <div
        className={`${popupOpen ? `` : `hidden`} fixed left-[50%] top-[50%] z-[110] flex h-787 w-full max-w-960 translate-x-[-50%] translate-y-[-50%] transform flex-col items-center justify-start bg-white-solid pt-24 max-lg:h-[calc(100%-10px)] max-lg:w-[calc(100%-10px)]`}
      >
        <div
          className={`mb-60 flex w-full flex-col items-start justify-center px-40 max-lg:px-16`}
        >
          <div className={`mb-8 flex w-full items-center justify-end`}>
            <button
              onClick={() => {
                setPopupOpen(false);
              }}
              className={`px-14 py-14`}
            >
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/close_grey_900.svg`}
                alt=''
              />
            </button>
          </div>
          <div
            className={`mb-4 flex w-full items-start justify-between max-lg:flex-col max-lg:items-center`}
          >
            <div
              className={`flex flex-col justify-start max-lg:mb-20 max-lg:items-center`}
            >
              <p
                className={`text-bold40 max-lg:text-bold24 mb-4 text-grey-900`}
              >
                브랜드 아이덴티티
              </p>
              <p
                className={`text-regular18 max-lg:text-regular16 text-grey-400`}
              >
                Brand Identity
              </p>
            </div>
            <button
              onClick={() => {
                documentDownload();
              }}
              className={`flex h-40 w-113 items-center justify-center rounded-4 bg-grey-900`}
            >
              <span className={`text-regular14 text-white-solid`}>
                CI 다운로드
              </span>
            </button>
          </div>
        </div>

        <div className={`flex w-full px-40 max-lg:px-16`}>
          <span className={`h-1 w-full border-t-3 border-grey-900`}></span>
        </div>

        <div
          className={`mb-20 mr-5 mt-20 flex flex-col items-start justify-start gap-60 overflow-y-scroll pb-40 pl-40 pr-35 pt-40 max-lg:pl-16 max-lg:pr-11`}
        >
          <div className={`w-full`}>
            <div className={`mb-24`}>
              <p
                className={`text-bold24 max-lg:text-bold16 mb-4 text-grey-900`}
              >
                로고
              </p>
              <p className={`text-regular14 text-grey-400`}>Wordmark</p>
            </div>
            <div className={`mb-40 flex items-center justify-center gap-60`}>
              <img
                className={`h-50 w-140 object-contain max-lg:h-35 max-lg:w-100`}
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/cgn_popup_content_logo_orange.png`}
                width={140}
                height={50}
                alt=''
              />
              <img
                className={`h-50 w-140 object-contain max-lg:h-35 max-lg:w-100`}
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/cgn_popup_content_logo_grey.png`}
                width={140}
                height={50}
                alt=''
              />
            </div>
            <div>
              <p
                className={`text-regular16 max-lg:text-regular14 text-grey-500`}
              >
                CGN의 로고는 콜론(:)을 모티브로 합니다. 이는 진리 안에서
                무엇이든 될 수 있는 CGN의 자유로운 확장성을 의미합니다. 콜론은
                성경의 장과 절을, 대본에서 등장인물과 대사 사이를 구분합니다.
                콜론 뒤의 대사로 등장인물의 캐릭터와 정체성이 드러나는 것처럼
                CGN 뒤에 붙는 말들로 CGN의 정체성이 만들어집니다. CGN은 새로운
                챕터에서 다양한 사역과 도전을 써 내려갈 것입니다. 본 로고는
                CGN의 아이덴티티를 시각적으로 전달하는 가장 핵심적인 요소입니다.
                로고의 형태나 색상을 변형하여 사용하지 않도록 세심한 주의를
                요하며 어떤 상황에서도 승인된 CI 파일만 사용해야 합니다.
              </p>
            </div>
          </div>
          <div
            className={`flex w-full flex-col items-start justify-start gap-24`}
          >
            <div className={``}>
              <p
                className={`text-bold24 max-lg:text-bold16 mb-4 text-grey-900`}
              >
                조합형
              </p>
              <p className={`text-regular14 text-grey-400`}>Signature</p>
            </div>
            <div
              className={`flex h-200 w-full items-center justify-between gap-40 max-lg:h-212`}
            >
              <div
                style={{
                  backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_logo_set_horizon.png` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/logo_set_horizon.png`})`,
                }}
                className={`h-full w-full bg-grey-50 bg-contain bg-center bg-no-repeat px-16 py-24 max-lg:px-19 max-lg:py-9`}
              >
                <span
                  className={`text-regular14 max-lg:text-regular12 text-grey-900`}
                >
                  가로형
                </span>
              </div>

              <div
                style={{
                  backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_logo_set_vertical.png` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/logo_set_vertical.png`})`,
                }}
                className={`h-full w-full bg-grey-50 bg-contain bg-center bg-no-repeat px-16 py-24 max-lg:px-19 max-lg:py-9`}
              >
                <span
                  className={`text-regular14 max-lg:text-regular12 text-grey-900`}
                >
                  세로형
                </span>
              </div>
            </div>
            <div>
              <p
                className={`text-regular16 max-lg:text-regular14 text-grey-500`}
              >
                CGN의 시그니처는 영문 가로형, 영문 세로형으로 각 두 가지 색상을
                적용할 수 있습니다.
                <br />
                제공된 CI 파일만 사용이 가능하며, 비례나 간격, 크기를 임의로
                변경할 수 없으며 사용 규정을 준수하여야 합니다.
              </p>
            </div>
          </div>
          <div className={`w-full`}>
            <div className={``}>
              <p
                className={`text-bold24 max-lg:text-bold16 mb-4 text-grey-900`}
              >
                색
              </p>
              <p className={`text-regular14 text-grey-400`}>Color</p>
            </div>
            <div
              className={`flex h-260 items-center justify-center gap-40 max-lg:h-fit max-lg:flex-col max-lg:gap-0`}
            >
              {colorData?.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex h-full w-151 items-center justify-center gap-9 max-lg:h-157 max-lg:w-289 max-lg:items-center max-lg:justify-start max-lg:gap-20 max-lg:px-12 max-lg:py-24 lg:flex-col lg:text-center`}
                >
                  <div
                    className={`flex flex-col items-center justify-start gap-9 max-lg:w-114`}
                  >
                    <div
                      className={`flex w-full flex-col items-center justify-center max-lg:items-start`}
                    >
                      <p className={`text-regular12 text-grey-900`}>
                        {item?.colorType}
                      </p>
                      <p
                        className={`text-bold18 max-lg:text-bold16 text-grey-900`}
                      >
                        {item?.colorTitle}
                      </p>
                    </div>
                    <div
                      style={{ background: `${item?.colorCode}` }}
                      className={`h-60 w-60 rounded-999`}
                    ></div>
                  </div>
                  <div className={``}>
                    <p className={`text-regular12 text-grey-500`}>
                      {item?.colorCodeSub1}
                    </p>
                    <p className={`text-regular12 text-grey-500`}>
                      {item?.colorCodeSub2}
                    </p>
                    <p className={`text-regular12 text-grey-500`}>
                      {item?.colorCodeSub3}
                    </p>
                    <p className={`text-regular12 text-grey-500`}>
                      {item?.colorCodeSub4}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className={`text-bold16 text-grey-900`}>
                CGN 오렌지 컬러는 CGN의 열정과 용기를 반영합니다.
              </p>
              <p
                className={`text-regular16 max-lg:text-regular14 text-grey-500`}
              >
                CGN은 복음이 필요한 모두를 향해 친근하고 따뜻하게 다가가며
                담대하게 복음을 전합니다.
                <br />
                CGN의 색상 표현은 매뉴얼에 명시된 Pantone Color를 표준으로
                합니다. 전용 색상은 CGN의 이미지를 전달하는 중요한 수단이므로
                지정된
                <br className={`max-lg:hidden`} />
                색상을 지속적으로 정확하게 사용하여야 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroduceVisionPopup;
