import ResponsiveScanner from '@/components/common/responsiveScanner';
import React from 'react';

const IntroduceChairman = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);

  return (
    <>
      <div
        className={`w-full max-w-1200 pb-120 pt-80 max-lg:px-16 max-lg:pb-60 max-lg:pt-24`}
      >
        <div
          className={`flex items-start justify-center gap-26 max-lg:flex-col-reverse max-lg:items-center`}
        >
          <div
            className={`mt-34 flex flex-col items-start justify-start gap-40 max-lg:gap-16`}
          >
            <div className={`flex w-full justify-end lg:hidden`}>
              <p
                className={`text-regular12 line-clamp-2 text-end text-grey-900`}
              >
                온누리선교재단 이사장
                <br /> <span className={`text-bold12`}>이재훈</span>
              </p>
            </div>

            <p
              className={`text-regular48 max-lg:text-regular24 line-clamp-3 text-grey-900`}
            >
              지금 전세계는
              <br />
              <span className={`text-bold48 max-lg:text-bold24`}>
                디지털 혁명
              </span>
              이 이루어지
              <br className={`max-lg:hidden`} />고 있습니다.
            </p>

            <p
              className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500`}
            >
              삶에 필요한 모든 것들이 디지털 프로그램을 통해 빠르게 공급되
              <br className={`max-lg:hidden`} />고 있습니다. 이러한 시대가
              도래한 이유를 선교적인 시각에서 보
              <br className={`max-lg:hidden`} /> 면 바로 마지막 때가 가까워졌기
              때문입니다. 그래서 하나님께서
              <br className={`max-lg:hidden`} /> 는 복음이 빨리 전해지는 길을
              만들어 주신 것입니다.
            </p>

            <p
              className={`text-regular24 line-clamp-2 text-grey-900 max-lg:hidden`}
            >
              온누리선교재단 이사장
              <br /> <span className={`text-bold24`}>이재훈</span>
            </p>

            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/chairman_signature.png`}
              className={`h-50 w-172 object-cover max-lg:hidden`}
              width={175}
              height={50}
              alt=''
            />
          </div>
          <img
            className={`h-full max-h-708 w-full max-w-733 object-cover`}
            src={`${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_chairman.png` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/chairman.png`} `}
            width={733}
            height={708}
            alt=''
          />
        </div>
      </div>
      <div
        className={`flex w-full max-w-1200 flex-col items-start justify-start gap-40 pb-160 pt-120 max-lg:gap-32 max-lg:bg-white-solid max-lg:px-16 max-lg:pb-60 max-lg:pt-60`}
      >
        <div>
          <p
            className={`text-bold40 max-lg:text-bold24 line-clamp-1 text-grey-900 max-lg:line-clamp-2`}
          >
            안녕하세요
            <span className={`max-lg:hidden`}>&nbsp;</span>
            <br className={`lg:hidden`} />
            CGN 이사장 이재훈 목사입니다.
          </p>
          <p
            className={`text-bold18 max-lg:text-bold16 mt-12 line-clamp-1 text-grey-900 max-lg:line-clamp-3`}
          >
            초대교회 때는 로마의 길을 통해 복음이 전해졌지만, 지금은 플랫폼을
            통해 빠르게 전세계 곳곳으로 복음이 전해지고 있습니다.{' '}
          </p>
        </div>
        <p
          className={`text-regular18 max-lg:text-regular14 line-clamp-3 text-grey-500 max-lg:line-clamp-none`}
        >
          이러한 시대에 CGN은 ‘좋은 소식을 전하는 발’(롬 10:15)로서 시대적
          소명을 다하고 있습니다.
          <br />
          팬데믹으로 인해 예배와 양육이 멈춘 때에 시작한 기독 OTT ‘퐁당’은
          온라인을 통해 한국교회와 선교지에 건강한 복음 콘텐츠를 공급하고
          있습니다
          <br />
          CGN이 ‘또 하나의 교회’, ‘선교에 헌신한 교회’로서 디지털 시대에 좋은
          소식을 전하는 발로 쓰임 받고 있는 것입니다.
        </p>
        <p
          className={`text-regular18 max-lg:text-regular14 line-clamp-3 text-grey-500 max-lg:line-clamp-none`}
        >
          앞으로의 목회는 성도들에게 좋은 콘텐츠를 소개해 주는 방향으로 변화하게
          될 것입니다. 그리고 콘텐츠를 통해 복음이 전해지게 될 것이고, 온라인을
          통해 콘텐츠가 공유되고,
          <br />
          커뮤니티가 양육하는 시대가 될 것입니다. 이 시대에 CGN이 한국교회
          그리고 선교사님들과 함께 연결되어 다음 세대와 땅끝, 새롭게 예수님을
          믿는 사람들에게 계속해서 좋은
          <br />
          소식을 전할 수 있도록 기도해 주시고, 함께해 주십시오.
        </p>
      </div>
    </>
  );
};

export default IntroduceChairman;
