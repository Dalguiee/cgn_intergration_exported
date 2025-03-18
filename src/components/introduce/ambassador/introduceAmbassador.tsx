import ResponsiveScanner from '@/components/common/responsiveScanner';
import React from 'react';

const IntroduceAmbassador = () => {
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);
  return (
    <section
      className={`flex w-full flex-col items-center justify-start gap-40 px-16 pb-160 max-lg:gap-0 max-lg:pb-120 max-lg:pt-24`}
    >
      <div className={`w-full max-w-1200 max-lg:mb-24`}>
        <p
          className={`text-bold60 max-lg:text-bold24 mb-24 text-grey-900 max-lg:mb-16`}
        >
          CGN을 알리는 비저너리
          <br className={`lg:hidden`} /> (Visionary)
        </p>
        <p className={`text-bold40 max-lg:text-bold16 text-grey-900`}>
          홍보대사는 더 많은 사람들이 CGN의 비전에 동참할 수 있도록 인도하는
          <br className={`max-lg:hidden`} />
          <span className={`lg:hidden`}>&nbsp;</span>비저너리 역할을 하고
          있습니다.
        </p>
      </div>
      <img
        src={`${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/ambassador/mo_choi.png` : `${import.meta.env.VITE_PUBLIC_URL}images/ambassador/choi.png`} `}
        width={1200}
        height={713}
        className={`h-713 w-full max-w-1200 object-cover max-lg:mb-40 max-lg:h-306`}
        alt=''
      />
      <div
        className={`flex w-full max-w-1200 items-start justify-between max-lg:flex-col`}
      >
        <div>
          <p
            className={`text-bold32 max-lg:text-bold18 text-grey-900 max-lg:mb-12 max-lg:text-primary-500`}
          >
            골프 선수 최경주
          </p>
        </div>
        <div>
          <p
            className={`text-bold24 max-lg:text-bold16 mb-24 text-grey-900 max-lg:mb-32`}
          >
            ”처음 CGN을 접한 건 휴스턴에 살고 있을 때였습니다.
            <br />
            당시 한 선교사님을 통해 CGN 안테나를 설치 받게 됐어요.
            <br />
            방송을 처음 보고 저도 모르게 감동의 눈물을 흘렸습니다.”
          </p>
          <p className={`text-regular18 max-lg:text-regular14 text-grey-500`}>
            최경주 선수는 2007년부터 홍보대사로 CGN과 함께하고 있습니다.
            <br />
            CGN의 미디어 사역이 선교사들과 한인 디아스포라들에게
            <br />
            얼마나 큰 힘이 될지 자신의 경험을 통해 알고 있기 때문입니다.
            <br />
            그리고 매년 ‘CGN후원골프대회’ 메인 호스트로 CGN 후원에 동참하고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceAmbassador;
