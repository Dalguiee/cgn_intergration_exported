import React, { useState } from 'react';
import HistoryList from './historyList';

const IntroduceHistory = () => {
  const [topSelectedDataIdx, setTopSelectedDataIdx] = useState(0);

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
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개1`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개2`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개3`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개4`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
    [
      {
        id: 0,
        time: `2`,
        text: `10부작 선교 다큐멘터리 <바울로부터> 공개5`,
      },
      {
        id: 1,
        time: `4`,
        text: `CGN - 복음의전함 MOU 체결<br /> 행복한 가정 레이스 ‘달려라퐁당’ 캠페인 실시`,
      },
      {
        id: 1,
        time: `6`,
        text: `퐁당 미디어 콘퍼런스 2024 개최`,
      },
    ],
  ];

  const [middleSelectedDataIdx, setMiddleSelectedDataIdx] = useState(0);

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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈1`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈2`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈3`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈4`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈5`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈6`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈7`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈8`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈9`,
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
      {
        id: 0,
        time: `1`,
        text: `본격러브액션드라마 <고고송> 방영<br />일본 CGNTV 스튜디오 오픈10`,
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
  ];

  const [bottomSelectedDataIdx, setBottomSelectedDataIdx] = useState(0);

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
      {
        id: 0,
        time: `7`,
        text: `일본 기독교 선교 150주년 기념대회 생중계1`,
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
      {
        id: 0,
        time: `7`,
        text: `일본 기독교 선교 150주년 기념대회 생중계2`,
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
      {
        id: 0,
        time: `7`,
        text: `일본 기독교 선교 150주년 기념대회 생중계3`,
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
      {
        id: 0,
        time: `7`,
        text: `일본 기독교 선교 150주년 기념대회 생중계4`,
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
      {
        id: 0,
        time: `7`,
        text: `일본 기독교 선교 150주년 기념대회 생중계5`,
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
  ];

  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introduce/history_background.png)`,
        }}
        className={`flex h-1230 w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat pt-457`}
      >
        <div className={`flex flex-col items-center justify-start gap-40`}>
          <p className={`text-bold78 text-grey900`}>CGN History</p>
          <p className={`text-bold48 text-grey-900`}>2005년~현재</p>
          <p className={`text-bold24 text-grey900`}>
            선교미디어 CGN의 지난 발자취를 소개합니다.
          </p>
        </div>
      </div>
      <section
        className={`flex w-full max-w-1200 flex-col items-center justify-start gap-120 pb-311`}
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
