// 훅
import React from 'react';

const IntroduceCEO = () => {
  return (
    <section data-aos='fade-up' className={`w-full max-lg:pb-120`}>
      <div
        className={`mt-80 flex h-fit w-full flex-col items-center justify-center bg-secondary-brown px-16 pb-52 pt-61 max-lg:mt-0 max-lg:justify-start max-lg:px-16 max-lg:pb-40 max-lg:pt-16`}
      >
        <div
          className={`flex w-full max-w-1200 gap-80 max-lg:flex-col max-lg:items-center max-lg:gap-40`}
        >
          <img
            className={`h-full max-h-550 w-full max-w-480 object-cover max-lg:max-w-361`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/CEO.png`}
            width={480}
            height={550}
            alt=''
          />
          <div
            className={`flex w-full max-w-604 flex-col items-start justify-start gap-24 max-lg:max-w-361 max-lg:gap-0`}
          >
            <div className={`flex w-full justify-start max-lg:mb-24`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/start_text_bucket.svg`}
                className={`h-70 w-86 max-lg:h-40 max-lg:w-50`}
                width={86}
                height={70}
                alt=''
              />
            </div>
            <p
              className={`text-regular48 max-lg:text-regular24 line-clamp-3 text-white-solid max-lg:mb-16 max-lg:line-clamp-none max-lg:pr-30`}
            >
              <span
                className={`text-bold48 max-lg:text-bold24 text-primary-500`}
              >
                선교의 내일을 더(+, more)하는
                <span className={`lg:hidden`}>&nbsp;</span>
              </span>
              <br />
              미디어 선교의 선봉으로서
            </p>
            <p
              className={`text-bold32 max-lg:text-bold18 line-clamp-2 text-white-solid max-lg:mb-16 max-lg:line-clamp-none`}
            >
              세상 끝까지 복음을 전하기 위해 <br className={`lg:hidden`} />
              <br className={`max-lg:hidden`} />
              최선을 다하겠습니다.
            </p>
            <div className={`flex items-center justify-start`}>
              <div className={`text-white-solid`}>
                <p
                  className={`text-regular24 max-lg:text-regular14 text-white-solid`}
                >
                  CGN 대표
                </p>
                <p className={`text-bold24 max-lg:text-bold14`}>전진국</p>
              </div>
              <div className={`py-10 pl-161 max-lg:py-0 max-lg:pl-16`}>
                <img
                  className={`object-1cover h-60 w-172 max-lg:h-32 max-lg:w-92`}
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/ceo_signature.png`}
                  width={172}
                  height={60}
                  alt=''
                />
              </div>
            </div>
            <div className={`flex w-full justify-end max-lg:mt-29`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/end_text_bucket.svg`}
                className={`h-70 w-86 max-lg:h-40 max-lg:w-50`}
                width={86}
                height={70}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex h-full max-h-850 w-full flex-col items-center justify-start pb-160 pt-120 max-lg:bg-white-solid max-lg:px-16 max-lg:pb-60 max-lg:pt-60`}
      >
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introduce/ceo_background.png)`,
          }}
          className={`flex h-608 w-full max-w-1200 flex-col items-start justify-start bg-cover bg-center bg-no-repeat pr-227 max-lg:h-fit max-lg:max-h-[unset] max-lg:!bg-[url()] max-lg:px-0 max-lg:pb-0 max-lg:pt-0`}
        >
          <div className={`mb-40`}>
            <p
              className={`text-bold40 max-lg:text-bold24 line-clamp-1 text-grey-900 max-lg:line-clamp-none`}
            >
              안녕하세요.
              <span className={`max-lg:hidden`}>&nbsp;</span>
              <br className={`lg:hidden`} />
              CGN 대표 전진국 입니다.
            </p>
            <p
              className={`text-bold18 max-lg:text-bold16 mt-12 line-clamp-3 text-grey-900 max-lg:line-clamp-none`}
            >
              CGN이 하나님의 은혜 가운데 20주년을 맞이했습니다.
              <br />
              지난 20년 동안 CGN을 통해 전 세계 곳곳에 복음이 전해졌으며,
              <br />
              선교사님들과 한인 디아스포라가 영적으로 힘을 얻을 수 있도록 인도해
              주신 하나님께 모든 영광을 올려드립니다.
            </p>
          </div>
          <p
            className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:line-clamp-none`}
          >
            2005년, ‘온 세상을 위한 복음의 통로’라는 미션 아래 위성방송을 시작한
            CGN은 <br />
            변화하는 미디어 환경 속에서 인터넷, 유튜브, 모바일, IPTV, 드림온
            플러스(인터넷 셋톱박스), 기독 OTT ‘퐁당(Fondant)’ 등 다양한 플랫폼을
            활용해 복음을 전해 왔습니다. <br />
            <br />
            또한, AI와 데이터 기반 콘텐츠 전략을 도입해 보다 효과적이고 이용자
            친화적인 미디어 선교를 실현해 나가고 있습니다. <br />
            아울러 CGN의 6개 해외 지사(미국, 일본, 대만, 태국, 인도네시아,
            프랑스)는 현지 선교사 및 교회 공동체와 협력해 맞춤형 콘텐츠를
            제작하며 복음 확산에 힘쓰고 있습니다.
          </p>
          <br />
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500 max-lg:line-clamp-none`}
          >
            이 모든 여정은 하나님의 인도하심과 더불어 CGN을 사랑하고 기도해
            주시는 여러분의 헌신과 후원이 있었기에 가능했습니다. <br />
            100% 후원으로 운영되는 CGN이 지속 가능한 선교 방송으로 나아갈 수
            있도록 함께해 주신 후원자님들, 협력 교회, 그리고 동역자 여러분께
            진심으로 감사드립니다. <br />
          </p>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500 max-lg:line-clamp-none`}
          >
            성년이 된 CGN은 단순한 미디어 기관을 넘어 ‘선교의 내일을 더(+,
            more)하는’ 미디어 선교의 선봉으로서 맡겨진 사명에 최선을
            다하겠습니다.
          </p>
          <br />
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500 max-lg:line-clamp-none`}
          >
            건강한 영성과 끊임없는 혁신을 바탕으로 더욱 견고한 미디어선교
            플랫폼을 구축하고, 세상 끝까지 복음을 전하는 도구가 되겠습니다.{' '}
            <br />
            CGN의 20년을 함께해 주신 모든 분들께 다시 한번 감사드리며, 앞으로도
            하나님의 은혜 가운데 여러분과 함께 걸어가기를 소망합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceCEO;
