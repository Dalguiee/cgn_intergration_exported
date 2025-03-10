// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 컴포넌트
import TidingsCard2 from '@/components/tidings/mission/tidingsCard2';

const PcTopArticleSwiper = ({ pageMode, findedMockupData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`px-56 pb-40`}
      spaceBetween={64}
      slidesPerView={
        findedMockupData && findedMockupData?.length < 3 ? 2 : undefined
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView:
            findedMockupData && findedMockupData?.length >= 3 ? 3 : 1,
          spaceBetween: 64,
        },
      }}
    >
      {findedMockupData?.map((item, key) => (
        <SwiperSlide className={`flex items-center justify-center`} key={key}>
          <TidingsCard2 pageMode={pageMode} key={item?.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PcTopArticleSwiper;
