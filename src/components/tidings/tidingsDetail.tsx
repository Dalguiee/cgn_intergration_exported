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
import { mockupData } from '@/db/mockup';

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

const TidingsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subDepth } = useParams(); // tidings 이후에 붙는 params
  const querySearch = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(querySearch);
  const [allData, setAllData] = useState(null); // 기사 전체 데이터
  const [currentData, setCurrentData] = useState({}); //
  const [beforeData, setBeforeData] = useState({});
  const [afterData, setAfterData] = useState({});

  // 기사 찾는 함수
  const articleSearch = id => {
    const result = allData?.data?.filter(item => item?.id == id);
    if (result?.length > 0) {
      return result[0];
    } else {
      return null;
    }
  };

  // 페이지에 따라 데이터 가져오기
  useEffect(() => {
    if (location.pathname) {
      switch (location.pathname) {
        case '/news/campaignEvent/detail':
          setAllData(mockupData[0]);
          break;
        case '/news/story/detail':
          setAllData(mockupData[1]);
          break;
        case '/news/supporter/detail':
          setAllData(mockupData[2]);
          break;
        case '/news/press/detail':
          setAllData(mockupData[3]);
          break;
        default:
          setAllData(mockupData[0]);
      }
    }
  }, [queryData]);

  // 데이터 셋팅
  useEffect(() => {
    if (allData) {
      const articleID = queryData.articleId;
      // 이전데이터
      if (Number(articleID) - 1) {
        setBeforeData(articleSearch(Number(articleID) - 1));
      } else {
        setBeforeData(null);
      }
      // 현재 데이터
      if (Number(articleID)) {
        setCurrentData(articleSearch(Number(articleID)));
      } else {
        setCurrentData(null);
      }
      // 다음 데이터
      if (Number(articleID) + 1) {
        setAfterData(articleSearch(Number(articleID) + 1));
      } else {
        setAfterData(null);
      }
    }
  }, [queryData.articleId, allData]);

  return (
    <section
      className={`flex w-full flex-col items-center justify-center px-20 pb-160 pt-40 max-lg:px-20 max-lg:py-0`}
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
            <span className={`text-bold24 line-clamp-2 text-grey-900`}>
              {currentData?.detailTitle}
            </span>
          </div>
          <span
            className={`text-regular14 w-fit whitespace-nowrap text-grey-400 lg:ml-40`}
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
              <span className={`text-bold24 max-lg:text-bold18 text-grey-500`}>
                {currentData?.subTitle}
              </span>
            </div>
            <div>
              <span
                className={`text-regular18 max-lg:text-regular16 text-grey-500`}
              >
                {currentData?.content}
              </span>
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
                  `/news/${subDepth}/detail?articleId=${beforeData?.id}`
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
              {beforeData?.startDate}~{beforeData?.endDate}
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
                    `/news/${subDepth}/detail?articleId=${afterData?.id}`
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
                {afterData?.startDate}~{afterData?.endDate}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full items-start justify-end max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/news/${subDepth}`);
            }}
            className={`mt-60 flex h-64 w-300 items-center justify-center rounded-8 bg-primary-500 max-lg:mb-32 max-lg:mt-16 max-lg:h-52 max-lg:w-full`}
          >
            <span className={`text-bold24 max-lg:text-bold18 text-white-solid`}>
              목록
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TidingsDetail;
