// 훅
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 컴포넌트
import ResponsiveScanner from '@/components/common/responsiveScanner';

const popupData = [
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
    moSrc: `${import.meta.env.VITE_PUBLIC_URL}images/popup/test_content.png`,
  },
];

const Popup = ({ popupOpen, setPopupOpen }) => {
  const location = useLocation();
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);

  const setOneDayPopupDelay = () => {
    const popDay = new Date();
    popDay.setHours(popDay.getHours() + 12);
    document.cookie = `event=${`oneDay`}; expires=${popDay.toUTCString()}`;
  };

  useEffect(() => {
    const oneDayCheck = () => {
      if (document.cookie.match('oneDay')) {
        setPopupOpen(false);
      } else {
        setPopupOpen(true);
      }
    };
    oneDayCheck();
  }, [location?.pathname]);

  return (
    <>
      <div
        style={{ boxShadow: `0 0 8px 0px #969696` }}
        className={`${popupOpen ? `` : `pointer-events-none hidden select-none`} fixed left-[50%] top-[50%] z-[110] h-fit w-full max-w-600 translate-x-[-50%] translate-y-[-50%] transform overflow-hidden max-lg:w-full max-lg:max-w-345`}
      >
        <Swiper
          data-popup-swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={`w-full`}
          // navigation={true}
          speed={500}
          // loop={true}
          // scrollbar={{ draggable: true }}
          // loopAdditionalSlides={10}
          // scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          spaceBetween={12}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          // breakpoints={{
          //   640: {
          //     // slidesPerView: 1,
          //     spaceBetween: 8,
          //   },
          //   768: {
          //     // slidesPerView: 2,
          //     spaceBetween: 8,
          //   },
          //   1024: {
          //     // slidesPerView: 4,
          //     spaceBetween: 24,
          //   },
          // }}
        >
          {popupData?.map((obj, key) => (
            <SwiperSlide
              style={{
                backgroundImage: `${mobile ? `url(${obj?.moSrc})` : `url(${obj?.src})`}`,
              }}
              className={`h-497 w-full bg-cover bg-center bg-no-repeat max-lg:h-292`}
              key={key}
            ></SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`flex w-full items-center justify-between bg-white-solid px-16 pb-20 pt-36 max-lg:px-12 max-lg:py-12`}
        >
          <button
            onClick={() => {
              setOneDayPopupDelay();
              setPopupOpen(false);
            }}
            className={``}
          >
            <span
              className={`text-regular16 max-lg:text-regular14 text-grey-500`}
            >
              1일간 열지 않음
            </span>
          </button>
          <button
            onClick={() => {
              setPopupOpen(false);
            }}
            className={``}
          >
            <span
              className={`text-regular16 max-lg:text-regular14 text-grey-900`}
            >
              닫기
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
