import React from 'react';

const IntroduceCEO = () => {
  return (
    <>
      <div
        className={`mt-80 flex h-663 w-full flex-col items-center justify-center bg-secondary-brown`}
      >
        <div className={`flex w-full max-w-1200 gap-80`}>
          <img
            className={`h-550 w-480`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/CEO.png`}
            width={480}
            height={550}
            alt=''
          />
          <div
            className={`maw-w-640 flex w-full flex-col items-start justify-start gap-24`}
          >
            <div className={`flex w-full justify-start`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/start_text_bucket.svg`}
                className={`h-70 w-86`}
                width={86}
                height={70}
                alt=''
              />
            </div>
            <p className={`text-regular48 line-clamp-3 text-white-solid`}>
              방송국이면서{' '}
              <span className={`text-bold48 text-primary-500`}>
                광고를 하지 않고
              </span>
              <br />
              플랫폼이면서{' '}
              <span className={`text-bold48 text-primary-500`}>
                사용료를 받지 않는
                <br />
                이유는
              </span>
            </p>
            <p className={`text-bold32 line-clamp-2 text-white-solid`}>
              그리스도의 순전한 복음이 모든 사람들에게
              <br />
              전해지길 소망하기 때문입니다.
            </p>
            <div className={`flex w-full justify-end`}>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/end_text_bucket.svg`}
                className={`h-70 w-86`}
                width={86}
                height={70}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex h-full max-h-850 w-full flex-col items-center justify-start pb-160 pt-120`}
      >
        <div
          className={`flex h-full max-h-570 w-full max-w-1200 flex-col items-start justify-start gap-40 bg-[url(/public/images/introduce/ceo_background.png)] bg-cover bg-center bg-no-repeat pb-98 pr-265 pt-60`}
        >
          <div className={`pr-100`}>
            <p className={`text-bold40 line-clamp-1 text-grey-900`}>
              안녕하세요. CGN 대표 전진국 입니다.
            </p>
            <p className={`text-bold18 mt-12 line-clamp-3 text-grey-900`}>
              CGN은 위성과 인터넷, IPTV, 유튜브 그리고 국내 최초 인공지능 기반의
              OTT 플랫폼 ‘퐁당’에 이르기까지 복음의 대상에 닿을 수 있는 가장
              효과적인 방법으로 오직 복음만을 전하고 있습니다. 방송국이면서
              광고를 하지 않고, 플랫폼이면서 사용료를 받지 않는 이유는
              그리스도의 순전한 복음이 모든 사람들에게 전해지길 소망하기
              때문입니다.
            </p>
          </div>
          <p className={`text-regular18 line-clamp-3 text-grey-500`}>
            이러한 우리의 노력은 어디서나 모두에게 복음을 전하는 플랫폼으로 열매
            맺고 있습니다. 전 세계 6개국(미주, 일본, 대만, 태국, 인도네시아,
            프랑스)에 세운 지사를 통해 7개의 언어권에 현지화된 영적 콘텐츠를
            공급하고 있습니다. 또한 국내 교회의 다음 세대 양육을 위해
            ‘퐁당교회학교’ 콘텐츠를 지원하고, ‘퐁당 미디어 아카데미’를 통해
            교회의 효과적인 미디어 사역을 돕고 있습니다.{' '}
          </p>
          <p className={`text-regular18 line-clamp-4 text-grey-500`}>
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
