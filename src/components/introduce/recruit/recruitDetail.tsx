// 훅
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

// 데이터
import { recruitData } from '@/db/mockup';

const SwiperSec = ({ currentData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={`mt-16`}
      // scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {currentData?.contentSrc?.map((obj, key) => (
        <SwiperSlide key={key}>
          <img src={obj} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const RecruitDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(querySearch);
  const [currentData, setCurrentData] = useState([]);

  // 기사 찾는 함수
  const articleSearch = id => {
    const result = recruitData?.filter(
      item => item?.id == queryData?.articleId
    );
    if (result?.length > 0) {
      setCurrentData(result?.[0]);
    }
  };

  // 디테일페이지 넘어올 경우 맨 위로 올려줍니다
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section
      className={`flex w-full flex-col items-center justify-center px-20 pb-160 pt-40 max-lg:mb-20 max-lg:px-20 max-lg:py-0`}
    >
      <div className='w-full max-w-1200'>
        <div
          className={`flex items-center justify-between border-b-1 border-t-3 border-grey-900 px-4 py-24 max-lg:flex-col max-lg:items-start max-lg:gap-8 max-lg:border-b-1 max-lg:border-t-0 max-lg:border-b-grey-100 max-lg:py-12`}
        >
          <div className={`flex justify-center gap-16`}>
            {currentData?.tag?.map((obj, key) => {
              if (obj?.id !== 1 && obj?.id !== 3) {
                return (
                  <div key={key} className={`h-full max-lg:hidden`}>
                    <TagIcon
                      text={obj?.text}
                      id={obj?.id}
                      mode={obj?.mode}
                      key={key}
                    />
                  </div>
                );
              }
            })}
            <span className={`text-bold24 text-grey-900`}>
              {currentData?.title}
            </span>
          </div>
          <span
            className={`text-regular14 ml-40 w-fit whitespace-nowrap text-grey-400`}
          >
            {currentData?.startDate}
          </span>
        </div>
        <div
          className={`flex flex-col-reverse items-start justify-center py-60 max-lg:flex-col max-lg:pb-60 max-lg:pt-0`}
        >
          <div className={`w-full`}>
            <SwiperSec currentData={currentData} />
          </div>
          <div className={`mb-16 max-lg:mt-16`}>
            <div className={`mb-16 max-lg:mt-16`}>
              <span className={`text-bold24 text-grey-500`}>
                {currentData?.subTitle}
              </span>
            </div>
            <div>
              <span className={`text-regular18 text-grey-500`}>
                {currentData?.content}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-full border-b-3 border-t-3 border-grey-900 px-4 max-lg:hidden`}
        ></div>
        <div
          className={`flex w-full items-start justify-end max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/introduce/recruit`);
            }}
            className={`mt-60 flex h-64 w-300 items-center justify-center rounded-8 bg-primary-500 max-lg:mb-32 max-lg:mt-16 max-lg:h-52 max-lg:w-full`}
          >
            <span className={`text-bold24 text-white-solid`}>목록</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruitDetail;
