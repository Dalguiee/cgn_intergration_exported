// 훅
import React from 'react';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeFondantContentsSwiper = ({ mediaData }) => {
  return (
    <Swiper
      data-main-fondant-swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      className={`h-full w-full select-none overflow-visible`}
      loop={true}
      // navigation={true}
      // slidesPerGroup={15}
      loopAdditionalSlides={20}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={2500}
      // freeMode={true}
      spaceBetween={8}
      slidesPerView={`auto`}
      onSlideChange={() => {}}
      onSwiper={swiper => {}}
      breakpoints={{
        440: {
          // slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          // slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          // slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {mediaData?.map((item, key) => (
        <SwiperSlide
          onClick={() => {
            window.open(`https://www.fondant.kr/`, `_blank`);
          }}
          // style={{ backgroundImage: `url(${item?.src})` }}
          className={`aspect-[350/502] !w-350 cursor-pointer bg-cover bg-center bg-no-repeat max-lg:aspect-[150/215] max-lg:!w-[39.8%]`}
          key={key}
        >
          <img
            className={`h-full w-full rounded-16 object-cover first-letter:w-full max-lg:rounded-8`}
            src={item?.src}
            width={350}
            height={502}
            alt=''
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeFondantContentsSwiper;
