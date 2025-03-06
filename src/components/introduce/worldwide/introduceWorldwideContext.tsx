// 훅
import React from 'react';
import HTMLReactParser from 'html-react-parser';

// 컴포넌트
import CategoryList from '@/components/common/categoryList';
import ResponsiveScanner from '@/components/common/responsiveScanner';

// 데이터
const contextData = [
  {
    id: 0,
    land: `한국`,
    subtitle: `데이터가 없음`,
    titleSubscription: [`* 데이터가 없음`, `* 데이터가 없음`],
    mainText: `데이터가 없음`,
    programs: [
      `예배: 복음파, 성령파 교회의 은혜로운 주일예배 (요도바시 교회, 야마토 갈보리 교회 등)`,
      `말씀: 국내외 다양한 목회자들의 말씀강해 (디아스포라, 젊은 사역자, 여성사역자, 수화 메시지 등)`,
      `큐티: 1년 365일 매일매일 말씀묵상 프로그램`,
      `미고또바니키쿠: 전국 47개 도도부현 지역의 강단 메시지`,
      `세미나: 다양한 장르의 교육 세미나`,
      `문화: 크리스천 네비게이션, Touch(찬양), 크리스토크, SOON 등`,
      `어린이: 갓툰(일본어), 파푸스 키즈 어린이 예배, 시모베아의 대모험 등`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `데이터가 없음`,
      },
      {
        name: `전화`,
        value: `데이터가 없음`,
      },
      {
        name: `팩스`,
        value: `데이터가 없음`,
      },
      {
        name: `홈페이지`,
        value: `http://cgntv.net`,
      },
    ],
  },

  {
    id: 1,
    land: `미주`,
    subtitle: `The World is Ending, Christ is Working, We are Rolling`,
    titleSubscription: [
      `* 미주와 영어권의 잃어버린 젊은 세대들을 향한 영어 콘텐츠 제작`,
      `* 미주 한인 교포를 위한 방송`,
    ],
    mainText: `CGN AMERICA는 미주 지역을 비롯한 영어권의 잃어버린 영혼들을 위한 복음 콘텐츠 제작을 최우선 과제로 삼고 있습니다. 2005년부터 미주 지역에 거주하는 200만 한인들을 대상으로 24시간 방송을 진행해왔으며, 앞으로 중남미의 잃어버린 영혼들을 위한 스페인어 미디어 선교도 지속할 예정입니다.`,
    programs: [
      `The Final Project`,
      `Living Life`,
      `미션로그: 끝나지 않은 선교 이야기`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `3600 Wilshire Blvd #2030 Los Angeles CA, 90010`,
      },
      {
        name: `전화`,
        value: `+1-323-932-1200`,
      },
      {
        name: `홈페이지`,
        value: `https://www.youtube.com/@cgnamerica`,
      },
    ],
  },

  {
    id: 2,
    land: `일본`,
    subtitle: `1퍼센트의 기적을 향한 새로운 도전 'CGN Japan‘`,
    titleSubscription: [
      `* 47개 지역, 설교 네트워크 구축`,
      `* 무목 교회, 차세대, 드림온플러스 사역`,
    ],
    mainText: `CGN Japan은 2006년 개국 이래 일본 전국 47개 지역 약 2000여개 교회와 연결되어 설교 네트워크를 구축하였으며 이는 문화전도집회 ‘러브소나타’의 기반이 되고 있습니다. CGN Japan의 미디어 선교사역은 목회자가 없는 현지 무목 교회에 새로운 대안이 되고 있으며,소셜 컨텐츠 제작을 통해 차세대 전도 사역과 드림온플러스 보급을 통한 일본 복음화에 힘쓰고 있습니다.`,
    programs: [
      `예배: 복음파, 성령파 교회의 은혜로운 주일예배 (요도바시 교회, 야마토 갈보리 교회 등)`,
      `말씀: 국내외 다양한 목회자들의 말씀강해 (디아스포라, 젊은 사역자, 여성사역자, 수화 메시지 등)`,
      `큐티: 1년 365일 매일매일 말씀묵상 프로그램`,
      `미고또바니키쿠: 전국 47개 도도부현 지역의 강단 메시지`,
      `세미나: 다양한 장르의 교육 세미나`,
      `문화: 크리스천 네비게이션, Touch(찬양), 크리스토크, SOON 등`,
      `어린이: 갓툰(일본어), 파푸스 키즈 어린이 예배, 시모베아의 대모험 등`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `169-0073 2F,2-23-46 Hyakunincho, Shinjuku-ku, Tokyo, Japan`,
      },
      {
        name: `전화`,
        value: `+81-3-5338-6620`,
      },
      {
        name: `팩스`,
        value: `81-3-3366-0055`,
      },
      {
        name: `홈페이지`,
        value: `http://japan.cgntv.net`,
      },
    ],
  },

  {
    id: 3,
    land: `대만`,
    subtitle: `‘14억 중국과 전세계 중화권 복음화’ CGN Chinese`,
    titleSubscription: [
      `* 대만, 중국을 비롯한 전 세계 화인 교회 네트워크`,
      `* ‘말씀·가정·차세대’ 중심의 자체 프로그램 제작`,
    ],
    mainText: `CGN Chinese는 전세계 중화권 복음화를 위해 2008년 타이베이에 설립되었습니다. 화인 교회 주일예배, 말씀강해, 중국어QT(活潑的生命), 성광신학교 신학강좌 등 다양한 중화권 콘텐츠를 제작, 방송하고 있으며, ‘말씀·가정·차세대’ 중심의 자체 프로그램을 제작하고 있습니다. 대만GoodTV, ORTV 등의 기관들과 교류하며 전세계 중화권 복음화를 위해 나아가고 있습니다.`,
    programs: [
      `중국어QT (活潑的生命)`,
      `공중신학강좌`,
      `365일 공동체 성경읽기`,
      `청소년&아동 프로그램`,
      `국내외 화인교회 주일예배 말씀강해`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `9F-1, No. 296, Sec. 2, Zhongshan Rd., Zhonghe Dist.,New Taipei City, Taiwan (R.O.C.) 235026`,
      },
      {
        name: `전화`,
        value: `+886-2-2249-5122`,
      },
      {
        name: `팩스`,
        value: `+886-2-2249-5124`,
      },
      {
        name: `홈페이지`,
        value: `http://chinese.cgntv.net`,
      },
    ],
  },

  {
    id: 4,
    land: `태국`,
    subtitle: `‘아세안 복음 네트워크’ CGN Thai`,
    titleSubscription: [
      `* 태국 내 교단들과 협력 및 말씀 보급`,
      `* SNS 플랫폼을 통한 미디어 선교`,
    ],
    mainText: `CGN Thai는 아세안 복음 네트워크를 위해 방콕에 터를 잡았습니다. 기독교인이 1%에도 못 미치는 불교국가에서 CCT, EFT, 침례교단 등 태국 내 교단들과 긴밀한 협력 체제를 구축하며 SNS 플랫폼을 통하여 자체 제작한 양질의 콘텐츠를 보급하고 있습니다. CGN Thai가 제작한 콘텐츠를 보고 예수님을 모르는 사람들이 예수님을 알게 되고 영접하는 역사가 계속 일어나고 있습니다.`,
    programs: [
      `리빙라이프 - 1년 365일 말씀묵상 프로그램`,
      `리뷰바이블 - 성경말씀과 크리스천의 문화와 생활에 대해 리뷰 하는 복음증거 프로그램`,
      `I Believe Jesus - 간증 프로그램`,
      `Just A Minute - 1~2분 내로 축약한 메시지`,
      `God Night Good Night - 저녁 시간 신앙 에세이를 나누는 팟캐스트 프로그램`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `CGNTV THAI, 1st Floor, CCT B/D, 328 Phaya Thai Rd, Thanon Phetchaburi, Ratchathewi, Bangkok 10400`,
      },
      {
        name: `전화`,
        value: `+66-2-214-1557`,
      },
      {
        name: `팩스`,
        value: `+66-2-215-1865`,
      },
      {
        name: `홈페이지`,
        value: `https://www.youtube.com/@CGNTHAI`,
      },
    ],
  },

  {
    id: 5,
    land: `인도네시아`,
    subtitle: `‘교육과 문화의 연결고리’ CGN Indonesia`,
    titleSubscription: [
      `* 모바일 교육 콘텐츠 제작`,
      `* MNC Vision, Papua Channel, JayaTV와 협력한 현지어 방송`,
    ],
    mainText: `CGN 인도네시아는 2014년 9월 세계 최대의 무슬림 인구를 가진 인도네시아 자카르타에 설립 되었습니다. 2014년 4월 인도네시아 위성방송인 MNC Vision과 업무 협약을 맺고, 9월부터 LIFE 채널을 통해 현지어 방송을 시작했습니다. <즐거운 주일학교>, <God Toon>, <Bible Study> 등의 프로그램을 제작하여 인도네시아 교회의 영적 성장과 선교적 비전을 이룰 수 있도록 돕고 있습니다. 또한 미디어 아카데미와 다양한 세미나 등을 통해 현지인 미디어 사역자들을 세우고 있습니다.`,
    programs: [
      `즐거운 주일학교(Sekolah Minggu Gembira)`,
      `God Toon : 갓툰 인도네시아어 더빙`,
      `Bible Study : 성경공부 프로그램`,
      `내 인생을 바꾼 한 말씀 : 인도네시아 리더십 간증 프로그램`,
      `워십댄스 : 청소년을 위한 댄스 프로그램`,
    ],
    locationData: [
      {
        name: `주소`,
        value: `18 Office Park Tower A Lantai 17 Unit A, Jl. TB Simatupang Kav 18,<br />Kebagusan, Pasar minggu, Jakarta selatan 12520.`,
      },
      {
        name: `전화`,
        value: `+62-812-1911-5150`,
      },
      {
        name: `홈페이지`,
        value: `cgnindonesia.com`,
      },
    ],
  },

  {
    id: 6,
    land: `프랑스`,
    subtitle: `‘2% 복음화율의 창 끝에 선 불어권 아프리카 선교의 대안’ 불어권 CGN`,
    titleSubscription: [
      `* 불어권 신학교 교육 컨텐츠 제작`,
      `* 불어권 아프리카 미디어 사역자 양성`,
    ],
    mainText: `불어권 CGN은 불어를 주 언어로 사용하는 아프리카 선교를 위하여 2022년 설립되었으며, 선교사가 들어가기 어려운 지역에 효과적으로 복음을 전달하기 위한 콘텐츠를 제작하고 있습니다. 또한 미디어 교육을 진행하여 현지 한인 미디어 선교사와 차세대 미디어 사역자를 양성하는 것을 목표로 하고 있습니다.`,
    programs: [],
    locationData: [
      {
        name: `주소`,
        value: `1. Sq Henri Regnault 92400 courbevoie FRANCE`,
      },
      {
        name: `전화`,
        value: `+33-07-82-58-02-33`,
      },
      {
        name: `홈페이지`,
        value: `https://www.youtube.com/@cgn_francophone`,
      },
    ],
  },
];

