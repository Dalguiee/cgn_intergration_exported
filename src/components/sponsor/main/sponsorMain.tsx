import React from 'react';

const SponsorMain = () => {
  return (
    <>
      <section
        className={`flex h-fit w-full flex-col items-center justify-start`}
        data-comment='후원페이지'
      >
        {/* ---------- MO ---------- */}
        <div className='flex w-full flex-col items-center bg-[url(/public/images/sponsor/sponsor_main_bg_mo.jpg)] bg-cover bg-top bg-repeat pb-120 pt-60'>
          <div className='text-bold32 mb-60 break-keep text-center text-white-solid'>
            CGN 모든 사역은
            <br />
            100% 후원으로 운영됩니다.
          </div>
          <button className='aspect-320/180 relative mb-24 w-[calc(100%_-_80px)]'>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/mo_main_sponsor1.jpg`}
              alt=''
              className='h-full w-full'
            />
            <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
              방송&퐁당 플랫폼
              <br />
              <span className='text-primary-500'>후원하기</span>
            </div>
          </button>
          <button className='aspect-320/180 relative mb-24 w-[calc(100%_-_80px)]'>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/mo_main_sponsor2.jpg`}
              alt=''
              className='h-full w-full'
            />
            <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
              콘텐츠 제작
              <br />
              <span className='text-primary-500'>후원하기</span>
            </div>
          </button>
          <button className='aspect-320/180 relative w-[calc(100%_-_80px)]'>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/sponsor/mo_main_sponsor3.jpg`}
              alt=''
              className='h-full w-full'
            />
            <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
              퐁당 글로벌
              <br />
              <span className='text-primary-500'>후원하기</span>
            </div>
          </button>
        </div>
      </section>
      <div
        className='fixed bottom-0 flex h-88 w-full justify-center bg-white-solid pt-16'
        data-comment='후원페이지 FOOTER'
      >
        <button className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
          정기후원
        </button>
        <button className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
          증액후원
        </button>
        <button className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
          일시후원
        </button>
      </div>
    </>
  );
};

export default SponsorMain;
