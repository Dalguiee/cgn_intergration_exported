import React from 'react';

// 커스텀 훅
import ResponsiveScanner from '@/components/common/responsiveScanner';

const ParticipateVolunteer = () => {
  const mobile = ResponsiveScanner('max-width: 1024px');

  return (
    <section
      className={`flex w-full flex-col items-center justify-start pb-160 pt-40 max-lg:pb-120 max-lg:pt-24`}
    >
      <div
        className={`flex w-full max-w-1200 flex-col items-center justify-start px-24 max-lg:px-16`}
      >
        <img
          src={
            mobile
              ? `${import.meta.env.VITE_PUBLIC_URL}images/activity/participate_volunteer_title.png`
              : `${import.meta.env.VITE_PUBLIC_URL}images/activity/mo_participate_volunteer_title.png`
          }
          className={`w-full object-cover`}
          alt=''
          width={1200}
          height={541}
        />
        {/* 가운데 라인 */}
        <div className={`my-40 w-12 border-t-3 border-grey-900`}></div>
        <div
          className={`mb-40 flex w-full flex-col items-start justify-start gap-24 max-lg:gap-12`}
        >
          <p className={`text-bold60 max-lg:text-bold24 text-grey-900`}>
            ‘드림온핸즈’는
          </p>
          <p className={`text-bold40 max-lg:text-bold16 text-grey-900`}>
            CGN의 사역을 돕기 위한 자원봉사단체입니다.
          </p>
          <p
            className={`text-bold24 max-lg:text-regular14 text-grey-900 max-lg:text-grey-500`}
          >
            개인의 시간과 노력, 헌신을 하나님께 드리는 마음으로{' '}
            <br className={`lg:hidden`} />
            미디어 사역에 참여하실 수 있습니다.
            <br />
            CGN과 함께 할 수 있는 ’드림온핸즈’에 많은 관심 바랍니다.
          </p>
        </div>
        <div
          className={`flex h-300 w-full items-center justify-center bg-[url(/public/images/activity/participate_volunteer_banner.png)] bg-cover bg-center bg-no-repeat max-lg:h-120`}
        >
          <div className={`text-center`}>
            <p
              className={`text-bold40 max-lg:text-bold16 text-white-solid max-lg:mb-4`}
            >
              자원봉사 참여 문의
            </p>
            <br className={`max-lg:hidden`} />
            <p className={`text-bold24 max-lg:text-bold16 text-white-solid`}>
              02-796-2243 후원기획실
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateVolunteer;