const IntroduceWorldwideContext = ({
  selectedCategoryArticleId,
  setSelectedCategoryArticleId,
}) => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const contextFind = contextData?.find(
    item => item?.id === selectedCategoryArticleId
  );

  return (
    <div
      className={`relative flex h-fit w-full flex-col items-center justify-start bg-primary-50`}
    >
      <div
        className={`z-5 t-0 absolute left-0 flex h-852 w-full flex-shrink-0 flex-col items-center justify-start max-lg:h-439`}
        style={{
          backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/mo_under_content_area_background.png` : `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/under_content_area_background.png`})`,
        }}
      ></div>
      <div className={`z-10 mb-24 mt-70 w-full max-lg:mt-24`}>
        <CategoryList
          selectedCategoryArticleId={selectedCategoryArticleId}
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>
      <div
        className={`z-10 flex w-full max-w-1200 flex-shrink-0 flex-col items-start justify-start rounded-16 pb-160 max-lg:px-16 max-lg:pb-96`}
      >
        <div
          className={`flex w-full flex-col items-start justify-start overflow-hidden rounded-16 bg-white-solid`}
        >
          <div
            className={`flex w-full flex-col items-start justify-start gap-40 bg-primary-50 px-40 pb-40 pt-40 max-lg:gap-24 max-lg:px-16 max-lg:pb-24 max-lg:pt-24`}
          >
            <div className={`flex flex-col items-start justify-start gap-12`}>
              <p className={`text-bold40 max-lg:text-bold24 text-grey-900`}>
                {contextFind?.land}
              </p>
              <p className={`text-bold24 max-lg:text-bold16 text-grey-900`}>
                {contextFind?.subtitle}
              </p>
              <p className={`flex flex-col items-start justify-start`}>
                {contextFind?.titleSubscription?.map((item, idx) => (
                  <span
                    className={`text-bold18 max-lg:text-bold14 text-grey-900`}
                    key={idx}
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p
                className={`text-regular18 max-lg:text-regular14 text-grey-500`}
              >
                {contextFind?.mainText}
              </p>
            </div>
          </div>
          <div
            className={`${contextFind?.programs?.length ? `` : `hidden`} flex flex-col items-start justify-start gap-24 px-40 pb-40 pt-40 max-lg:px-16 max-lg:pb-24 max-lg:pt-24`}
          >
            <p className={`text-bold24 max-lg:text-bold18 text-grey-900`}>
              주요 프로그램
            </p>
            <p className={`flex flex-col items-start justify-start`}>
              {contextFind?.programs?.map((item, idx) => (
                <span
                  key={idx}
                  className={`text-regular18 max-lg:text-regular14 text-grey-500`}
                >
                  - {item}
                </span>
              ))}
            </p>
          </div>
          <div
            className={`flex w-full items-center justify-center px-40 max-lg:px-16`}
          >
            <span
              className={`inline-block h-3 w-full border-t-3 border-grey-900 max-lg:border-t-1`}
            ></span>
          </div>
          <div
            className={`flex flex-col items-start justify-start px-40 pb-60 pt-40 max-lg:px-16 max-lg:pb-24 max-lg:pt-24`}
          >
            {selectedCategoryArticleId === 2 ? (
              <p
                className={`text-bold24 max-lg:text-bold18 mb-24 text-grey-900`}
              >
                동경 지사
              </p>
            ) : (
              ``
            )}
            <div className={`flex flex-col items-start justify-start gap-8`}>
              {contextFind?.locationData?.map((item, idx) => (
                <p key={idx} className={`flex items-start justify-start`}>
                  <span
                    className={`text-bold18 max-lg:text-bold14 w-120 flex-shrink-0 text-grey-900 max-lg:w-72`}
                  >
                    {item?.name}
                  </span>
                  {item?.name === '홈페이지' ? (
                    <a href={item?.value}>
                      <span
                        className={`text-regular18 max-lg:text-regular14 text-grey-500 underline underline-offset-4`}
                      >
                        {HTMLReactParser(item?.value)}
                      </span>
                    </a>
                  ) : (
                    <span
                      className={`text-regular18 max-lg:text-regular14 text-grey-500`}
                    >
                      {HTMLReactParser(item?.value)}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>
          {selectedCategoryArticleId === 2 ? (
            <div
              className={`mb-60 mt-40 px-40 max-lg:mb-24 max-lg:mt-24 max-lg:px-16`}
            >
              <p
                className={`text-bold24 max-lg:text-bold18 mb-24 text-grey-900`}
              >
                오사카 지사
              </p>
              <p className={`flex items-start justify-start`}>
                <span
                  className={`text-bold18 max-lg:text-bold14 w-120 flex-shrink-0 text-grey-900 max-lg:w-72`}
                >
                  주소
                </span>
                <span
                  className={`text-regular18 max-lg:text-regular14 text-grey-500`}
                >
                  542-0062 Daisun B/D 7F CGN 3 Chome-1-1 Uehonmachinishi,
                  Chuo-ku, Osaka-shi, Osaka-fu, Japan
                </span>
              </p>
            </div>
          ) : (
            ``
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroduceWorldwideContext;
