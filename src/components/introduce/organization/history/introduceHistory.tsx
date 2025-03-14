// 훅
import React, { useState } from 'react';

// 컴포넌트
import HistoryList from '@/components/introduce/organization/history/historyList';
import ResponsiveScanner from '@/components/common/responsiveScanner';

// 데이터
const topHistoryDataYears = [
  {
    id: 0,
    frontNum: `20`,
    year: `24`,
  },
  {
    id: 1,
    frontNum: `20`,
    year: `23`,
  },
  {
    id: 2,
    frontNum: `20`,
    year: `22`,
  },
  {
    id: 3,
    frontNum: `20`,
    year: `21`,
  },
  {
    id: 4,
    frontNum: `20`,
    year: `20`,
  },
];
const topHistoryData = [
  [
    // 24년
    {
      id: 0,
      time: `2`,
      text: `10부작 선교 다큐멘터리 <바울로부터> 공개`,
    },
    {
      id: 1,
      time: `4`,
      text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
    },
    {
      id: 2,
      time: `6`,
      text: `퐁당 미디어 콘퍼런스 2024 개최`,
    },
    {
      id: 3,
      time: `8`,
      text: `퐁당 2.0 런칭`,
    },
    {
      id: 4,
      time: `9`,
      text: `2024 서울-인천 제4차 로잔대회 주관방송사<br /> 한국교회 140년 역사 총체극 <한국교회의 열두 돌> 공개<br /> <바울로부터> 메시지 트립(성지순례여행) 런칭<br /> CGN-인도네시아 STAR신학교 MOU 체결`,
    },
    {
      id: 4,
      time: `10`,
      text: `CGN 인도네시아 지사 10주년 감사예배 & 드림온 콘서트<br /> CGN-인도네시아 하까이교단(HKI) MOU 체결`,
    },
    {
      id: 4,
      time: `11`,
      text: `운영위원장 이취임(3대 정상건 장로 -> 4대 신철우 장로)<br /> 퐁당 글로벌 런칭<br /> 교회 미디어 전문가 양성 프로젝트 ‘2024 퐁당 미디어 아카데미 개최’ (대전, 대구, 목포, 춘천, 제주)`,
    },
    {
      id: 4,
      time: `12`,
      text: `다큐멘터리 <오! 마이 박스> 제16회 한국기독언론대상 해외선교부문 우수상 수상<br /> <바울로부터 스페셜 마스터> KBS 1TV 성탄 특집 방영`,
    },
  ],
  [
    // 23년
    {
      id: 0,
      time: `1`,
      text: `성경 기반 인체과학 키즈 콘텐츠 <우리 몸으로, 퐁당! - 혈관 어드벤쳐> 동화책 출간`,
    },
    {
      id: 1,
      time: `2`,
      text: `어린이 공동체 성경읽기 <고고 바이블> 방송 시작`,
    },
    {
      id: 2,
      time: `3`,
      text: `선교 미디어 CGN’으로 리브랜딩`,
    },
    {
      id: 3,
      time: `4`,
      text: `다음세대를 위한 발걸음 ‘달려라퐁당’ 챌린지 실시`,
    },
    {
      id: 3,
      time: `5`,
      text: `CGN 패밀리 콘서트 ‘지금 여기 함께’ 개최<br /> 퐁당 미디어 콘퍼런스 2023 개최`,
    },
    {
      id: 4,
      time: `6`,
      text: `다큐멘터리 <마지막 경고 : 대한민국 성교육의 진실> 방송<br /> CGN-인도네시아 마나도 국립기독대학(IAKN Manado) MOU 체결`,
    },
    {
      id: 5,
      time: `7`,
      text: `2024 서울 제4차 로잔대회와 한국교회 영적대각성을 위한 714 기도대성회 중계`,
    },
    {
      id: 5,
      time: `9`,
      text: `기념일 후원 ‘기특하데이’ 시작`,
    },
    {
      id: 6,
      time: `11`,
      text: `‘퐁당 미디어 아카데미’ 전국 9개 지역에서 진행<br /> (서울, 인천, 대전, 청주, 광주, 강원, 부산, 대구, 제주)`,
    },
    {
      id: 7,
      time: `12`,
      text: `기독교 판타지 ‘윙페더 사가’ 한국어 더빙판 제작, 퐁당 최초 공개`,
    },
  ],
  [
    // 22년
    {
      id: 0,
      time: `1`,
      text: `CGNTV - 오픈도어선교회 MOU 체결<br/> ‘월드와치리스트 2022’ 발표 공동 주최`,
    },
    {
      id: 1,
      time: `2`,
      text: `퐁당 스마트TV, PC 웹 서비스 런칭`,
    },
    {
      id: 1,
      time: `3`,
      text: `산불 피해 이재민과 교회를 돕기 위한 ‘사랑으로 함께’ 캠페인 진행`,
    },
    {
      id: 1,
      time: `5`,
      text: `다음세대를 위한 발걸음 ‘달려라퐁당’ 캠페인 실시<br /> 성경암송퀴즈쇼 <바이블킹> 퐁당 공개`,
    },
    {
      id: 1,
      time: `6`,
      text: `선교지 드림온플러스 보급을 위한 드림온 ‘썸머 크리스마스’ 캠페인 진행`,
    },
    {
      id: 1,
      time: `8`,
      text: `퐁당 오리지널 <레알캠핑> 2022 서울웹페스트 베스트 리얼리티상 수상`,
    },
    {
      id: 1,
      time: `9`,
      text: `교회와 다음세대를 위한 ‘퐁당교회학교 지원 프로젝트’ 진행`,
    },
    {
      id: 1,
      time: `11`,
      text: `불어권 선교를 위한 프랑스 지사 개소`,
    },
    {
      id: 1,
      time: `12`,
      text: `특집 다큐멘터리 <신학 하는 요즘 애들> 제14회 한국기독언론대상 기독문화 부문 최우수상 수상<br /> 특집 다큐멘터리 <미씽유> 제 14회 한국기독언론대상 선교 부문 우수상 수상<br /> CGNTV – 포도나무교회 - (사)새물결선교회 - (사)청년선교 업무협약 체결`,
    },
  ],
  [
    // 21년
    {
      id: 0,
      time: `2`,
      text: `국내 최초 기독 OTT 플랫폼 “퐁당” 공식 런칭<br/> CGNTV - G&M 글로벌 문화재단 MOU 체결`,
    },
    {
      id: 1,
      time: `4`,
      text: `독신여선교사 은퇴관 건립을 위한 후원 캠페인 진행<br /> CGNTV 유튜브 채널 오리지널 콘텐츠 <나의 드림리스트 오십쇼>런칭`,
    },
    {
      id: 1,
      time: `5`,
      text: `키즈 콘텐츠 제작 및 허입을 위한 자전거 챌린지 “달려라! 퐁당” 실시`,
    },
    {
      id: 1,
      time: `6`,
      text: `선교지 드림온플러스 보급을 위한 드림온 ‘썸머 크리스마스’ 캠페인 진행`,
    },
    {
      id: 1,
      time: `8`,
      text: `온라인 직원 아웃리치(이집트, 케냐, 네팔, 프랑스, 브라질, WEC 미디어아카데미) 진행<br /> 단편영화 <샤론컵밥>제17회 제천국제음악영화제 공식 초청<br /> KNOCK <밭간양반>서울웹페스트2021 ‘베스트 다큐멘터리’ 부문 수상`,
    },
    {
      id: 1,
      time: `9`,
      text: `CGNTV 자원봉사단 ‘드림온핸즈’ 창단<br /> CGNTV 프랑스 제작센터 파송<br /> 기독콘텐츠아이디어공모전 진행`,
    },
    {
      id: 1,
      time: `10`,
      text: `용산구민의 날 지역발전상 수상`,
    },
    {
      id: 1,
      time: `10`,
      text: `CGNTV - 장로회신학대학교 MOU 체결<br /> 특집 다큐멘터리 <안녕히 계세요, 하나님> 한국기독언론대상 기독문화부문 최우수상 수상<br /> 특집 다큐멘터리 <땅 끝의 증인들 - 나는 섬 선교사입니다> 한국기독언론대상 나눔기부부문 우수상 수상`,
    },
  ],
  [
    // 20년
    {
      id: 0,
      time: `1`,
      text: `365일 성경통독 프로젝트 <하루 20분 공동체성경읽기> 방송 시작`,
    },
    {
      id: 1,
      time: `3`,
      text: `코로나19 극복을 위한 특별모금 ‘사랑으로 함께’ 진행<br /> 개국 15주년 특집 다큐멘터리 <땅 끝의 증인들> 방송<br /> 기독 OTT 플랫폼을 위한 kth(ICT 플랫폼 서비스 업체) MOU 체결`,
    },
    {
      id: 1,
      time: `4`,
      text: `CGNTV 인터넷 수신기 ‘드림온플러스’ 런칭<br /> 작은교회 온라인 예배 지원 프로젝트 실시<br /> CGNTV - 한국WEC국제선교회 MOU 체결`,
    },
    {
      id: 1,
      time: `5`,
      text: `코로나19 취약계층 섬김 직원 아웃리치`,
    },
    {
      id: 1,
      time: `7`,
      text: `개국 15주년 기념 시청수기 공모전 진행`,
    },
    {
      id: 1,
      time: `8`,
      text: `군인교회 언택트 사역 전문가 양성교육 실시`,
    },
    {
      id: 1,
      time: `11`,
      text: `유튜브 ‘KNOCK노크’ 채널 구독자 10만 돌파<br /> CGNTV 정기후원자 3만 7천명 돌파`,
    },
    {
      id: 1,
      time: `12`,
      text: `CGNTV - 서울예술대학교 MOU 체결<br /> 김영길 장로 1주기 추모다큐 <그의 제자 김영길> 기독언론대상 특별상 수상<br /> KNOCK <계도왕> 2020 아시아웹어워즈 베스트 웹 시리즈 부문 수상<br /> CGNTV - CH114, 교회주소록 MOU 체결<br /> 기독 OTT 플랫폼 <퐁당> 오픈 베타서비스 시작`,
    },
  ],
];

