import React, { useEffect, useRef } from 'react';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const popupData = [
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
  {
    id: 0,
    src: `/public/images/popup/test_content.png`,
    moSrc: `/public/images/popup/test_content.png`,
  },
];

const Popup = ({ popupOpen, setPopupOpen }) => {
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

    window.addEventListener('load', oneDayCheck);

    return () => window.removeEventListener('load', oneDayCheck);
  }, []);

  return (
    <>
      <div
        className={`${popupOpen ? `` : `pointer-events-none hidden select-none`} fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-grey-900 opacity-95`}
      ></div>
      <div
        className={`${popupOpen ? `` : `pointer-events-none hidden select-none`} fixed left-[50%] top-[50%] z-20 h-600 w-600 translate-x-[-50%] translate-y-[-50%] transform rounded-8 bg-white-solid px-18 pt-18`}
      >
        <div
          className={`mb-24 flex h-478 w-564 flex-col items-center justify-start`}
        >
          <Swiper
            data-popup-swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className={`h-full w-full`}
            // navigation={true}
            speed={500}
            // loop={true}
            // scrollbar={{ draggable: true }}
            // loopAdditionalSlides={10}
            // scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            spaceBetween={8}
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
                  backgroundImage: ` ${mobile ? `url(${obj?.moSrc})` : `url(${obj?.src})`} `,
                }}
                className={`bg-no-rep h-full w-full bg-cover bg-center`}
                key={key}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`flex w-full items-center justify-center gap-4`}>
          <button
            onClick={() => {
              setOneDayPopupDelay();
              setPopupOpen(false);
            }}
            className={`flex h-54 w-full items-center justify-center rounded-4 border-1 border-grey-900`}
          >
            <span className={`text-bold16 text-grey-900`}>1일간 열지 않음</span>
          </button>
          <button
            onClick={() => {
              setPopupOpen(false);
            }}
            className={`flex h-54 w-full items-center justify-center rounded-4 border-1 border-grey-900`}
          >
            <span className={`text-bold16 text-grey-900`}>닫기</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
