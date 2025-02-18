// 훅
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// 컴포넌트
import TagIcon from '@/components/common/tagBtn';

// 스와이퍼 모듈
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swiper_sec = ({ detailData }) => {
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
      {detailData?.content_src.map((obj, key) => (
        <SwiperSlide key={key}>
          <img src={obj} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TidingsDetail = () => {
  const location = useLocation();
  // detailData 는 body 데이터로써 detail 에서 컨텐츠를 보여주기 위해 직접 전송됩니다.
  // allData 는 detail 에서 해당 페이지의 이전, 이후 페이지를 추적하기 위하여 같이 전송합니다.
  const { detailData, allData } = location.state;
  const navi = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // params 를 추적하여 tidings 에서 어떠한 데이터의 detail 인지 분기처리를 자동으로 합니다.
  // 마지막 목록으로 돌아가는 navigate 부분에서도 사용됩니다.
  const { subDepth } = useParams();

  // 이전 이후 페이지를 분기하는 데이터 필터링 부분입니다.
  const beforeData = allData.filter(item => item.id < detailData?.id);
  beforeData?.sort((a, b) => b.id - a.id);
  const afterData = allData.filter(item => item.id > detailData?.id);

  if (detailData?.length === 0) return <></>;
  return (
    <section
      className={`flex w-full flex-col items-center justify-center pb-160 pt-40 max-lg:mb-20 max-lg:px-20 max-lg:py-0`}
    >
      <div className='w-full max-w-1200'>
        <div
          className={`flex items-center justify-between border-b-1 border-t-3 border-grey-900 px-4 py-24 max-lg:flex-col max-lg:items-start max-lg:gap-20 max-lg:gap-8 max-lg:border-b-1 max-lg:border-t-0 max-lg:border-b-grey-100`}
        >
          <div className={`flex items-center justify-center gap-16`}>
            {detailData?.tag.map((obj, key) => (
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
              {detailData?.detail_title}
            </span>
          </div>
          <span className={`text-regular14 text-grey-400`}>
            {detailData?.start_date}
          </span>
        </div>
        <div className={`py-60 max-lg:pb-60 max-lg:pt-16`}>
          <div className={`mb-16`}>
            <span className={`text-bold24 text-grey-500`}>
              {detailData?.sub_title}
            </span>
          </div>
          <div>
            <span className={`text-regular18 text-grey-500`}>
              {detailData?.content}
            </span>
          </div>
          <Swiper_sec detailData={detailData} />
        </div>

        <div
          className={`w-full border-b-3 border-t-3 border-grey-900 px-4 max-lg:hidden`}
        >
          <div
            className={`${beforeData?.[0] ? '' : 'hidden'} flex h-80 items-center justify-between`}
          >
            <button
              onClick={() => {
                navi(`/tidings/${subDepth}/detail`, {
                  state: { detailData: beforeData?.[0], allData },
                });
              }}
            >
              <span className={`text-bold16 text-grey-900`}>이전 글</span>
              <span className={`ml-16 text-regular16 text-grey-500`}>
                {beforeData[0] ? beforeData?.[0]?.title : ''}
              </span>
            </button>
            <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
              {beforeData[0] ? beforeData?.[0]?.start_date : ''}~
              {beforeData[0] ? beforeData?.[0]?.end_date : ''}
            </span>
          </div>

          <div
            className={`${beforeData?.[0] && afterData?.[0] ? 'border-t-1' : ''} border-grey-900`}
          >
            <div
              className={`${afterData?.[0] ? '' : 'hidden'} flex h-80 items-center justify-between`}
            >
              <button
                onClick={() => {
                  navi(`/tidings/${subDepth}/detail`, {
                    state: { detailData: afterData?.[0], allData },
                  });
                }}
              >
                <span className={`text-bold16 text-grey-900`}>다음 글</span>
                <span className={`ml-16 text-regular16 text-grey-500`}>
                  {afterData?.[0] ? afterData?.[0]?.title : ''}
                </span>
              </button>
              <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
                {afterData?.[0] ? afterData?.[0]?.start_date : ''}~
                {afterData?.[0] ? afterData?.[0]?.end_date : ''}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full items-start justify-end max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navi(`/tidings/${subDepth}`);
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
