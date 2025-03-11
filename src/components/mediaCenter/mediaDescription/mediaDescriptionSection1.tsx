import React from 'react';

const MediaDescriptionSection1 = () => {
  return (
    <section
      className={`relative flex h-851 w-full flex-col items-center justify-start`}
    >
      <div
        className={`absolute left-0 top-0 z-10 h-460 w-full bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(/public/images/mediacenter/title_background.png)`,
        }}
      ></div>
      <img
        className={`z-20 mt-54 h-50 w-226 object-cover`}
        src={`/public/images/mediacenter/fondant_logo.png`}
        width={226}
        height={50}
        alt=''
      />
      <img
        className={`z-20 mt-36 h-529 w-257 object-cover`}
        src={`/public/images/mediacenter/title_phone.png`}
        width={257}
        height={529}
        alt=''
      />

      <div
        className={`mt-22 flex flex-col items-center justify-start gap-12 text-center`}
      >
        <h2 className={`text-bold40 text-grey-900`}>ABOUT FONDANT 2.0</h2>
        <p className={`text-regular24 text-grey-500`}>
          국내 최초 기독 OTT 퐁당(fondant)은 앱, 웹, 스마트TV를 통해
          <br />
          다양한 콘텐츠와 서비스를 전 세계에 무료로 제공 중이며
          <br />
          성도와 교회가 사용할 수 있는 크리스천 일상 플랫폼입니다.
        </p>
      </div>
    </section>
  );
};

export default MediaDescriptionSection1;
