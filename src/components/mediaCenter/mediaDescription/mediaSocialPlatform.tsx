// 훅
import React from 'react';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const linkData = [
  {
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/cgn_rounded.png`,
    data: [
      {
        title: `CGN 공식 유튜브`,
        link: `https://www.youtube.com/@cgn`,
      },
      {
        title: `CGN 공식 인스타그램`,
        link: `https://www.instagram.com/cgn_korea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`,
      },
      {
        title: `CGN 공식 카카오채널`,
        link: `http://pf.kakao.com/_xlWBad`,
      },
    ],
  },
  {
    src: `${import.meta.env.VITE_PUBLIC_URL}images/mediacenter/fondant_rounded.png`,
    data: [
      {
        title: `Fondant 공식 유튜브`,
        link: `https://www.youtube.com/@fondantott`,
      },
      {
        title: `Fondant 공식 인스타그램`,
        link: `https://www.instagram.com/fondant_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`,
      },
      {
        title: `Fondant 공식 카카오채널`,
        link: `http://pf.kakao.com/_xnIInb`,
      },
    ],
  },
];

const MediaSocialPlatform = ({ sections }) => {
  return (
    <section
      ref={el => {
        sections.current[3] = el;
      }}
      className={`flex w-full flex-col items-center justify-start bg-secondary-blue pb-120 pt-120 max-lg:px-16 max-lg:pb-60 max-lg:pt-60`}
    >
      <div
        data-aos='fade-up'
        className={`flex w-full max-w-1200 flex-col items-center justify-start`}
      >
        <div className={`mb-40 text-center max-lg:mb-24`}>
          <p
            className={`text-bold48 max-lg:text-bold24 mb-16 text-white-solid`}
          >
            소셜&오픈 플랫폼
          </p>
          <p className={`text-regular18 max-lg:text-regular14 text-grey-50`}>
            유튜브, 인스타그램, 카카오톡 채널을 통해
            <br />
            CGN과 퐁당 소식을 쉽게 접하실 수 있습니다.
          </p>
        </div>

        <div
          className={`flex w-full flex-col items-center justify-center gap-24`}
        >
          {linkData?.map((item, idx) => (
            <div
              key={idx}
              className={`flex w-full items-center justify-start rounded-16 bg-white-solid px-40 py-40 max-lg:flex-col max-lg:px-24`}
            >
              <img
                className={`h-120 w-120 object-cover max-lg:mb-40 lg:mr-60`}
                src={item.src}
                width={120}
                height={120}
                alt=''
              />
              <div
                className={`flex w-full items-center justify-start gap-40 max-lg:flex-col`}
              >
                {item.data?.map((obj, idx, all) => (
                  <div
                    key={idx}
                    className={`${idx === all?.length - 1 ? 'max-lg:border-b-0' : 'max-lg:border-b-1 max-lg:pb-40'} flex w-full max-w-300 flex-col items-start justify-start gap-16 max-lg:items-center max-lg:gap-12 max-lg:border-grey-100`}
                  >
                    <p className={`text-bold24 text-grey-900`}>{obj?.title}</p>
                    <StyledButtons
                      text={`바로가기`}
                      className={`max-lg:h-32 max-lg:px-16`}
                      formMode={`mode2-r`}
                      colorMode={`mode2`}
                      onClick={() => {
                        window.open(obj?.link, '_blank');
                      }}
                    ></StyledButtons>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSocialPlatform;
