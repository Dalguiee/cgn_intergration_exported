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

// 데이터
import { noticeData } from '@/db/mockup';
import HTMLReactParser from 'html-react-parser';

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

const CustomerCenterNoticeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(querySearch);
  const [currentData, setCurrentData] = useState({}); //
  const [beforeData, setBeforeData] = useState({});
  const [afterData, setAfterData] = useState({});

  useEffect(() => {
    const findedArticle = noticeData?.filter(
      item => item.id === Number(queryData?.articleId)
    );
    const findedBeforeArticle = noticeData?.filter(
      item => item.id < Number(queryData?.articleId)
    );
    const findedAfterArticle = noticeData?.filter(
      item => item.id > Number(queryData?.articleId)
    );

    setCurrentData(item => {
      if (queryData?.articleId) {
        return findedArticle?.[0];
      } else {
        return null;
      }
    });
    setBeforeData(item => {
      if (queryData?.articleId) {
        return findedBeforeArticle?.[findedBeforeArticle?.length - 1];
      } else {
        return null;
      }
    });
    setAfterData(item => {
      if (queryData?.articleId) {
        return findedAfterArticle?.[0];
      } else {
        return null;
      }
    });
  }, [queryData?.articleId]);

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
          <span className={`text-bold24 text-grey-900`}>
            {currentData?.title}
          </span>
          <span
            className={`text-regular14 ml-40 w-fit whitespace-nowrap text-grey-400`}
          >
            {currentData?.date}
          </span>
        </div>
        <div
          className={`flex flex-col-reverse items-start justify-center py-60 max-lg:flex-col max-lg:pb-60 max-lg:pt-0`}
        >
          <div className={`mb-16 max-lg:mt-16`}>
            <div className={`mb-16 max-lg:mt-16`}>
              <span className={`text-bold24 text-grey-500`}>
                {currentData?.subTitle}
              </span>
            </div>
            <div>
              <p className={`text-regular18 whitespace-pre-line text-grey-500`}>
                <span>{currentData?.text}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full border-b-3 border-t-3 border-grey-900 px-4 max-lg:hidden`}
        >
          {/* 이전글 창 */}
          <div
            className={`${beforeData ? '' : 'hidden'} flex h-80 items-center justify-between`}
          >
            <button
              className={`flex items-center justify-start`}
              onClick={() => {
                navigate(
                  `/customercenter/notice/detail?articleId=${beforeData?.id}`
                );
              }}
            >
              <span className={`text-bold16 text-nowrap text-grey-900`}>
                이전 글
              </span>
              <span
                className={`text-regular16 ml-16 mr-31 line-clamp-1 text-grey-500`}
              >
                {beforeData?.title}
              </span>
            </button>
            <span
              className={`text-regular14 text-nowrap text-grey-400 max-lg:hidden`}
            >
              {beforeData?.date}
            </span>
          </div>

          {/* 다음글 창 */}
          <div
            className={`${afterData ? '' : 'hidden'} ${beforeData ? 'border-t-1' : ''} border-grey-900`}
          >
            <div className={`flex h-80 items-center justify-between`}>
              <button
                className={`flex items-center justify-start`}
                onClick={() => {
                  navigate(
                    `/customercenter/notice/detail?articleId=${afterData?.id}`
                  );
                }}
              >
                <span className={`text-bold16 text-nowrap text-grey-900`}>
                  다음 글
                </span>
                <span
                  className={`text-regular16 ml-16 mr-31 line-clamp-1 text-grey-500`}
                >
                  {afterData?.title}
                </span>
              </button>
              <span
                className={`text-regular14 text-nowrap text-grey-400 max-lg:hidden`}
              >
                {afterData?.date}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full items-start justify-end max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/customercenter/notice`);
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

export default CustomerCenterNoticeDetail;