const middleHistoryDataYears = [
  {
    id: 0,
    frontNum: `20`,
    year: `19`,
  },
  {
    id: 1,
    frontNum: `20`,
    year: `18`,
  },
  {
    id: 2,
    frontNum: `20`,
    year: `17`,
  },
  {
    id: 3,
    frontNum: `20`,
    year: `16`,
  },
  {
    id: 4,
    frontNum: `20`,
    year: `15`,
  },
  {
    id: 5,
    frontNum: `20`,
    year: `14`,
  },
  {
    id: 6,
    frontNum: `20`,
    year: `13`,
  },
  {
    id: 7,
    frontNum: `20`,
    year: `12`,
  },
  {
    id: 8,
    frontNum: `20`,
    year: `11`,
  },
  {
    id: 9,
    frontNum: `20`,
    year: `10`,
  },
];
const middleHistoryData = [
  [
    // 19년
    {
      id: 0,
      time: `1`,
      text: `본격러브액션드라마 <고고송> 방영<br /> 일본 CGNTV 스튜디오 오픈`,
    },
    {
      id: 1,
      time: `3`,
      text: `유튜브 ‘SOON’ 채널 오픈<br />3.1운동 100주년 특집다큐멘터리 <낮은 곳에서 피는 봄> 방송`,
    },
    {
      id: 2,
      time: `5`,
      text: `유튜브 맞춤 콘텐츠 <붓소핸섭> 런칭<br />CGNTV 작은 음악회 개최`,
    },
    {
      id: 3,
      time: `8`,
      text: `인도네시아 CGNTV 개국 5주년 감사예배<br />드라마 <고고송> 제15회 제천국제음악영화제 초청<br />KNOCK <미니콤 시리즈> 2019 서울 웹페스트 영화제 ‘베스트 브랜디드 시리즈’ 수`,
    },
    {
      id: 4,
      time: `10`,
      text: `CGNTV 정기후원 행사, 후원 캠페인 ‘함께! 미디어선교’ 런칭`,
    },
    {
      id: 5,
      time: `11`,
      text: `CGNTV - TGC(The Gospel Coalition) 코리아 MOU 체결<br />드라마 <고고송> ICVM 크라운 어워즈 수상<br />- 최고해외영화상 금상, 여우조연상 은상(배우 윤유선)<br />다큐 <인플루언스, 위대한 영향력> ICVM 크라운 어워즈 제작비 5만 불 이상<br />다큐멘터리 동상, 베스트 시리즈 동상 수상`,
    },
    {
      id: 6,
      time: `12`,
      text: `다큐 <인플루언스, 위대한 영향력> 한국기독언론대상 해외선교 부문 최우수상,<br />3.1운동 100주년 특집다큐 <낮은 곳에서 피는 봄> 한국기독언론대상 기독문화 부<br />문 우수상 수상`,
    },
  ],
  [
    // 18년
    {
      id: 0,
      time: `3`,
      text: `개국 13주년 선교헌신예배<br /> 태국 CGNTV - CCT 교단 MOU 체결`,
    },
    {
      id: 1,
      time: `4`,
      text: `한강중학교 미디어 워크숍 개최`,
    },
    {
      id: 2,
      time: `5`,
      text: `다큐영화 <서서평, 천천히 평온하게> 국제기독영화제(ICFF) 최우수상 수상`,
    },
    {
      id: 3,
      time: `6`,
      text: `CGNTV 중문대 개국 10주년<br /> '세상에서 가장 순한 3분 영상, SOON’ 페이지 오픈`,
    },
    {
      id: 4,
      time: `7`,
      text: `다큐영화 <서서평, 천천히 평온하게> ICVM 크라운어워즈 해외영화부문 은상 수상<br /> 충주 전원교회 고향교회 섬김 아웃리치<br /> 제2회 대만 미디어 아카데미 개최`,
    },
    {
      id: 5,
      time: `8`,
      text: `제1회 태국 미디어 아카데미 개최`,
    },
    {
      id: 6,
      time: `9`,
      text: `다큐영화 <서서평, 천천히 평온하게> 유럽기독영화제(CEVMA)<br /> - 고예산 다큐/다큐드라마 부문 1등 수상<br /> 특집단막드라마 <다시 봄> 유럽기독영화제(CEVMA) 고예산 드라마 부문 2등 수상`,
    },
    {
      id: 6,
      time: `10`,
      text: `CGNTV 정기후원 행사<br /> CGNTV-인도네시아 파푸아 채널 MOU 체결`,
    },
    {
      id: 6,
      time: `11`,
      text: `CGNTV 지역섬김 프로젝트 ‘2018 서빙고동 사진展’ 개최`,
    },
    {
      id: 6,
      time: `12`,
      text: `노크 미니휴먼다큐 <수원역 브이로그> 한국기독언론대상 나눔기부 부문 우수상<br /> 특집다큐 <독일 통일, 기도에서 기적으로> 한국기독언론대상 기독문화 부문 우수상`,
    },
  ],
  [
    // 17년
    {
      id: 0,
      time: `2`,
      text: `CGNTV 신입사원 멤버십 트레이닝 삼공펀치`,
    },
    {
      id: 1,
      time: `3`,
      text: `제3기 선교헌신자 파견 예배<br /> 중동-유럽-아프리카 CGNTV 운영위원회 설립`,
    },
    {
      id: 2,
      time: `4`,
      text: `다큐영화 <서서평, 천천히 평온하게> 서울국제사랑영화제(SIAFF) 개막작 초청<br /> 다큐영화 <서서평, 천천히 평온하게> 개봉`,
    },
    {
      id: 3,
      time: `5`,
      text: `다큐영화 <서서평, 천천히 평온하게> 특별상영회 실시`,
    },
    {
      id: 4,
      time: `6`,
      text: `다큐영화 <서서평, 천천히 평온하게> 미주지역 개봉<br /> 다큐 <블랙마운틴> ICVM 최고해외영화상 수상<br /> <br />KNOCK ‘노커스라이크’ 교회영상나눔 프로젝트<br /> 서빙고 벽화나눔 현판식`,
    },
    {
      id: 5,
      time: `7`,
      text: `제2회 CGNTV 미디어아카데미 개최 (부산, 대구)<br /> 제1회 CGNTV 시청수기 공모전<br /> 제3회 KNOCKERS 영상 공모전<br /> 동경러브소나타 10주년 집회 실황중계`,
    },
    {
      id: 6,
      time: `8`,
      text: `전북 진안 고향교회 섬김 직원 아웃리치<br /> KNOCK <두근두근 마카롱> 2017 서울 웹페스트 '베스트 스케치 코미디' 부문 수상`,
    },
    {
      id: 6,
      time: `9`,
      text: `CGNTV 정기후원의 행사<br /> 다큐영화 <서서평, 천천히 평온하게> 독일 지역 상영`,
    },
    {
      id: 6,
      time: `11`,
      text: `태국 CGNTV IPTV 기독교 방송 개국<br /> CGNTV 글로벌 운영위원회 비전모임`,
    },
    {
      id: 6,
      time: `12`,
      text: `대만 CGNTV 현지 사단법인 설립<br /> CGN투데이 <숫자로 보는 선교 시리즈> 한국크리스천기자협회 방송 보도부문 최우수상<br /> 개국특집다큐 <사랑하기 때문에> 한국기독언론대상 선교부문 최우수상<br /> 노크 미니휴먼다큐 <현묵이의 미니멀라이프> 한국기독언론대상 나눔기부부문 우수상<br /> 첫 TV 특집단막드라마 <다시 봄> 방영`,
    },
  ],
  [
    // 16년
    {
      id: 0,
      time: `1`,
      text: `드림온 안테나 1만대 돌파<br /> 웹&모바일 맞춤 콘텐츠 KNOCK 페이스북 오픈`,
    },
    {
      id: 1,
      time: `2`,
      text: `하나로의료재단 MOU 체결`,
    },
    {
      id: 2,
      time: `3`,
      text: `제4기 시청자 모니터단 발족`,
    },
    {
      id: 3,
      time: `4`,
      text: `개국 11주년 감사 예배 및 개국행사<br /> 여성연합기도모임 ‘드림온 맘’ 행사<br /> KNOCKERS 영상공모전`,
    },
    {
      id: 4,
      time: `5`,
      text: `운영위원회 오카야마 아웃리치 실시<br/> 유튜브 어린이 채널 ‘CGNTV KIDS’ 오픈`,
    },
    {
      id: 5,
      time: `6`,
      text: `기독교방송 최초 KNOCK 웹드라마 <교회오빠의 연애QT> 런칭`,
    },
    {
      id: 6,
      time: `7`,
      text: `제1회 CGNTV 미디어아카데미 개최 (청주, 광주)<br /> 청양, 장수 고향교회 섬김 아웃리치`,
    },
    {
      id: 6,
      time: `8`,
      text: `유튜브 채널 ‘창조과학과 신앙’ 오픈<br /> 웹드라마 <교회오빠의 연애QT>, 2016 KWEBFEST ‘BEST BRANDED SERIES’ 부문 수상`,
    },
    {
      id: 6,
      time: `9`,
      text: `여성연합기도모임 ‘드림온맘’ 행사<br /> CGNTV 후원자와 함께하는 스윗사운즈 패밀리콘서트`,
    },
    {
      id: 6,
      time: `10`,
      text: `CGNTV 정기후원 행사<br /> 2016 CGNTV 드림온골프대회`,
    },
    {
      id: 6,
      time: `11`,
      text: `드림온콘서트<br /> 감리교신학대학교 삼공초대 개최`,
    },
    {
      id: 6,
      time: `12`,
      text: `KNOCK 미니시트콤 <두근두근 마카롱> 런칭<br /> 제4대 CGNTV 대표 이용경 장로 취임<br /> KNOCK <미니휴먼다큐> 한국기독언론대상 기독문화부문 우수상 수상<br /> 다큐영화 <서서평, 천천히 평온하게>시사회`,
    },
  ],
  [
    // 15년
    {
      id: 0,
      time: `3`,
      text: `잠금화면 어플리케이션 ‘하모니 앱’ 출시<br /> 개국 10주년 선교헌신예배`,
    },
    {
      id: 1,
      time: `4`,
      text: `내한선교사 130주년 특집 다큐 <블랙마운틴-잊혀진 시간을 찾아서> 방영<br /> 여성연합중보기도모임 ‘드림온맘’ 행사 개최`,
    },
    {
      id: 2,
      time: `8`,
      text: `홍콩 CGN World 설립 감사예배, 창세TV MOU 체결`,
    },
    {
      id: 3,
      time: `9`,
      text: `태국기독교총회와 MOU 체결`,
    },
    {
      id: 4,
      time: `10`,
      text: `이집트 반석미니스트리와 MOU 체결<br /> 내한선교사 130주년 특집 다큐 <女선교사, 조선을 비추다> 방영`,
    },
    {
      id: 5,
      time: `12`,
      text: `다큐 <MK의 고백> 한국기독언론대상 기독선교부문 수상<br /> CGN투데이 <난민 엑소더스.. 희망을 찾아> 크리스천 기자협회 보도부문 최우수상`,
    },
  ],
  [
    // 14년
    {
      id: 0,
      time: `4`,
      text: `세대별 맞춤 선교 프로그램 제작`,
    },
    {
      id: 1,
      time: `6`,
      text: `아랍 CGNTV, 미디어 미션 콘퍼런스`,
    },
    {
      id: 2,
      time: `7`,
      text: `제 1기 방송선교사 파견`,
    },
    {
      id: 3,
      time: `9`,
      text: `인도네시아 CGNTV 자카르타지사 설립`,
    },
    {
      id: 4,
      time: `10`,
      text: `CGNTV 후원을 위한 골프대회`,
    },
    {
      id: 5,
      time: `11`,
      text: `동안교회 후원행사`,
    },
  ],
  [
    // 13년
    {
      id: 0,
      time: `3`,
      text: `개국8주년 기념 선교헌신예배`,
    },
    {
      id: 1,
      time: `5`,
      text: `계원예술대학교 산학협력 체결`,
    },
    {
      id: 2,
      time: `7`,
      text: `<울어라 한반도여> 집회 현장 중계`,
    },
    {
      id: 3,
      time: `10`,
      text: `프랜시스 챈, 데이비드 플랫 목사 방한 기자간담회`,
    },
    {
      id: 4,
      time: `11`,
      text: `CGNTV 후원을 위한 심수봉 콘`,
    },
  ],
  [
    // 12년
    {
      id: 0,
      time: `3`,
      text: `아랍 CGNTV 아부다비 제작센터 오픈`,
    },
    {
      id: 1,
      time: `6`,
      text: `CJ헬로비전 케이블 채널 런칭`,
    },
    {
      id: 2,
      time: `11`,
      text: `다큐 <스마일 라크로즈> 환태평양영화제 베스트 미션 필름상 수상`,
    },
    {
      id: 3,
      time: `12`,
      text: `유재건 대표이사 취임`,
    },
  ],
  [
    // 11년
    {
      id: 0,
      time: `2`,
      text: `KT IPTV 실시간 방송채널 런칭`,
    },
    {
      id: 1,
      time: `3`,
      text: `일본 CGNTV 아가페 CGN 사역 시작`,
    },
    {
      id: 2,
      time: `4`,
      text: `인터넷 초고화질 방송 서비스 시작`,
    },
    {
      id: 3,
      time: `5`,
      text: `개국 6주년 기념 콘서트`,
    },
    {
      id: 4,
      time: `7`,
      text: `국내 최초 군선교 프로그램 방영`,
    },
    {
      id: 5,
      time: `9`,
      text: `일본 CGNTV 47개현 교회 네트워크 구축`,
    },
    {
      id: 6,
      time: `11`,
      text: `LG IPTV 실시간 HD방송채널 런칭`,
    },
  ],
  [
    // 10년
    {
      id: 0,
      time: `3`,
      text: `제작 스튜디오 HD 전환`,
    },
    {
      id: 1,
      time: `4`,
      text: `4차 드림온 캠페인 오픈`,
    },
    {
      id: 2,
      time: `5`,
      text: `스마트폰 서비스 시작`,
    },
    {
      id: 3,
      time: `8`,
      text: `미주 COX케이블 런칭(워싱턴 지역)`,
    },
    {
      id: 4,
      time: `11`,
      text: `태국 CGNTV 방콕제작센터 오픈`,
    },
    {
      id: 6,
      time: `12`,
      text: `명지대학교 산학협력 체결`,
    },
  ],
];

