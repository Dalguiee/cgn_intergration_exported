// 훅
import React from 'react';

// 컴포넌트
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroduceChairman = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start`}
    >
      {/* 상단 */}
      <div
        className={`w-full max-w-1200 pb-120 pt-80 max-lg:px-16 max-lg:pb-60 max-lg:pt-24`}
      >
        <div
          style={{
            backgroundImage: `url(${mobile ? `` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/chairman.png`} )`,
          }}
          className={`flex w-full items-start justify-center gap-26 bg-cover bg-center bg-no-repeat max-lg:flex-col-reverse max-lg:items-center max-lg:gap-24 lg:h-708`}
        >
          <div
            className={`mt-34 flex w-full flex-col items-start justify-start gap-40 max-lg:mt-0 max-lg:gap-16`}
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
              <span className={`text-bold48 max-lg:text-bold24`}>진리</span>를
              전하는
              <br />
              <span className={`text-bold48 max-lg:text-bold24`}>
                미디어의 역할
              </span>
              은
              <br />
              더욱 절실해지고 있습니다.
            </p>

            <p
              className={`text-regular18 max-lg:text-regular14 line-clamp-4 text-grey-500`}
            >
              지난 20년 동안 오직 복음의 진리만을
              <br />
              전하기 위해 도전해온 CGN의 사명은
              <br />
              앞으로 더욱 커질 것입니다.
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
            className={`right-0 h-full max-h-708 w-full max-w-733 object-cover lg:hidden`}
            src={`${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_chairman.png` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/chairman.png`} `}
            width={733}
            height={708}
            alt=''
          />
        </div>
      </div>
      {/* 하단 */}
      <div
        className={`flex w-full flex-col items-center justify-center bg-white-solid`}
      >
        <div
          className={`flex w-full max-w-1200 flex-col items-start justify-start gap-40 px-16 pb-160 pt-120 max-lg:gap-32 max-lg:pb-60 max-lg:pt-60`}
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
              className={`text-bold18 max-lg:text-bold16 mt-12 line-clamp-3 text-grey-900 max-lg:line-clamp-6`}
            >
              하용조 목사님의 선교에 대한 헌신으로 시작된 CGN의 미디어선교가
              어느덧 20주년을 맞이했습니다.
              <br />
              인간적인 시각으로는 불가능하게 보였던 이 사역이 지금까지 지속될 수
              있었던 것은,
              <br />
              순종하는 이들을 통해 일하시는 하나님의 은혜 덕분이라 고백할 수밖에
              없습니다.
            </p>
          </div>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-2 text-grey-500 max-lg:line-clamp-none`}
          >
            수많은 콘텐츠가 범람하는 이 시대에, 진리를 전하는 미디어의 역할은
            더욱 절실해지고 있습니다. <br />
            지난 20년 동안 오직 복음의 진리만을 전하기 위해 도전해온 CGN의
            사명은 앞으로 더욱 커질 것입니다.
          </p>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-3 text-grey-500 max-lg:line-clamp-none`}
          >
            CGN은 복음을 효과적으로 전할 수 있는 최적의 플랫폼을 활용해야 한다는
            믿음 아래, 해외 지사를 꾸준히 설립해 왔습니다. <br />
            또한 광고 없는 비영리 사역을 유지하며, 오직 순수한 후원만으로
            운영되고 있습니다. <br />
            앞으로도 하나님의 기쁜 소식, 곧 복음을 전하는 통로로서 맡겨진 시대적
            소명을 다하기 위해 최선을 다하겠습니다.
          </p>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-3 text-grey-500 max-lg:line-clamp-none`}
          >
            지난 20년 동안 기도와 후원으로 함께해 주신 모든 분들께 진심으로
            감사드립니다. <br />
            앞으로도 CGN을 향한 지속적인 관심과 기도, 그리고 후원을
            부탁드립니다.
          </p>
          <p
            className={`text-regular18 max-lg:text-regular14 line-clamp-3 indent-13 text-grey-500 max-lg:line-clamp-none max-lg:indent-4`}
          >
            모든 영광을 하나님께 올려드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroduceChairman;
