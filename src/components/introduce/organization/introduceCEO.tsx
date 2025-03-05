// 훅
import React from 'react';

const IntroduceCEO = () => {
  return (
    <>
      <div
        className={`mt-80 flex h-663 w-full flex-col items-center justify-center bg-secondary-brown max-lg:mt-0 max-lg:h-795 max-lg:justify-start max-lg:px-16 max-lg:pt-16`}
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
            className={`flex w-full max-w-640 flex-col items-start justify-start gap-24 max-lg:max-w-361 max-lg:items-center max-lg:gap-0`}
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
              방송국이면서{' '}
              <span
                className={`text-bold48 max-lg:text-bold24 text-primary-500`}
              >
                광고를 하지 않고
                <span className={`lg:hidden`}>&nbsp;</span>
              </span>
              <br className={``} />
              플랫폼이면서{' '}
              <span
                className={`text-bold48 max-lg:text-bold24 text-primary-500`}
              >
                사용료를 받지 않는<span className={`lg:hidden`}>&nbsp;</span>
                <br className={`max-lg:hidden`} />
                이유는
              </span>
            </p>
            <p
              className={`text-bold32 max-lg:text-bold18 line-clamp-2 text-white-solid max-lg:line-clamp-none`}
            >
              그리스도의 순전한 복음이 모든 사람들에게
              <span>&nbsp;</span>
              <br className={`max-lg:hidden`} />
              전해지길 소망하기 때문입니다.
            </p>
            <div className={`flex w-full justify-end max-lg:mt-24`}>
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
        className={`flex h-full max-h-850 w-full flex-col items-center justify-start pb-160 pt-120 max-lg:px-16 max-lg:pb-60 max-lg:pt-60`}
      >
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introduce/ceo_background.png)`,
          }}
          className={`flex h-full max-h-570 w-full max-w-1200 flex-col items-start justify-start gap-40 bg-cover bg-center bg-no-repeat pb-98 pr-265 pt-60 max-lg:max-h-708 max-lg:gap-32 max-lg:!bg-[url()] max-lg:pb-0 max-lg:pr-0 max-lg:pt-0`}
        >
          <div className={`pr-100 max-lg:pr-0`}>
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
              CGN은 위성과 인터넷, IPTV, 유튜브 그리고 국내 최초 인공지능 기반의
              OTT 플랫폼 ‘퐁당’에 이르기까지 복음의 대상에 닿을 수 있는 가장
              효과적인 방법으로 오직 복음만을 전하고 있습니다. 방송국이면서
              광고를 하지 않고, 플랫폼이면서 사용료를 받지 않는 이유는
              그리스도의 순전한 복음이 모든 사람들에게 전해지길 소망하기
              때문입니다.
            </p>
          </div>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-3 text-grey-500 max-lg:line-clamp-none`}
          >
            이러한 우리의 노력은 어디서나 모두에게 복음을 전하는 플랫폼으로 열매
            맺고 있습니다. 전 세계 6개국(미주, 일본, 대만, 태국, 인도네시아,
            프랑스)에 세운 지사를 통해 7개의 언어권에 현지화된 영적 콘텐츠를
            공급하고 있습니다. 또한 국내 교회의 다음 세대 양육을 위해
            ‘퐁당교회학교’ 콘텐츠를 지원하고, ‘퐁당 미디어 아카데미’를 통해
            교회의 효과적인 미디어 사역을 돕고 있습니다.{' '}
          </p>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500 max-lg:line-clamp-none`}
          >
            CGN은 앞으로 ‘선교 미디어’로서 다양한 문화적 배경을 지닌 시청자들을
            위한 콘텐츠를 개발하여 더욱 적극적으로 다가가겠습니다. 또한 발전하고
            있는 AI 기술을 활용하여 보다 다양한 멀티 기독 플랫폼으로 나아갈
            것입니다. 이를 위해서는 여러분의 기도와 지원이 필요합니다. CGN이
            계속해서 순수한 복음 콘텐츠를 한국 교회와 다음 세대, 선교지와 땅
            끝의 한 영혼에게 전할 수 있도록 기도와 후원으로 함께 해주시길
            부탁드립니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroduceCEO;