const bottomHistoryDataYears = [
  {
    id: 0,
    frontNum: `20`,
    year: `09`,
  },
  {
    id: 1,
    frontNum: `20`,
    year: `08`,
  },
  {
    id: 2,
    frontNum: `20`,
    year: `07`,
  },
  {
    id: 3,
    frontNum: `20`,
    year: `06`,
  },
  {
    id: 4,
    frontNum: `20`,
    year: `05`,
  },
];
const bottomHistoryData = [
  [
    // 09년
    {
      id: 0,
      time: `7`,
      text: `일본 기독교 선교 150주년 기념대회 생중계`,
    },
    {
      id: 1,
      time: `8`,
      text: `미국 디지털 지상파 채널 런칭`,
    },
    {
      id: 2,
      time: `9`,
      text: `제7회 서울기독교영화제 주관방송사 선정`,
    },
    {
      id: 3,
      time: `11`,
      text: `태국 케이블(HTV) 방송 시작<br />전 직원 ‘와이 미션’ 선교훈련 수료`,
    },
  ],
  [
    // 08년
    {
      id: 0,
      time: `6`,
      text: `CGN 모바일 서비스 실시<br /> 대만 CGNTV 개국`,
    },
    {
      id: 1,
      time: `8`,
      text: `지구촌 섬기는 선교사 이야기 <독수리 5형제> 방송<br /> C&M 케이블 방송 채널 런칭`,
    },
    {
      id: 2,
      time: `10`,
      text: `SK브로드밴드 MOU 체결, IPTV 서비스 시작<br /> 중남미 위성신학교 사역 시작`,
    },
  ],
  [
    // 07년
    {
      id: 0,
      time: `1`,
      text: `평양대부흥 100주년 기념 <부흥 2007> 콘텐츠 제작`,
    },
    {
      id: 1,
      time: `2`,
      text: `일본 CGNTV 오사카 지사 설립`,
    },
    {
      id: 2,
      time: `4`,
      text: `할렐루야 축구단과의 조인식 및 버스 기증`,
    },
    {
      id: 3,
      time: `7`,
      text: `동경 러브소나타 생중계`,
    },
    {
      id: 3,
      time: `9`,
      text: `정기후원 런칭`,
    },
    {
      id: 3,
      time: `10`,
      text: `IS-10 위성빔 송출 실시`,
    },
  ],
  [
    // 06년
    {
      id: 0,
      time: `4`,
      text: `소외된 이웃과 함께하는 ‘사랑 나누기 프로젝트`,
    },
    {
      id: 1,
      time: `5`,
      text: `KWMF와 함께 하는 드림온 3차 캠페인`,
    },
    {
      id: 2,
      time: `7`,
      text: `아랍 크리스천 방송 'SAT-7', 'TURK-7'과 전략적 업무제휴`,
    },
    {
      id: 3,
      time: `9`,
      text: `미주 CGNTV 스페인어 방송 시작<br /> 지역방송본부 네트워크 가동`,
    },
    {
      id: 3,
      time: `10`,
      text: `일본 CGNTV 개국`,
    },
  ],
  [
    // 05년
    {
      id: 0,
      time: `3`,
      text: `CGNTV 개국<br /> 선교지에 안테나 달아주기 '드림온' 캠페인 시작`,
    },
    {
      id: 1,
      time: `5`,
      text: `전주대학교 산학협력<br /> 극동방송 공동제휴 협약`,
    },
    {
      id: 2,
      time: `8`,
      text: `미주 CGNTV 개국`,
    },
  ],
];

