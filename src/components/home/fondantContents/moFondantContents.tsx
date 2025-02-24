// 개발중입니다

// 훅
import React from 'react';

//데이터
import { mediaData } from '@/db/mockup';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSec({ mockupData }) {
  return (
    <Swiper
      data-main-swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`h-full w-full`}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {mockupData?.map((item, key) => (
        <SwiperSlide
          style={{ backgroundImage: `url(${item?.src})` }}
          className={`aspect-[106/136] h-full w-full max-w-106 rounded-16 bg-cover bg-center bg-no-repeat`}
          key={key}
        ></SwiperSlide>
      ))}
    </Swiper>
  );
}

const MoFondantContents = () => {
  return (
    <div
      className={`flex h-300 w-full flex-col items-start justify-center bg-[url(/public/images/bg/section3_bg.png)] bg-cover bg-center bg-no-repeat lg:hidden`}
    >
      {/* 컨텐츠 헤더 */}
      <div className={`mb-12 flex w-full items-end justify-between pl-16`}>
        <div className={`flex flex-col items-start justify-start`}>
          <span
            className={`text-bold48 max-lg:text-bold24 text-white-solid max-lg:text-grey-900`}
          >
            퐁당 콘텐츠
          </span>
        </div>
        <div className={`max-lg:hidden`}>
          <span>퐁당 바로가기</span>
        </div>
      </div>
      {/* 슬라이딩 컨텐츠 */}
      <div className={`h-full max-h-136 w-full pl-16`}>
        <SwiperSec mockupData={mediaData} />
      </div>
    </div>
  );
};

export default MoFondantContents;
