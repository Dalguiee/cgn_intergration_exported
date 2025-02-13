import { useLocation, useNavigate } from 'react-router-dom';
import TagIcon from '../common/tagBtn';

import { tidingsMockup } from '@/db/mockup';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Swiper_sec = ({ detailData }) => {
  return (
    <Swiper
      className={`mt-16`}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {detailData.content_src.map((obj, key) => (
        <SwiperSlide key={key}>
          <img src={obj} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TidingsDetail = () => {
  const location = useLocation();
  const detailData = location.state;
  const navi = useNavigate();

  const beforeData = tidingsMockup.filter(item => item.id < detailData.id);
  beforeData.sort((a, b) => b.id - a.id);
  const afterData = tidingsMockup.filter(item => item.id > detailData.id);

  if (detailData.length === 0) return <></>;
  return (
    <section
      className={`flex w-full flex-col items-center justify-center pb-160 pt-40`}
    >
      <div className='w-full max-w-1200'>
        <div
          className={`flex items-center justify-between border-b-1 border-t-3 border-grey-900 px-4 py-24`}
        >
          <div className={`flex items-center justify-center gap-16`}>
            {detailData.tag.map((obj, key) => (
              <TagIcon text={obj.text} mode={obj.mode} key={key} />
            ))}
            <span className={`text-bold24 text-grey-900`}>
              {detailData.detail_title}
            </span>
          </div>
          <span className={`text-regular14 text-grey-400`}>
            {detailData.start_date}
          </span>
        </div>
        <div className={`py-60`}>
          <div className={`mb-16`}>
            <span className={`text-bold24 text-grey-500`}>
              {detailData.sub_title}
            </span>
          </div>
          <div>
            <span className={`text-regular18 text-grey-500`}>
              {detailData.content}
            </span>
          </div>
          <Swiper_sec detailData={detailData} />
        </div>

        <div className={`w-full border-b-3 border-t-3 border-grey-900 px-4`}>
          <div
            className={`${beforeData[0] ? '' : 'hidden'} flex h-80 items-center justify-between`}
          >
            <button
              onClick={() => {
                navi('/tidings/detail', { state: beforeData[0] });
              }}
            >
              <span className={`text-bold16 text-grey-900`}>이전 글</span>
              <span className={`text-regular16 ml-16 text-grey-500`}>
                {beforeData[0] ? beforeData[0].title : ''}
              </span>
            </button>
            <span className={`text-regular14 text-grey-400`}>
              {beforeData[0] ? beforeData[0].start_date : ''}~
              {beforeData[0] ? beforeData[0].end_date : ''}
            </span>
          </div>

          <div
            className={`${beforeData[0] && afterData[0] ? 'border-t-1' : ''} border-grey-900`}
          >
            <div
              className={`${afterData[0] ? '' : 'hidden'} flex h-80 items-center justify-between`}
            >
              <button
                onClick={() => {
                  navi('/tidings/detail', { state: afterData[0] });
                }}
              >
                <span className={`text-bold16 text-grey-900`}>다음 글</span>
                <span className={`text-regular16 ml-16 text-grey-500`}>
                  {afterData[0] ? afterData[0].title : ''}
                </span>
              </button>
              <span className={`text-regular14 text-grey-400`}>
                {afterData[0] ? afterData[0].start_date : ''}~
                {afterData[0] ? afterData[0].end_date : ''}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`flex w-full items-start justify-end max-md:justify-center`}
        >
          <div
            className={`mt-60 flex h-64 w-300 items-center justify-center rounded-8 bg-primary-500`}
          >
            <button
              onClick={() => {
                navi('/tidings/campaign');
              }}
              className={`text-bold24 text-white-solid`}
            >
              목록
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TidingsDetail;