const IntroduceHistory = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const [topSelectedDataIdx, setTopSelectedDataIdx] = useState(0);
  const [middleSelectedDataIdx, setMiddleSelectedDataIdx] = useState(0);
  const [bottomSelectedDataIdx, setBottomSelectedDataIdx] = useState(0);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start max-lg:mb-120 max-lg:px-16`}
    >
      <div
        style={{
          backgroundImage: `url(${mobile ? `` : `${import.meta.env.VITE_PUBLIC_URL}images/introduce/history_background.png`})`,
        }}
        className={`flex h-1230 w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat pt-457 max-lg:mb-24 max-lg:mt-24 max-lg:h-fit max-lg:gap-40 max-lg:pt-0`}
      >
        <div
          className={`flex flex-col items-center justify-start gap-40 max-lg:w-full max-lg:items-start max-lg:gap-8`}
        >
          <p className={`text-bold78 max-lg:text-bold48 text-grey900`}>
            CGN History
          </p>
          <p className={`text-bold48 max-lg:text-bold32 text-grey-900`}>
            2005년~현재
          </p>
          <p className={`text-bold24 max-lg:text-bold16 text-grey900`}>
            선교미디어 CGN의 지난 발자취를 소개합니다.
          </p>
        </div>
        <div className={`flex aspect-[361/130] h-full w-full gap-16 lg:hidden`}>
          <img
            className={`h-full w-full rounded-8 object-cover`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_history_title_1.png`}
            alt=''
          />
          <img
            className={`h-full w-full rounded-8 object-cover`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/introduce/mo_history_title_2.png`}
            alt=''
          />
        </div>
      </div>
      <section
        className={`flex w-full max-w-1200 flex-col items-center justify-start gap-120 pb-311 max-lg:gap-60 max-lg:pb-40 max-lg:pt-40`}
      >
        <HistoryList
          selectedDataIdx={topSelectedDataIdx}
          setSelectedDataIdx={setTopSelectedDataIdx}
          historyDataYears={topHistoryDataYears}
          historyData={topHistoryData}
        />
        <HistoryList
          selectedDataIdx={middleSelectedDataIdx}
          setSelectedDataIdx={setMiddleSelectedDataIdx}
          historyDataYears={middleHistoryDataYears}
          historyData={middleHistoryData}
        />
        <HistoryList
          selectedDataIdx={bottomSelectedDataIdx}
          setSelectedDataIdx={setBottomSelectedDataIdx}
          historyDataYears={bottomHistoryDataYears}
          historyData={bottomHistoryData}
        />
      </section>
    </section>
  );
};

export default IntroduceHistory;
