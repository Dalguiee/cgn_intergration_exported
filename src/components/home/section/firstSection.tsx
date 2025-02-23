// 개발중입니다.

// 훅
import React from 'react';

// 컴포넌트
import PaymentBox from '@/components/home/section/paymentBox';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 데이터
import { paymentMockupData } from '@/db/mockup';

function SwiperSec({ mockupData }) {
  return (
    <Swiper
      data-main-swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`h-full w-full max-lg:h-[calc(100%+48px)]`}
      // scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {mockupData?.map((obj, key) => (
        <SwiperSlide
          style={{ backgroundImage: `url(${obj?.src})` }}
          className={`flex w-full items-start justify-center bg-cover bg-center bg-no-repeat pt-200 max-lg:h-[calc(100%-48px)]`}
          key={key}
        >
          <div className={`h-full w-full max-w-1560 px-16`}>
            <div className={`mb-200 flex flex-col items-start justify-center`}>
              <span className={`text-bold78 text-white-solid`}>
                {obj?.title}
                <br />
                {obj?.depthTitle !== '' ? obj?.depthTitle : ''}
              </span>
              <span className={`text-regular32 text-grey-50`}>
                {obj?.subTitle}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const FirstSection = () => {
  return (
    <>
      <section
        className={`relative flex h-918 w-full items-start justify-center max-lg:mb-58`}
      >
        <SwiperSec mockupData={paymentMockupData} />
      </section>
      <div
        className={`top-777 z-10 w-full max-w-1560 px-16 max-lg:px-0 lg:absolute lg:left-1/2 lg:translate-x-[-50%]`}
      >
        <PaymentBox />
      </div>
    </>
  );
};

export default FirstSection;
