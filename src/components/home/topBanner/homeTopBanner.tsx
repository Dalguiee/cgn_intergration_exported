// 훅
import React from 'react';

// 컴포넌트
import HomePaymentBox from '@/components/home/topBanner/homePaymentBox';
import HomeTobBannerContext from './homeTobBannerContext';

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

// 데이터
export const paymentMockupData = [
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/home/main_renewal.jpg`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/home/mo_main_renewal.jpg`,
    title: `CGN 홈페이지`,
    depthTitle: `리뉴얼 오픈`,
    subTitle: `CGN 개국 20주년, 선교의 내일을 더하다`,
    link: `https://www.cgnkorea.net/`,
  },
  {
    id: 1,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/home/main_family.jpg`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/home/mo_main_family.jpg`,
    title: `대대손손`,
    depthTitle: `대대선교`,
    subTitle: `CGN 개국 20주년 후원 캠페인`,
    link: ``,
  },
  {
    id: 2,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/home/main_fondant.jpg`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/home/mo_main_fondant.jpg`,
    title: `CGN의 모든 콘텐츠는`,
    depthTitle: `퐁당에서 즐기세요!`,
    subTitle: `큐티, 영화, 다큐 등 다양한 기독 콘텐츠`,
    link: `https://www.fondant.kr/`,
  },
  {
    id: 3,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/home/main_fondant_conference.jpg`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/home/mo_main_fondant_conference.jpg`,
    title: `2025`,
    depthTitle: `퐁당미디어콘퍼런스`,
    subTitle: `참가신청 안내`,
    link: `https://fondantmc.com/`,
  },
  {
    id: 4,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/home/main_old.jpg`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/home/mo_main_old.jpg`,
    title: `구 홈페이지`,
    depthTitle: `방문하기`,
    subTitle: `추억의 과거 콘텐츠 바로가기`,
    link: `https://event1.cgntv.net/old/home.html`,
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
          loop={true}
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
              onClick={() => {
                window.open(obj?.link, '_blank');
              }}
              style={{
                backgroundImage: ` ${mobile ? `url(${obj?.moSrc})` : `url(${obj?.src})`} `,
              }}
              className={`flex w-full cursor-pointer flex-col items-center justify-start bg-cover bg-center bg-no-repeat max-lg:h-[calc(100%-36px)] max-lg:justify-end lg:pt-200`}
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
