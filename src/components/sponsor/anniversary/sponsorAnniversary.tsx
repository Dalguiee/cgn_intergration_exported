import React from 'react';

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
    { img: '', color: '', title: '', text: '' },
    { img: '', color: '', title: '', text: '' },
    { img: '', color: '', title: '', text: '' },
    { img: '', color: '', title: '', text: '' },
    { img: '', color: '', title: '', text: '' },
    { img: '', color: '', title: '', text: '' },
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
          <div className='text-regular32'>감사함으로 가득한 오늘</div>
          <div className='text-bold48'>
            선교 후원으로 더 특별하게 기념하세요
          </div>
        </div>
        <ul className='flex w-full max-w-1560 flex-wrap gap-24'>
          {anniversarylist.map((item, index) => {
            return (
              <li className='flex w-[calc((100%_-_48px)/3)] flex-col items-center rounded-16 bg-white-solid px-20 py-40 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]'>
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
          <div className='text-regular32'>
            나만의 오늘을 더욱 의미 있게 기억할 수 있도록
          </div>
          <div className='text-bold48'>감사의 마음을 담아 후원해 주세요</div>
        </div>
        <div className='flex h-618 w-full max-w-1560 flex-col items-center rounded-16 bg-secondary-pink pt-60'>
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
          <div className=''></div>
        </div>
      </div>
    </div>
  );
};

export default SponsorAnniversary;
