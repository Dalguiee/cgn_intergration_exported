import React from 'react';

const IntroduceDirections = () => {
  const addressData = [
    { id: 0, name: `주소`, value: `(우) 04384, 서울 용산구 서빙고로 269 CGN` },
    { id: 1, name: `연락처`, value: `+82-2-796-9800` },
    { id: 2, name: `팩스`, value: `+82-2-749-6638` },
    {
      id: 3,
      name: `지하철`,
      value: `경의중앙선 서빙고역 1번 출구(반포대교 방면) 약 5분 도보`,
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
          backgroundImage: `url(/public/images/introduce/directions_background.png)`,
        }}
        className={`h-843 w-full bg-cover bg-center bg-no-repeat pt-600`}
      >
        <div
          className={`mx-auto h-500 w-full max-w-1200 flex-shrink-0 rounded-16 bg-white-solid shadow-lg`}
        ></div>
      </div>
      <div
        className={`mb-160 flex h-947 w-full flex-col items-center justify-start pt-377`}
      >
        <div
          style={{
            backgroundImage: `url(/public/images/introduce/directions_content_background.png)`,
          }}
          className={`h-570 w-full max-w-1200 flex-shrink-0 bg-cover bg-center bg-no-repeat pt-70`}
        >
          <p className={`text-bold40 mb-24 text-grey-900`}>오시는 길</p>
          <div className={`flex flex-col items-start justify-start gap-8`}>
            {addressData?.map((item, idx) => (
              <p className={`flex items-center justify-start`}>
                <span className={`text-bold18 mr-24 w-120 text-grey-900`}>
                  {item?.name}
                </span>
                {item?.value ? (
                  <span className={`text-regular18 text-grey-500`}>
                    {item?.value}
                  </span>
                ) : (
                  ``
                )}
                {item?.valueTitle1 && item?.valueTitle2 ? (
                  <span className={`text-regular18 text-grey-500`}>
                    <span className={`mr-24`}>
                      <span>{item?.valueTitle1}</span>
                      <span className={`text-regular16 text-[#2EB700]`}>
                        {item?.value1}
                      </span>
                    </span>
                    <span>
                      <span>{item?.valueTitle2}</span>
                      <span className={`text-regular16 text-[#30A9FF]`}>
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
