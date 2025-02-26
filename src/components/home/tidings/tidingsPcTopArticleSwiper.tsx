import { useRef } from 'react';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 컴포넌트
import TidingsCard from '@/components/home/tidings/tidingsCard';

const Section4PcTopArticleSwiper = ({
  pageMode = ``,
  findedMockupData = [],
}) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`overflow-visible`}
      spaceBetween={40}
      loop={true}
      // freeMode={true}
      // loopAdditionalSlides={10}
      slidesPerView={1}
      onSlideChange={e => console.log('swiperRef ::: ', e)}
      onSwiper={swiper => console.log(swiper)}
      breakpoints={
        {
          // 640: {
          //   slidesPerView: 1,
          //   spaceBetween: 16,
          // },
          // 768: {
          //   slidesPerView: 2,
          //   spaceBetween: 32,
          // },
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 64,
          // },
        }
      }
    >
      {findedMockupData?.map((item, key) => (
        <SwiperSlide
          className={`!w-560 max-lg:!w-277 max-md:!w-full`}
          key={key}
        >
          <TidingsCard pageMode={pageMode} key={item?.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Section4PcTopArticleSwiper;
