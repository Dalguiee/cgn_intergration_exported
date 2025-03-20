// 훅
import React from 'react';

// 컴포넌트
import HomePaymentBox from '@/components/home/topBanner/homePaymentBox';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';
import HomeTobBannerContext from './homeTobBannerContext';

// 데이터
export const paymentMockupData = [
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/bg/main_first_section_bg.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/bg/mo_main_first_section_bg.png`,
    title: `세상에 없는 가치와`,
    depthTitle: `감동을 담다`,
    subTitle: `CGN이 세상에 없는 가치와 감동을 전합니다.`,
  },
  {
    id: 1,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/bg/main_first_section_bg.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/bg/mo_main_first_section_bg.png`,
    title: `세상에 없는 가치와`,
    depthTitle: `감동을 담다`,
    subTitle: `CGN이 세상에 없는 가치와 감동을 전합니다.`,
  },
  {
    id: 2,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/bg/main_first_section_bg.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/bg/mo_main_first_section_bg.png`,
    title: `세상에 없는 가치와`,
    depthTitle: `감동을 담다`,
    subTitle: `CGN이 세상에 없는 가치와 감동을 전합니다.`,
  },
  {
    id: 3,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/bg/main_first_section_bg.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/bg/mo_main_first_section_bg.png`,
    title: `세상에 없는 가치와`,
    depthTitle: `감동을 담다`,
    subTitle: `CGN이 세상에 없는 가치와 감동을 전합니다.`,
  },
];

const HomeTopBanner = ({ mobile }) => {
  return (
    <div className={`relative flex h-fit flex-col items-center justify-start`}>
      <div
        className={`relative flex h-918 w-full items-start justify-center max-lg:h-[calc(453px+48px)]`}
      >
        <Swiper
          data-main-swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          className={`h-full w-full`}
          navigation={true}
          // scrollbar={{ draggable: true }}
          speed={mobile ? 500 : 1300}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          // breakpoints={{
          //   640: { speed: 500 },
          //   768: {
          //     speed: 500,
          //   },
          //   1024: {
          //     speed: 1300,
          //   },
          // }}
        >
          {paymentMockupData?.map((obj, key) => (
            <SwiperSlide
              style={{
                backgroundImage: ` ${mobile ? `url(${obj?.moSrc})` : `url(${obj?.src})`} `,
              }}
              className={`flex w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat max-lg:h-[calc(100%-36px)] max-lg:justify-end lg:pt-200`}
              key={key}
            >
              <HomeTobBannerContext obj={obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`z-10 flex h-fit w-full max-w-1560 flex-col items-center justify-end px-16 max-lg:min-h-240 max-lg:px-0 lg:absolute lg:bottom-101 lg:left-1/2 lg:translate-x-[-50%]`}
      >
        <HomePaymentBox />
      </div>
    </div>
  );
};

export default HomeTopBanner;
