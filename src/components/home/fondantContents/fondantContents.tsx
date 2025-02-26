// 개발중입니다

//데이터
import { mediaData } from '@/db/mockup';
import Btn from '@/components/common/btn';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSec({ mockupData }) {
  console.log(mockupData);
  return (
    <Swiper
      data-main-swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`h-full w-full overflow-visible`}
      loop={true}
      // loopAdditionalSlides={10}
      // scrollbar={{ draggable: true }}
      // pagination={{ clickable: true }}
      spaceBetween={8}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
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
      {mockupData?.map((item, key) => (
        <SwiperSlide
          // style={{ backgroundImage: `url(${item?.src})` }}
          className={`aspect-[350/544] !w-350 bg-cover bg-center bg-no-repeat max-lg:aspect-[106/136] max-lg:!h-136 max-lg:!w-106`}
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
              <p className={`text-regular14 text-grey-400`}>{item?.subtitle}</p>
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
}

const FondantContents = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/bg/section3_bg.png)`,
      }}
      className={`flex h-906 w-full flex-col items-start justify-center overflow-hidden bg-cover bg-center bg-no-repeat max-lg:h-300`}
    >
      {/* 컨텐츠 헤더 */}
      <div
        className={`mb-40 flex w-full items-end justify-between px-16 max-lg:mb-12 max-lg:pl-16 lg:px-180`}
      >
        <div className={`flex flex-col items-start justify-start`}>
          <span
            className={`text-bold48 max-lg:text-bold24 text-white-solid max-lg:text-grey-900`}
          >
            퐁당 콘텐츠
          </span>
          <span className={`text-regular24 text-white-solid max-lg:hidden`}>
            4만 여개의 다양한 콘텐츠를 무료로 시청하세요!
          </span>
        </div>
        <div className={`flex items-center justify-center lg:hidden`}>
          <span className={`text-regular12 text-grey-900`}>퐁당 바로가기</span>
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
            alt=''
          />
        </div>

        <div className={`max-lg:hidden`}>
          <Btn
            text='퐁당 바로가기'
            className='w-139'
            formMode='mode2-r'
            colorMode='mode3'
            arrowMode={true}
          />
        </div>
      </div>
      {/* 슬라이딩 컨텐츠 */}
      <div className={`w-full overflow-visible pl-180 max-lg:pl-16`}>
        <SwiperSec mockupData={mediaData} />
      </div>
    </div>
  );
};

export default FondantContents;
