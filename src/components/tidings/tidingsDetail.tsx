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
      scrollbar={{ draggable: true }}
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

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  // 과장님 코드를 학습하고 재구성한 코드이며 폐기될 예정
  useEffect(() => {
    const mockupExport = mockupData?.filter(item => {
      return location.pathname.includes(item.path);
    });
    const mockupExportedData = mockupExport?.[0]?.data;
    setAllData(mockupExportedData);
  }, [queryData?.articleId, location]);

  useEffect(() => {
    const findedArticle = allData?.filter(
      item => item.id === Number(queryData?.articleId)
    );
    const findedBeforeArticle = allData?.filter(
      item => item.id < Number(queryData?.articleId)
    );
    const findedAfterArticle = allData?.filter(
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
  }, [allData, queryData?.articleId]);

  // 과장님으로부터 안전하게 재구성된 코드
  // // 기사 찾는 함수
  // const articleSearch = id => {
  //   const result = allData?.data?.filter(item => item.id == id);
  //   if (result?.length > 0) {
  //     return result[0];
  //   } else {
  //     return null;
  //   }
  // };

  // // 페이지에 따라 데이터 가져오기
  // useEffect(() => {
  //   if (location.pathname) {
  //     switch (location.pathname) {
  //       case '/tidings/campaign/detail':
  //         setAllData(mockupData[0]);
  //         break;
  //       case '/tidings/mission/detail':
  //         setAllData(mockupData[1]);
  //         break;
  //       case '/tidings/support/detail':
  //         setAllData(mockupData[2]);
  //         break;
  //       case '/tidings/broadcast/detail':
  //         setAllData(mockupData[3]);
  //         break;
  //       default:
  //         setAllData(mockupData[0]);
  //     }
  //   }
  // }, [queryData]);

  // // 데이터 셋팅
  // useEffect(() => {
  //   if (allData) {
  //     const articleID = queryData.articleId;
  //     // 이전데이터
  //     if (Number(articleID) - 1) {
  //       setBeforeData(articleSearch(Number(articleID) - 1));
  //     } else {
  //       setBeforeData(null);
  //     }
  //     // 현재 데이터
  //     if (Number(articleID)) {
  //       setCurrentData(articleSearch(Number(articleID)));
  //     } else {
  //       setCurrentData(null);
  //     }
  //     // 다음 데이터
  //     if (Number(articleID) + 1) {
  //       setAfterData(articleSearch(Number(articleID) + 1));
  //     } else {
  //       setAfterData(null);
  //     }
  //   }
  // }, [queryData.articleId, allData]);

  // 디테일페이지 넘어올 경우 맨 위로 올려줍니다
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section
      className={`flex w-full flex-col items-center justify-center pb-160 pt-40 max-lg:mb-20 max-lg:px-20 max-lg:py-0`}
    >
      <div className='w-full max-w-1200'>
        <div
          className={`flex items-center justify-between border-b-1 border-t-3 border-grey-900 px-4 py-24 max-lg:flex-col max-lg:items-start max-lg:gap-20 max-lg:gap-8 max-lg:border-b-1 max-lg:border-t-0 max-lg:border-b-grey-100`}
        >
          <div className={`flex items-center justify-center gap-16`}>
            {currentData?.tag?.map((obj, key) => (
              <div key={key} className={`max-lg:hidden`}>
                <TagIcon
                  text={obj?.text}
                  id={obj?.id}
                  mode={obj?.mode}
                  key={key}
                />
              </div>
            ))}
            <span className={`text-bold24 text-grey-900`}>
              {currentData?.detailTitle}
            </span>
          </div>
          <span className={`text-regular14 text-grey-400`}>
            {currentData?.startDate}
          </span>
        </div>
        <div className={`py-60 max-lg:pb-60 max-lg:pt-16`}>
          <div className={`mb-16`}>
            <span className={`text-bold24 text-grey-500`}>
              {currentData?.subTitle}
            </span>
          </div>
          <div>
            <span className={`text-regular18 text-grey-500`}>
              {currentData?.content}
            </span>
          </div>
          <SwiperSec currentData={currentData} />
        </div>

        <div
          className={`w-full border-b-3 border-t-3 border-grey-900 px-4 max-lg:hidden`}
        >
          <div
            className={`${beforeData ? '' : 'hidden'} flex h-80 items-center justify-between`}
          >
            <button
              onClick={() => {
                navigate(
                  `/tidings/${subDepth}/detail?articleId=${beforeData?.id}`
                );
              }}
            >
              <span className={`text-bold16 text-grey-900`}>이전 글</span>
              <span className={`text-regular16 ml-16 text-grey-500`}>
                {beforeData?.title}
              </span>
            </button>
            <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
              {beforeData?.startDate}~{beforeData?.endDate}
            </span>
          </div>

          <div className={`${beforeData ? 'border-t-1' : ''} border-grey-900`}>
            <div
              className={`${afterData ? '' : 'hidden'} flex h-80 items-center justify-between`}
            >
              <button
                onClick={() => {
                  navigate(
                    `/tidings/${subDepth}/detail?articleId=${afterData?.id}`
                  );
                }}
              >
                <span className={`text-bold16 text-grey-900`}>다음 글</span>
                <span className={`text-regular16 ml-16 text-grey-500`}>
                  {afterData?.title}
                </span>
              </button>
              <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
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
              navigate(`/tidings/${subDepth}`);
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

export default TidingsDetail;
