// 훅
import React, { useEffect, useState } from 'react';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 데이터
// 선교 후원으로 더 특별하게 기념하세요
const anniversarylist = [
  {
    img: 'anniversary_list1.png',
    title: '생일',
    text: ['소중한 사람이', '이 세상에 태어난 날'],
  },
  {
    img: 'anniversary_list2.png',
    title: '결혼 기념일',
    text: ['배우자와 함께', '맞이하는 감사의 날'],
  },
  {
    img: 'anniversary_list3.png',
    title: '백일 ・첫돌 ',
    text: ['하나님이 주신 축복,', '우리 자녀의 특별한 날'],
  },
  {
    img: 'anniversary_list4.png',
    title: '입학 ・졸업',
    text: ['학업을 시작하고', '마치는 의미 깊은 날'],
  },
  {
    img: 'anniversary_list5.png',
    title: '입사',

    text: ['직장생활,', '주님과 함께 첫 시작!'],
  },
  {
    img: 'anniversary_list6.png',
    title: '임직',
    text: ['예수님께 충성과 헌신을', '다짐하는 귀한 날'],
  },
];
//감사의 마음을 담아 후원해 주세요 슬라이드
const slideList = [
  {
    img: 'anniversary_slide1.png',
    color: '#ffe1e8',
    title: '세례 받은 날',
    text: [
      '주님을 영접하고 새롭게 거듭난 두번째 생일,',
      '선교 후원으로 주님께 제 마음을 드리며',
      '소중한 이 날을 기념합니다.',
    ],
  },
  {
    img: 'anniversary_slide2.png',
    color: '#c3d8ff',
    title: '반려견을 입양한 날',
    text: [
      '새로운 식구 ‘마리’가 내게 온 날, 주님이 창조하신 세상이',
      '더욱 행복하게 느껴졌어요. 반려동물을 키울 수 있음에',
      '감사하며 이 날을 기념해요!',
    ],
  },
  {
    img: 'anniversary_slide3.png',
    color: '#caedff',
    title: '사랑하는 손주의 첫돌',
    text: [
      '얼마 전 귀여운 손주를 품에 안게 되었습니다.',
      '어릴 때부터 선교에 동참하는 자녀가 되길 바라는 마음으로',
      '기념일 후원을 시작합니다.',
    ],
  },
  {
    img: 'anniversary_slide4.png',
    color: '#fff3bd',
    title: '5년 근속한 날',
    text: [
      '회사에서 근무한지 5년이 되었습니다. ‘하나님의 은혜로',
      '여기까지 왔구나’ 감사한 생각이 들어 이 날을',
      '선교 후원으로 기념합니다.',
    ],
  },
  {
    img: 'anniversary_slide5.png',
    color: '#ffd2e9',
    title: '보육원에서 J를 만난 날',
    text: [
      '베이비박스를 거쳐 우리 곁에 온 J,',
      '하나님 손에 J의 인생을 의탁하는 마음을 담아',
      '기념일 후원을 신청합니다.',
    ],
  },
  {
    img: 'anniversary_slide6.png',
    color: '#c3ffc6',
    title: '공모전에서 수상한 날',
    text: [
      '공모전에서 수상을 했습니다. 하나님이 주신 지혜의',
      '결과인 것 같아서 상금의 일부를 후원하며 이 기쁜 날을',
      '기념하고자 합니다.',
    ],
  },
];
// 기념일 날짜(월)
const dateMonthOption = [
  {
    id: 0,
    text: '1',
    value: 1,
  },
  { id: 1, text: '2', value: 3 },
  { id: 2, text: '3', value: 4 },
  { id: 3, text: '4', value: 5 },
  { id: 4, text: '5', value: 6 },
  { id: 5, text: '6', value: 7 },
  { id: 6, text: '7', value: 8 },
  { id: 7, text: '8', value: 9 },
  { id: 8, text: '9', value: 10 },
  { id: 9, text: '10', value: 11 },
  { id: 10, text: '11', value: 12 },
  { id: 11, text: '12', value: 13 },
];
// 기념일 날짜(일)
const dateDayOption = [
  {
    id: 0,
    text: '1',
    value: 1,
  },
  { id: 1, text: '2', value: 2 },
  { id: 2, text: '3', value: 3 },
  { id: 3, text: '4', value: 4 },
  { id: 4, text: '5', value: 5 },
  { id: 5, text: '6', value: 6 },
  { id: 6, text: '7', value: 7 },
  { id: 7, text: '8', value: 8 },
  { id: 8, text: '9', value: 9 },
  { id: 9, text: '10', value: 10 },
  { id: 10, text: '11', value: 11 },
  { id: 11, text: '12', value: 12 },
  { id: 12, text: '13', value: 13 },
  { id: 13, text: '14', value: 14 },
  { id: 14, text: '15', value: 15 },
  { id: 15, text: '16', value: 16 },
];
//후원금 사용처 슬라이드
const expenditureSlide = [
  {
    img: 'expenditure_slide1.png',
    title: '복음 콘텐츠 제작',
    text: '큐티, 퐁당 오리지널, 다음세대 콘텐츠까지 복음을 전하는 양질의 콘텐츠 제작에 사용됩니다',
  },
  {
    img: 'expenditure_slide2.png',
    title: '다양한 플랫폼 운영',
    text: '급변하는 미디어 환경 속에서 복음을 효율적으로 전파하기 위해 필요한 플랫폼들을 운영합니다',
  },
  {
    img: 'expenditure_slide3.png',
    title: '선교지 맞춤 미디어 선교',
    text: '미주, 일본, 대만, 태국, 인도네시아, 프랑스 지사를 운영하며 현지 맞춤 콘텐츠를 제작, 복음을 전하고 있습니다',
  },
  {
    img: 'expenditure_slide4.png',
    title: '한국교회 섬김',
    text: '퐁당 플랫폼을 통한 양육 콘텐츠 제공으로 한국교회의 목회를 돕고, 매해 콘퍼런스를 통해 한국교회 미디어 전략을 제시합니다',
  },
];

