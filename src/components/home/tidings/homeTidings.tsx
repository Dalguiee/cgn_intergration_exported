// 훅
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import HomeCategoryList from '@/components/home/tidings/homeTidingsCategoryList';
import Section4PcTopArticleSwiper from '@/components/home/tidings/homeTidingsPcTopArticleSwiper';
import HomeTidingsSwiperButtons from './homeTidingsSwiperButtons';
import StyledButtons from '@/components/common/styledButtons';

/*
 *해당 페이지는 후원과 레이아웃이 같아 페이지 모드를 감지하여 받는 데이터만 따로 받도록 퍼블리싱 되었습니다.
 */
const HomeTidings = () => {
  const navigate = useNavigate();
  const [findedMockupData, setfindedMockupData] = useState([]); //
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0); //

  const prevButtonRef = useRef();
  const nextButtonRef = useRef();

  useEffect(() => {
    if (selectedCategoryArticleId === 0) {
      let allData = [];
      mockupData?.map(item => {
        // 캠페인 이벤트 데이터만 뺍니다
        if (item?.id !== 1) {
          allData = [...allData, ...item?.data];
        }
      });
      setfindedMockupData(allData);
    } else {
      const allData = mockupData?.filter(item => {
        return item?.id === selectedCategoryArticleId;
      });
      setfindedMockupData(allData?.[0]?.data);
    }
  }, [selectedCategoryArticleId]);

  return (
    <section
      className={`flex h-890 flex-col items-center justify-center gap-40 overflow-hidden bg-secondary-brown_bg_2 pl-180 max-lg:h-496 max-lg:gap-0 max-lg:pl-0 max-lg:pt-60 lg:pr-16`}
    >
      <div
        className={`flex w-full max-w-1560 justify-between px-16 pr-16 max-lg:mb-11`}
      >
        <div className={`flex items-center justify-start gap-24`}>
          <span
            className={`text-bold48 max-lg:text-bold24 whitespace-nowrap text-grey-900`}
          >
            소식
          </span>
          <div className={`w-full max-w-1560 overflow-visible max-lg:hidden`}>
            <HomeCategoryList
              selectedCategoryArticleId={selectedCategoryArticleId}
              setSelectedCategoryArticleId={setSelectedCategoryArticleId}
            />
          </div>
        </div>

        <div className={`flex items-center gap-24 max-lg:gap-16`}>
          <HomeTidingsSwiperButtons
            prevButtonRef={prevButtonRef}
            nextButtonRef={nextButtonRef}
          />

          <div className={`flex items-center justify-between gap-24`}>
            <StyledButtons
              text='소식 바로가기'
              formMode='mode2-r'
              colorMode='mode3'
              className={`w-139 max-lg:w-fit max-lg:border-none max-lg:bg-transparent max-lg:px-0`}
              arrowMode={true}
              onClick={() => {
                sessionStorage.setItem('scrollY', window.scrollY.toString());
                navigate(`/news/story`);
              }}
            />
          </div>

          {/* <button
            onClick={() => {
              sessionStorage.setItem('scrollY', window.scrollY.toString());
              navigate(`/news/story`);
            }}
            className={`flex items-center justify-center`}
          >
            <span className={`text-regular12 text-grey-900`}>바로가기</span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
              alt=''
            />
          </button> */}
        </div>
      </div>
      <div className={`w-full max-w-1560 overflow-visible lg:hidden`}>
        <HomeCategoryList
          selectedCategoryArticleId={selectedCategoryArticleId}
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>

      <div
        className={`w-full overflow-visible max-lg:mb-20 max-lg:px-0 max-lg:pb-0 max-lg:pl-16 max-lg:pt-0`}
      >
        <Section4PcTopArticleSwiper
          findedMockupData={findedMockupData}
          prevButtonRef={prevButtonRef}
          nextButtonRef={nextButtonRef}
        />
      </div>
    </section>
  );
};

export default HomeTidings;
