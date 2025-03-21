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
      // loop={true}
      navigation={true}
      // slidesPerGroup={15}
      loopAdditionalSlides={20}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={1300}
      // freeMode={true}
      spaceBetween={8}
      slidesPerView={`auto`}
      onSlideChange={() => {}}
      onSwiper={swiper => {}}
      breakpoints={{
        640: {
          // slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          // slidesPerView: 2,
          spaceBetween: 8,
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
          className={`aspect-[350/544] !w-350 cursor-pointer bg-cover bg-center bg-no-repeat max-lg:aspect-[106/136] max-lg:!h-136 max-lg:!w-106`}
          key={key}
        >
          <div
            key={key}
            className={`max-h-516 w-full max-w-350 flex-shrink-0 max-lg:max-h-136 max-lg:max-w-106`}
          >
            <img
              className={`aspect-[350/448] h-full max-h-448 w-full rounded-16 object-cover max-lg:aspect-[106/136] max-lg:rounded-8`}
              src={item?.src}
              width={350}
              height={448}
              alt=''
            />
            <div
              className={`flex flex-col items-start justify-center py-16 max-lg:hidden`}
            >
              {/* <p className={`text-regular14 text-grey-400`}>{item?.subtitle}</p> */}
              <p
                className={`text-bold24 line-clamp-1 text-grey-900 max-lg:hidden`}
              >
                {item?.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeFondantContentsSwiper;