// input
import SelectBox from '@/components/common/selectBox';
import DefaultInput from '@/components/common/defaultInput';
import CheckBox from '@/components/common/checkBox';
//popup
import AnniversaryPopup from '@/components/introducesupport/anniversary/anniversaryPopup';
// import AnniversaryFixedButton from './anniversaryFixedButton';
import ScrollTopScanner from '@/components/common/scrollTopScanner';
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';
import CompleteBox from '@/components/common/completeBox';

// 기념일 후원 페이지
const IntroducesupportAnniversary = () => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();
  const scrollTopStatus = ScrollTopScanner();
  // 후원증서 신청
  const [name, setName] = useState(''); // 이름
  const [anniversary, setAnniversary] = useState(''); // 기념일 명칭

  //기념일 날짜 (년)
  const [dateYear, setDateYear] = useState({ text: '' });
  const dateYearOption = [
    {
      id: 0,
      text: '2025',
      value: 1,
    },
    { id: 1, text: '2026', value: 2 },
  ];
  //기념일 날짜 (월)
  const [dateMonth, setDateMonth] = useState({ text: '' });

  //기념일 날짜 (일)
  const [dateDay, setDateDay] = useState({ text: '' });

  // 연락처
  const [phoneNum1, setPhoneNum1] = useState('');
  const [phoneNum2, setPhoneNum2] = useState('');
  const [phoneNum3, setPhoneNum3] = useState('');

  //개인정보 처리방침 동의
  const [policyCheck, setPolicyCheck] = useState(false);
  const [popup, setPopup] = useState(false);

  // 완료 팝업, 추후 false 로 기본값 바꾸기
  const [completePopup, setCompletePopup] = useState(true);

  // 페이지 최상단 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='relative w-full'>
      {/* 메인 배너 */}
      <div className='w-full'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_anniversary_banner.jpg`}
          alt=''
          className='hidden w-full lg:block'
        />
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_anniversary_banner.jpg`}
          alt=''
          className='hidden w-full max-lg:block'
        />
      </div>
      <button
        onClick={() => {
          window.open(
            `https://online.mrm.or.kr/yVGkJ95/?utm_source=%EA%B8%B0%ED%8A%B9%ED%95%98%EB%8D%B0%EC%9D%B4`,
            `_blank`
          );
        }}
        style={{ transition: `0.5s` }}
        className={` ${scrollTopStatus ? `` : isVisible ? `absolute bottom-0` : `fixed bottom-0`} text-bold24 z-[70] h-64 w-full bg-secondary-pink text-white-solid`}
      >
        기념일 후원하기
      </button>
      {/* 기념일 후원 소개 영역 */}
      <div className='relative flex w-full flex-col items-center bg-[#FFF3F3] px-16 pb-120 pt-16 max-lg:pb-60'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_deco1.png`}
          alt=''
          className='absolute top-122 w-full max-w-989 max-lg:hidden'
        />
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_deco1.png`}
          alt=''
          className='absolute top-75 hidden w-full max-w-336 max-lg:block'
        />
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center max-lg:mb-32 max-lg:mt-60'>
          <div className='text-regular32 max-lg:text-regular18 mb-8'>
            감사함으로 가득한 오늘
          </div>
          <div className='text-bold48 max-lg:text-bold24'>
            선교 후원으로 더 <br className='hidden max-lg:block' />
            특별하게 기념하세요
          </div>
        </div>
        <ul className='flex w-full max-w-1560 flex-wrap gap-24'>
          {anniversarylist.map((item, index) => {
            return (
              <li
                className='flex w-[calc((100%_-_48px)/3)] flex-col items-center rounded-16 bg-white-solid px-20 py-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)] max-lg:w-full max-lg:flex-row-reverse max-lg:justify-between max-lg:py-16'
                key={index}
              >
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/${item.img}`}
                  alt=''
                  className='mb-40 aspect-square w-full max-w-300 max-lg:mb-0 max-lg:max-w-120'
                />
                <div className='flex flex-col items-center max-lg:items-start'>
                  <div className='text-bold18 max-lg:text-bold14 mb-16 flex h-48 min-w-88 items-center justify-center break-keep rounded-100 bg-secondary-pink px-12 text-center text-white-solid max-lg:h-32'>
                    {item.title}
                  </div>
                  <div className='text-bold24 max-lg:text-bold18 flex flex-wrap justify-center text-grey-900 max-lg:justify-start max-lg:text-start'>
                    {item.text.map((item2, index2) => {
                      return (
                        <div className='me-8' key={index2}>
                          {item2}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* 기념일 후원 슬라이드 영역 */}
      <div className='relative flex w-full flex-col items-center bg-white-solid px-16 max-lg:px-0'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_deco2.png`}
          alt=''
          className='absolute top-110 w-full max-w-985 max-lg:hidden'
        />
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_deco2.png`}
          alt=''
          className='absolute top-90 ml-20 hidden w-full max-w-336 max-lg:block'
        />
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center max-lg:mb-32 max-lg:mt-60'>
          <div className='text-regular32 max-lg:text-regular18 mb-8'>
            나만의 오늘을 더욱 의미 있게 기억할 수 있도록
          </div>
          <div className='text-bold48 max-lg:text-bold24'>
            감사의 마음을 담아<span className={`max-lg:hidden`}>&nbsp;</span>
            <br className='hidden max-lg:block' />
            후원해 주세요
          </div>
        </div>
        <div className='mb-200 flex h-618 w-full max-w-1560 flex-col items-center rounded-16 bg-secondary-pink px-140 pt-60 max-lg:h-354 max-lg:rounded-0 max-lg:px-16 max-lg:pt-40'>
          <div className='max-lg:text mb-50 flex flex-col items-center max-lg:mb-35'>
            <span className='text-bold60 max-lg:text-bold24 text-white-solid max-lg:underline max-lg:underline-offset-4'>
              내가 만든 나만의 기념일
            </span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_anniversary_text_deco.png`}
              alt=''
              className='w-546 max-lg:hidden'
            />
          </div>
          {/* slide-warp */}
          <div className='relative w-full max-w-1200'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              navigation={{
                prevEl: '.swiper-btn-prev',
                nextEl: '.swiper-btn-next',
              }}
            >
              {slideList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className='flex min-h-560 w-full items-center rounded-16 px-18 max-lg:min-h-374 max-lg:flex-col max-lg:px-0'
                      style={{ background: item.color }}
                    >
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/${item.img}`}
                        alt=''
                        className='w-[60%] max-w-683 max-lg:hidden'
                      />
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_${item.img}`}
                        alt=''
                        className='hidden w-full max-w-360 max-lg:block'
                      />
                      <div className='w-1/2 pr-56 max-lg:absolute max-lg:top-236 max-lg:w-full max-lg:pe-0 max-lg:pr-0'>
                        <div className='text-bold32 max-lg:text-bold24 mb-24 max-lg:mb-10 max-lg:text-center'>
                          {item.title}
                        </div>
                        <div className='text-regular24 max-lg:text-regular14 max-lg:text-center'>
                          {item.text.map((item2, index2) => {
                            return (
                              <span key={index2} className='me-8 max-lg:me-0'>
                                {item2}
                                <br className='hidden max-lg:block' />
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              style={{
                backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/anniversary_slide_btn.svg)`,
              }}
              className={`swiper-btn-prev absolute left-[-120px] top-180 z-10 h-60 w-60 bg-cover bg-no-repeat max-lg:left-8 max-lg:h-40 max-lg:w-40`}
            ></button>
            <button
              style={{
                backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/anniversary_slide_btn.svg)`,
              }}
              className={`swiper-btn-next absolute right-[-120px] top-180 z-10 h-60 w-60 rotate-180 transform bg-cover bg-no-repeat max-lg:right-8 max-lg:h-40 max-lg:w-40`}
            ></button>
          </div>
        </div>
      </div>
      {/* 기념일 후원 증서, 굿즈 */}
      <div className='relative flex w-full flex-col items-center bg-white-solid px-16 pb-160 max-lg:px-0 max-lg:pb-0'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_deco3.png`}
          alt=''
          className='absolute top-58 w-full max-w-984 max-lg:hidden'
        />
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_deco3.png`}
          alt=''
          className='absolute top-81 hidden w-full max-w-361 max-lg:block'
        />
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center max-lg:mb-32 max-lg:mt-60'>
          <div className='text-regular32 max-lg:text-regular18 mb-8'>
            기념일 후원으로 선교에 동참하신 분들께
          </div>
          <div className='text-bold48 max-lg:text-bold24'>
            ‘기념일 후원증서’와 <br className='hidden max-lg:block' />
            ‘기념 굿즈'를 보내드립니다.
          </div>
        </div>
        <div className='mb-200 flex h-618 w-full max-w-1560 flex-col items-center rounded-16 bg-secondary-pink px-40 pt-60 max-lg:h-354 max-lg:w-full max-lg:rounded-0 max-lg:px-16 max-lg:pt-40'>
          <div className='max-lg:text mb-50 flex flex-col items-center max-lg:mb-35'>
            <span className='text-bold60 max-lg:text-bold24 text-white-solid max-lg:underline max-lg:underline-offset-4'>
              기념일 후원증서 & 굿즈
            </span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_anniversary_text_deco.png`}
              alt=''
              className='w-546 max-lg:hidden'
            />
          </div>
          <div className='relative flex w-full max-w-1200 gap-24 max-lg:flex-col'>
            <div className='flex h-632 w-1/2 flex-col items-center rounded-16 bg-white-solid pt-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)] max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-lg:justify-between max-lg:pb-24 max-lg:pe-24 max-lg:ps-24 max-lg:pt-24'>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/anniversary_goods1.png`}
                alt=''
                className='mb-40 h-336 w-336 max-lg:mb-0 max-lg:ml-8 max-lg:h-120 max-lg:w-120'
              />
              <div className='text-bold18 mb-16 flex h-48 items-center rounded-100 bg-secondary-pink px-24 text-white-solid max-lg:hidden'>
                후원증서
              </div>
              <div className='flex flex-col'>
                <div className='text-bold32 max-lg:text-bold18 mb-16 text-center max-lg:text-start'>
                  기념일 후원증서
                </div>
                <div className='text-regular18 max-lg:text-regular12 flex max-w-400 flex-wrap justify-center text-center text-grey-500 max-lg:justify-start max-lg:text-start'>
                  <span className='mr-6 max-lg:mr-4'>기념일 후원 완료 후</span>
                  <span className='mr-6 max-lg:mr-4'>
                    증서를 신청하신 분들께
                  </span>
                  <span className='mr-6 max-lg:mr-4'>
                    우편으로 보내드립니다.
                  </span>
                </div>
              </div>
            </div>
            <div className='flex h-632 w-1/2 flex-col items-center rounded-16 bg-white-solid pt-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)] max-lg:h-auto max-lg:w-full max-lg:flex-row-reverse max-lg:justify-between max-lg:pb-24 max-lg:pe-24 max-lg:ps-24 max-lg:pt-24'>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/anniversary_goods2.png`}
                alt=''
                className='mb-40 h-336 w-336 max-lg:mb-0 max-lg:ml-8 max-lg:h-120 max-lg:w-120'
              />
              <div className='text-bold18 mb-16 flex h-48 items-center rounded-100 bg-secondary-pink px-24 text-white-solid max-lg:hidden'>
                굿즈
              </div>
              <div className='flex flex-col'>
                <div className='text-bold32 max-lg:text-bold18 mb-16 text-center max-lg:text-start'>
                  기념 굿즈
                </div>
                <div className='text-regular18 max-lg:text-regular12 flex max-w-400 flex-wrap justify-center text-center text-grey-500 max-lg:justify-start max-lg:text-start'>
                  <span className='mr-6 max-lg:mr-4'>정기 3만원 이상 또는</span>
                  <span className='mr-6 max-lg:mr-4'>
                    일시 10만원 이상 후원하신
                  </span>
                  <span className='mr-6 max-lg:mr-4'>
                    분들께 굿즈를 보내드립니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 후원 증서 */}
      <div className='flex w-full flex-col items-center bg-[#FFF3F3] px-16 pb-120 pt-120 max-lg:px-0 max-lg:pb-0 max-lg:pt-0'>
        <div className='flex w-full max-w-1200 max-lg:flex-col'>
          <div className='flex h-800 w-1/2 flex-col items-center rounded-16 bg-secondary-pink px-60 pt-95 max-lg:h-auto max-lg:w-full max-lg:rounded-0 max-lg:px-24 max-lg:pb-60 max-lg:pt-60'>
            <div className='text-bold32 max-lg:text-bold24 mb-60 max-lg:mb-40'>
              기념일 후원증서를 신청하세요!
            </div>
            <div className='mb-24 flex w-full gap-12 max-lg:w-full max-lg:flex-col'>
              <div className='flex w-full max-w-223 flex-col max-lg:w-full max-lg:max-w-[unset]'>
                <div className='text-regular14 mb-8 ml-4'>성명</div>
                <DefaultInput
                  placeholder=''
                  maxlength={10}
                  searchBtn={false}
                  inputText={name}
                  setInputText={setName}
                  className='w-full'
                />
              </div>
              <div className='flex w-full max-w-243 flex-col max-lg:w-full max-lg:max-w-[unset]'>
                <div className='text-regular14 mb-8 ml-4'>
                  기념일 명칭{' '}
                  <span className='text-regular12'>(10자 이내)</span>
                </div>
                <DefaultInput
                  placeholder='예: 첫돌, 결혼기념일, 두번째 생일'
                  searchBtn={false}
                  maxlength={10}
                  inputText={anniversary}
                  setInputText={setAnniversary}
                  className='w-full'
                />
              </div>
            </div>
            <div className='mb-24 flex w-full flex-col'>
              <div className='text-regular14 mb-8 ml-4'>기념일 날짜</div>
              <div className='flex w-full gap-12'>
                <div className='flex w-1/3 items-center max-lg:items-end'>
                  <SelectBox
                    defaultValue='선택'
                    listData={dateYearOption}
                    selectedItem={dateYear}
                    setSelectedItem={setDateYear}
                    className='w-full'
                    height='56'
                  />
                  <span className='text-regular14 ml-12 shrink-0'>년</span>
                </div>
                <div className='flex w-1/3 items-center max-lg:items-end'>
                  <SelectBox
                    defaultValue='선택'
                    listData={dateMonthOption}
                    selectedItem={dateMonth}
                    setSelectedItem={setDateMonth}
                    className='w-full'
                    height='56'
                  />
                  <span className='text-regular14 ml-12 shrink-0'>월</span>
                </div>
                <div className='flex w-1/3 items-center max-lg:items-end'>
                  <SelectBox
                    defaultValue='선택'
                    listData={dateDayOption}
                    selectedItem={dateDay}
                    setSelectedItem={setDateDay}
                    className='w-full'
                    height='56'
                  />
                  <span className='text-regular14 ml-12 shrink-0'>일</span>
                </div>
              </div>
            </div>
            <div className='mb-24 flex w-full flex-col'>
              <div className='text-regular14 mb-8 ml-4 flex items-center'>
                연락처{' '}
                <span className='text-regular12 ml-8'>(예: 010-***-***)</span>
              </div>
              <div className='flex w-full items-center justify-between gap-12'>
                <div className='flex w-full max-w-[33.3%] items-center max-lg:w-1/3'>
                  <DefaultInput
                    placeholder=''
                    searchBtn={false}
                    numberMode={true}
                    inputText={phoneNum1}
                    maxlength={3}
                    setInputText={setPhoneNum1}
                    className='w-full'
                  />
                </div>
                <span className='text-regular14'>-</span>
                <div className='flex w-full max-w-[33.3%] items-center max-lg:w-1/3'>
                  <DefaultInput
                    placeholder=''
                    searchBtn={false}
                    numberMode={true}
                    inputText={phoneNum2}
                    maxlength={4}
                    setInputText={setPhoneNum2}
                    className='w-full'
                  />
                </div>
                <span className='text-regular14'>-</span>
                <div className='flex w-full max-w-[33.3%] items-center max-lg:w-1/3'>
                  <DefaultInput
                    placeholder=''
                    searchBtn={false}
                    numberMode={true}
                    inputText={phoneNum3}
                    maxlength={4}
                    setInputText={setPhoneNum3}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='mb-60 flex w-full items-center max-lg:mb-40'>
              <CheckBox
                label='개인정보 처리방침 동의'
                isChecked={policyCheck}
                setIsChecked={setPolicyCheck}
              />
              <button
                className='text-bold14 ml-8'
                onClick={() => setPopup(true)}
              >
                [전문보기]
              </button>
            </div>
            <button
              className={`${policyCheck && name !== `` && anniversary !== `` && dateYear?.text !== `` && dateMonth?.text !== `` && dateDay?.text !== `` && phoneNum1 !== `` && phoneNum2 !== `` && phoneNum3 !== `` ? `bg-gray-900 text-white-solid` : `pointer-events-none select-none bg-grey-400 text-grey-300`} text-bold24 max-lg:text-bold18 flex h-64 w-full items-center justify-center rounded-8`}
            >
              증서 신청하기
            </button>
          </div>
          <div className='flex h-800 w-1/2 flex-col items-center rounded-16 bg-white-solid px-120 pt-80 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)] max-lg:h-auto max-lg:w-full max-lg:rounded-0 max-lg:px-40 max-lg:pb-60'>
            <div className='flex flex-col items-center max-lg:max-w-393'>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/oath_title.svg`}
                alt=''
                className='mb-60 h-86 w-269 max-lg:h-64 max-lg:w-200'
              />
              <div className='mb-16 flex w-full items-center justify-between'>
                <div className='text-bold24 max-lg:text-bold18'>
                  {name ? name : '성명'}
                </div>
                <div className='text-regular18 max-lg:text-regular14 text-gray-900'>
                  후원자님
                </div>
              </div>
              <div className='mb-16 flex w-full items-center justify-between'>
                <div className='text-bold24 max-lg:text-bold18'>
                  {anniversary ? anniversary : '기념일 명칭'}
                </div>
                <div className='text-regular18 max-lg:text-regular14 text-gray-900'>
                  후원
                </div>
              </div>
              <div className='text-bold24 max-lg:text-bold18 mb-60 flex w-full justify-end'>
                <div className='flex w-1/3 justify-end'>
                  {dateYear && dateYear?.text}
                </div>
                <div className='ml-12 shrink-0'>년</div>
                <div className='flex w-1/3 justify-end'>
                  {dateMonth && dateMonth?.text}
                </div>
                <div className='ml-12 shrink-0'>월</div>
                <div className='flex w-1/3 justify-end'>
                  {dateDay && dateDay?.text}
                </div>
                <div className='ml-12 shrink-0'>일</div>
              </div>
              <div className='text-regular18 max-lg:text-regular14 mb-60 text-center text-gray-500 max-lg:w-full lg:whitespace-nowrap'>
                <div className='flex flex-col items-center justify-start'>
                  <div className=''>
                    {name && name}
                    <span className='whitespace-nowrap'> 후원자님의 </span>
                  </div>

                  <div className=''>
                    <span>&nbsp;</span>
                    {anniversary && anniversary}
                    <span className='whitespace-nowrap'> 을(를)</span>
                  </div>
                </div>
                <div>
                  ‘기특하데이' 선교 후원으로 기념해 주셔서 감사합니다.
                  <br />
                  <br />
                  후원자님의 귀한 후원을 통해 복음이 필요한 곳마다
                  <span>&nbsp;</span>
                  <br className='max-lg:hidden' />
                  <br className={`lg:hidden`} />
                  하나님의 사랑이 전해지길 소망합니다.
                  <br />
                  <br />
                  소중하고 특별한 날,<span className={``}>&nbsp;</span>
                  <br className='max-lg:hidden' />
                  하나님의 은혜가 충만하시길 <br className={`lg:hidden`} />
                  기도합니다.
                </div>
              </div>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/cgn_logo_black.png`}
                alt=''
                className='h-29 w-60'
              />
            </div>
          </div>
        </div>
      </div>
      {/* 후원금 사용처 */}
      <div className='flex w-full flex-col items-center bg-white-solid px-16 pb-120 pt-160 max-lg:px-0 max-lg:pb-36 max-lg:pt-36'>
        <div className='text-bold48 max-lg:text-bold24 mb-8 text-center'>
          후원금 사용처
        </div>
        <div className='text-regular32 max-lg:text-regular14 mb-80 text-center max-lg:mb-70 max-lg:text-gray-500'>
          ‘기특하데이'에 참여하여 보내주신 기념일 후원금은
          <br />
          미디어 선교에 사용됩니다.
        </div>
        <div className='mb-90 w-full max-w-1528 max-lg:mb-70'>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.33}
            centeredSlides={true}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 40,
              },
            }}
          >
            {expenditureSlide.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={`flex w-full flex-col items-center`}>
                    <img
                      src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/${item.img}`}
                      alt=''
                      className='mb-12 w-full'
                    />
                    <div className='text-bold24 max-lg:text-bold18 mb-12 text-center'>
                      {item.title}
                    </div>
                    <div className='text-regular24 max-lg:text-regular14 max-lg:px-18 max-lg:text-center'>
                      {item.text}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='text-regular24 max-lg:text-regular14 text-center text-gray-500 max-lg:mb-10'>
          '기특하데이' 후원은 기부금 영수증 발급이 가능합니다.
        </div>
        <div className='text-bold24 max-lg:text-bold16 text-center text-gray-500'>
          문의 02-796-2243
        </div>
      </div>
      <div data-comment='하단 플로팅 앵커' ref={intersectionRef}></div>
      {/* 전문보기 팝업 */}
      {popup && <AnniversaryPopup isOpen={setPopup} />}
      {/* 후원 신청 완료 팝업 */}
      <CompleteBox
        completePopup={completePopup}
        setCompletePopup={setCompletePopup}
      >
        후원 증서 신청이 완료되었습니다.
      </CompleteBox>
    </div>
  );
};

export default IntroducesupportAnniversary;
