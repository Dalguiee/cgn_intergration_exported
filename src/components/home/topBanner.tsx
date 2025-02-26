// 개발중입니다.

// 훅
import React from 'react';

// 컴포넌트
import PaymentBox from '@/components/home/paymentBox';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 데이터
import { paymentMockupData } from '@/db/mockup';

const TopBanner = ({ mobile }) => {
  return (
    <div className={`flex h-fit flex-col items-center justify-start`}>
      <div
        className={`relative flex h-918 w-full items-start justify-center max-lg:h-[calc(918px+48px)]`}
      >
        <Swiper
          data-main-swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={`h-full w-full`}
          // scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {paymentMockupData?.map((obj, key) => (
            <SwiperSlide
              style={{
                backgroundImage: ` ${mobile ? `url(${obj?.moSrc})` : `url(${obj?.src})`} `,
              }}
              className={`flex w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat max-lg:h-[calc(100%-48px)] max-lg:justify-end lg:pt-200`}
              key={key}
            >
              <div
                className={`w-full max-w-1560 px-16 max-lg:mb-40 max-lg:pl-24`}
              >
                <div
                  className={`flex flex-col items-start justify-start lg:mb-200`}
                >
                  <span
                    className={`text-bold78 max-lg:text-bold32 text-white-solid`}
                  >
                    {obj?.title}
                    <br />
                    {obj?.depthTitle !== '' ? obj?.depthTitle : ''}
                  </span>
                  <span
                    className={`text-regular32 max-lg:text-regular16 text-grey-50`}
                  >
                    {obj?.subTitle}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`z-10 w-full max-w-1560 px-16 max-lg:min-h-361 max-lg:px-0 lg:absolute lg:left-1/2 lg:top-777 lg:translate-x-[-50%]`}
      >
        <PaymentBox />
      </div>
    </div>
  );
};

export default TopBanner;
