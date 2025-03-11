// 훅
import React from 'react';

// 컴포넌트
import MediaDescriptionSection1 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection1';
import MediaDescriptionSection2 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection2';
import MediaDescriptionSection3 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection3';
import MediaDescriptionSection4 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection4';
import StyledButtons from '@/components/common/styledButtons';

const linkData = [
  {
    src: `/public/images/mediacenter/cgn_rounded.png`,
    data: [
      {
        title: `CGN 공식 유튜브`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
      {
        title: `CGN 공식 인스타그램`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
      {
        title: `CGN 공식 카카오채널`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
    ],
  },
  {
    src: `/public/images/mediacenter/fondant_rounded.png`,
    data: [
      {
        title: `Fondant 공식 유튜브`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
      {
        title: `Fondant 공식 인스타그램`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
      {
        title: `Fondant 공식 카카오채널`,
        link: `https://www.youtube.com/channel/UC9Q4n4l8Z1YK5J7ZP7eJ1OQ`,
      },
    ],
  },
];

const MediaDescription = () => {
  return (
    <section className={`w-full`}>
      <MediaDescriptionSection1 />
      <MediaDescriptionSection2 />
      <MediaDescriptionSection3 />
      <MediaDescriptionSection4 />
      <section
        className={`flex w-full flex-col items-center justify-start bg-secondary-blue pb-120 pt-120`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-center justify-start`}
        >
          <div className={`mb-40 text-center`}>
            <p className={`text-bold48 mb-16 text-white-solid`}>
              소셜&오픈 플랫폼
            </p>
            <p className={`text-regular18 text-grey-50`}>
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
                className={`flex w-full items-center justify-start rounded-16 bg-white-solid px-40 py-40`}
              >
                <img
                  className={`mr-60 h-120 w-120 object-cover`}
                  src={item.src}
                  width={120}
                  height={120}
                  alt=''
                />
                <div
                  className={`flex w-full items-center justify-start gap-40`}
                >
                  {item.data?.map((item, idx) => (
                    <div
                      className={`flex w-full max-w-300 flex-col items-start justify-start gap-16`}
                    >
                      <p className={`text-bold24 text-grey-900`}>
                        {item?.title}
                      </p>
                      <StyledButtons
                        text={`바로가기`}
                        formMode={`mode2-r`}
                        colorMode={`mode2`}
                        onClick={() => {
                          window.open(item?.link, '_blank');
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MediaDescription;
