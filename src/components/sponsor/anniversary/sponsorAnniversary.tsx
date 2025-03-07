import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 기특하데이 페이지
const SponsorAnniversary = () => {
  // 선교 후원으로 더 특별하게 기념하세요
  const anniversarylist = [
    {
      img: 'anniversary_list1.png',
      title: '생일',
      text: '소중한 사람이 이 세상에 태어난 날',
    },
    {
      img: 'anniversary_list2.png',
      title: '결혼 기념일',
      text: '배우자와 함께 맞이하는 감사의 날',
    },
    {
      img: 'anniversary_list3.png',
      title: '백일 ・첫돌 ',
      text: '하나님이 주신 축복, 우리 자녀의 특별한 날',
    },
    {
      img: 'anniversary_list4.png',
      title: '입학 ・졸업',
      text: '학업을 시작하고 마치는 의미 깊은 날',
    },
    {
      img: 'anniversary_list5.png',
      title: '입사',
      text: '직장생활, 주님과 함께 첫 시작!',
    },
    {
      img: 'anniversary_list6.png',
      title: '임직',
      text: '예수님께 충성과 헌신을 다짐하는 귀한 날',
    },
  ];

  //감사의 마음을 담아 후원해 주세요 슬라이드
  const slideList = [
    {
      img: 'anniversary_slide1.png',
      color: '#ffe1e8',
      title: '세례 받은 날',
      text: '주님을 영접하고 새롭게 거듭난 두번째 생일, 선교 후원으로 주님께 제 마음을 드리며 소중한 이 날을 기념합니다.',
    },
    {
      img: 'anniversary_slide2.png',
      color: '#c3d8ff',
      title: '반려견을 입양한 날',
      text: '새로운 식구 ‘마리’가 내게 온 날, 주님이 창조하신 세상이 더욱 행복하게 느껴졌어요. 반려동물을 키울 수 있음에 감사하며 이 날을 기념해요! ',
    },
    {
      img: 'anniversary_slide3.png',
      color: '#caedff',
      title: '사랑하는 손주의 첫돌',
      text: '얼마 전 귀여운 손주를 품에 안게 되었습니다. 어릴 때부터 선교에 동참하는 자녀가 되길 바라는 마음으로 기념일 후원을 시작합니다.',
    },
    {
      img: 'anniversary_slide4.png',
      color: '#fff3bd',
      title: '5년 근속한 날',
      text: '회사에서 근무한지 5년이 되었습니다. ‘하나님의 은혜로 여기까지 왔구나’ 감사한 생각이 들어 이 날을 선교 후원으로 기념합니다.',
    },
    {
      img: 'anniversary_slide5.png',
      color: '#ffd2e9',
      title: '보육원에서 J를 만난 날',
      text: '베이비박스를 거쳐 우리 곁에 온 J, 하나님 손에 J의 인생을 의탁하는 마음을 담아 기념일 후원을 신청합니다.',
    },
    {
      img: 'anniversary_slide6.png',
      color: '#c3ffc6',
      title: '공모전에서 수상한 날',
      text: '공모전에서 수상을 했습니다. 하나님이 주신 지혜의 결과인 것 같아서 상금의 일부를 후원하며 이 기쁜 날을 기념하고자 합니다.',
    },
  ];

  return (
    <div className='w-full'>
      {/* 메인 배너 */}
      <div className='w-full'>
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/pc_anniversary_banner.jpg`}
          alt=''
          className='w-full'
        />
      </div>
      <button className='text-bold24 mt-[-1px] h-64 w-full bg-secondary-pink text-white-solid'>
        기념일 후원하기
      </button>
      {/* 기념일 후원 소개 영역 */}
      <div className='flex w-full flex-col items-center bg-[#FFF3F3] px-16 pb-120 pt-16'>
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center'>
          <div className='text-regular32 mb-8'>감사함으로 가득한 오늘</div>
          <div className='text-bold48'>
            선교 후원으로 더 특별하게 기념하세요
          </div>
        </div>
        <ul className='flex w-full max-w-1560 flex-wrap gap-24'>
          {anniversarylist.map((item, index) => {
            return (
              <li
                className='flex w-[calc((100%_-_48px)/3)] flex-col items-center rounded-16 bg-white-solid px-20 py-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]'
                key={index}
              >
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/${item.img}`}
                  alt=''
                  className='mb-40 aspect-square w-full max-w-300'
                />
                <div className='flex flex-col items-center'>
                  <div className='text-bold18 mb-16 flex h-48 min-w-88 items-center justify-center break-keep rounded-100 bg-secondary-pink px-12 text-center text-white-solid'>
                    {item.title}
                  </div>
                  <div className='text-bold24 break-keep text-center text-grey-900'>
                    {item.text}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* 기념일 후원 슬라이드 영역 */}
      <div className='flex w-full flex-col items-center bg-white-solid px-16'>
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center'>
          <div className='text-regular32 mb-8'>
            나만의 오늘을 더욱 의미 있게 기억할 수 있도록
          </div>
          <div className='text-bold48'>감사의 마음을 담아 후원해 주세요</div>
        </div>
        <div className='mb-200 flex h-618 w-full max-w-1560 flex-col items-center rounded-16 bg-secondary-pink px-140 pt-60'>
          <div className='after mb-50 flex flex-col items-center'>
            <span className='text-bold60 text-white-solid'>
              내가 만든 나만의 기념일
            </span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/pc_anniversary_text_deco.png`}
              alt=''
              className='w-546'
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
                      className={`flex min-h-560 w-full items-center rounded-16 px-18`}
                      style={{ background: item.color }}
                    >
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/${item.img}`}
                        alt=''
                        className='w-[60%] max-w-683'
                      />
                      <div className='w-1/2 break-keep pr-40'>
                        <div className='text-bold32 mb-24'>{item.title}</div>
                        <div className='text-regular24'>{item.text}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className='swiper-btn-prev absolute left-[-120px] top-180 h-60 w-60 bg-[url(/public/images/sponsor/anniversary_slide_btn.svg)] bg-cover bg-repeat'></button>
            <button className='swiper-btn-next absolute right-[-120px] top-180 h-60 w-60 rotate-180 transform bg-[url(/public/images/sponsor/anniversary_slide_btn.svg)] bg-cover bg-repeat'></button>
          </div>
        </div>
      </div>
      {/* 기념일 후원 증서, 굿즈 */}
      <div className='flex w-full flex-col items-center bg-white-solid px-16 pb-160'>
        <div className='relative mb-80 mt-160 flex flex-col items-center break-keep text-center'>
          <div className='text-regular32 mb-8'>
            기념일 후원으로 선교에 동참하신 분들께
          </div>
          <div className='text-bold48'>
            ‘기념일 후원증서’와 ‘기념 굿즈'를 보내드립니다.
          </div>
        </div>
        <div className='mb-200 flex h-618 w-full max-w-1560 flex-col items-center rounded-16 bg-secondary-pink px-40 pt-60'>
          <div className='after mb-50 flex flex-col items-center'>
            <span className='text-bold60 text-white-solid'>
              기념일 후원증서 & 굿즈
            </span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/pc_anniversary_text_deco.png`}
              alt=''
              className='w-546'
            />
          </div>
          <div className='relative flex w-full max-w-1200 gap-24'>
            <div className='flex h-632 w-1/2 flex-col items-center rounded-16 bg-white-solid pt-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)]'>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/anniversary_goods1.png`}
                alt=''
                className='mb-40 h-336 w-336'
              />
              <div className='text-bold18 mb-16 flex h-48 items-center rounded-100 bg-secondary-pink px-24 text-white-solid'>
                후원증서
              </div>
              <div className='text-bold32 mb-16'>기념일 후원증서</div>
              <div className='text-regular18 text-center text-grey-500'>
                기념일 후원 완료 후 증서를 신청하신 분들께
                <br />
                우편으로 보내드립니다.
              </div>
            </div>
            <div className='flex h-632 w-1/2 flex-col items-center rounded-16 bg-white-solid pt-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)]'>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/anniversary_goods2.png`}
                alt=''
                className='mb-40 h-336 w-336'
              />
              <div className='text-bold18 mb-16 flex h-48 items-center rounded-100 bg-secondary-pink px-24 text-white-solid'>
                굿즈
              </div>
              <div className='text-bold32 mb-16'>기념 굿즈</div>
              <div className='text-regular18 text-center text-grey-500'>
                정기 3만원 이상 또는 일시 10만원 이상 후원하신 분들께
                <br />
                굿즈를 보내드립니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col items-center bg-white-solid px-16 pb-160'></div>
    </div>
  );
};

export default SponsorAnniversary;
