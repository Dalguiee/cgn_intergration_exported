// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 컴포넌트
import HomeTidingsCard from '@/components/home/tidings/homeTidingsCard';

const HomeTidingsPcTopArticleSwiper = ({
  pageMode = ``,
  findedMockupData = [],
}) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      className={`h-full w-full select-none overflow-visible`}
      loop={true}
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      // }}
      // freeMode={true}
      // loopAdditionalSlides={5}
      // centeredSlides={true}
      spaceBetween={12}
      slidesPerView={'auto'}
      onSlideChange={() => {}}
      onSwiper={swiper => {}}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1024: {
          // slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {findedMockupData?.map((item, key) => (
        <SwiperSlide className={`!w-560 max-lg:!w-277`} key={key}>
          <HomeTidingsCard
            pageMode={item?.category}
            key={item?.id}
            item={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeTidingsPcTopArticleSwiper;
