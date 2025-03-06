// 훅
import HTMLReactParser from 'html-react-parser';
import React from 'react';

// 컴포넌트
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroduceDirections = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const addressData = [
    { id: 0, name: `주소`, value: `(우) 04384, 서울 용산구 서빙고로 269 CGN` },
    { id: 1, name: `연락처`, value: `+82-2-796-9800` },
    { id: 2, name: `팩스`, value: `+82-2-749-6638` },
    {
      id: 3,
      name: `지하철`,
      value: `경의중앙선 서빙고역 1번 출구(반포대교 방면)<br className={"lg:hidden"} />약 5분 도보`,
    },
    {
      id: 4,
      name: `버스`,
      valueTitle1: `간선)`,
      value1: ` 2016, 6211`,
      valueTitle2: `지선)`,
      value2: ` 400, 405`,
    },
  ];

  return (
    <section className={`w-full`}>
      <div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introduce/directions_background.png)`,
        }}
        className={`mt-80 h-843 w-full bg-cover bg-center bg-no-repeat pt-600 max-lg:mt-0 max-lg:h-275 max-lg:px-16 max-lg:pt-220`}
      >
        <div
          className={`mx-auto h-500 w-full max-w-1200 flex-shrink-0 rounded-16 bg-white-solid shadow-lg max-lg:h-200 max-lg:w-full`}
        ></div>
      </div>
      <div
        className={`mb-160 flex h-947 w-full flex-col items-center justify-start pt-377 max-lg:mb-120 max-lg:h-fit max-lg:px-16 max-lg:pt-185`}
      >
        <div
          style={{
            backgroundImage: `url(${mobile ? `` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/directions_content_background.png`} )`,
          }}
          className={`flex h-570 w-full max-w-1200 flex-shrink-0 flex-col bg-cover bg-center bg-no-repeat pt-70 max-lg:h-296 max-lg:max-w-361 max-lg:justify-end max-lg:pt-0`}
        >
          <p
            className={`text-bold40 max-lg:text-bold24 mb-24 text-grey-900 max-lg:mb-16`}
          >
            오시는 길
          </p>
          <div
            className={`flex flex-col items-start justify-start gap-8 max-lg:gap-16`}
          >
            {addressData?.map((item, idx) => (
              <p key={idx} className={`flex items-start justify-start`}>
                <span
                  className={`text-bold18 max-lg:text-bold14 mr-24 w-120 flex-shrink-0 text-grey-900 max-lg:mr-0 max-lg:w-72`}
                >
                  {item?.name}
                </span>
                {item?.value ? (
                  <span
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:line-clamp-2`}
                  >
                    {HTMLReactParser(item?.value)}
                  </span>
                ) : (
                  ``
                )}
                {item?.valueTitle1 && item?.valueTitle2 ? (
                  <span
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:line-clamp-2`}
                  >
                    <span className={`mr-24 max-lg:mr-6`}>
                      <span>{item?.valueTitle1}</span>
                      <span
                        className={`text-regular16 max-lg:text-regular14 text-[#2EB700]`}
                      >
                        {item?.value1}
                      </span>
                    </span>
                    <span>
                      <span>{item?.valueTitle2}</span>
                      <span
                        className={`text-regular16 max-lg:text-regular14 text-[#30A9FF]`}
                      >
                        {item?.value2}
                      </span>
                    </span>
                  </span>
                ) : (
                  ``
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceDirections;
