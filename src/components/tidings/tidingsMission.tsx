import {
  tidingsMissionList,
  missionMockup,
  supportMockup,
  tidingsSupportList,
} from '@/db/mockup';
import React, { useEffect, useRef, useState } from 'react';
import TabBtn from '../common/tabBtn';
import TidingsCard2 from './tidingsCard2';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TagIcon from '../common/tagBtn';
import { useLocation } from 'react-router-dom';

const Swiper_sec = ({ pageMode, data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className={``}
      spaceBetween={64}
      slidesPerView={data.length > 3 ? 3 : data.length}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {data.map((item, key) => (
        <SwiperSlide className={`flex items-center justify-center`} key={key}>
          <TidingsCard2
            pageMode={pageMode}
            key={item.id}
            allData={pageMode === 'mission' ? missionMockup : supportMockup}
            item={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// 해당 페이지는 후원과 레이아웃이 같아 페이지 모드를 감지하여 컨텐츠만 바꿔끼도록 설계되었습니다.
// pageMode 에 따라 불러오는 컨텐츠 분기를 걸어놓았습니다.

const TidingsMission = () => {
  const [data, setData] = useState();
  const [pageMode, setPageMode] = useState('');
  const [pagingNum, setPagingNum] = useState(0);
  const contentBox = useRef(null);
  const [bgBoxPositon, setBgBoxPosition] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('tidings/mission')) {
      setPageMode('mission');
    } else if (location.pathname.includes('tidings/support')) {
      setPageMode('support');
    }
  }, [location]);

  useEffect(() => {
    if (pageMode === 'mission') {
      setData(item => {
        return missionMockup;
      });
    } else if (pageMode === 'support') {
      setData(item => {
        return supportMockup;
      });
    }
  }, [pageMode, location]);

  // const { cardData } = React.useContext(dataContext);
  // console.log(cardData);

  const pagingUP = () => {
    if (pagingNum < data.length - 1) {
      setPagingNum(item => {
        return item + 1;
      });
    } else {
      console.log('최대치도달');
    }
  };
  const pagingDown = () => {
    if (pagingNum > 0) {
      setPagingNum(item => {
        return item - 1;
      });
    } else {
      console.log('최소치도달');
    }
  };

  const positionFind = e => {
    setBgBoxPosition(e.target.offsetTop);
    console.log(e.target.offsetTop);
  };

  if (!data) return <></>;
  return (
    <>
      <TabBtn
        mockData={pageMode === 'mission' ? missionMockup : supportMockup}
        category={
          pageMode === 'mission' ? tidingsMissionList : tidingsSupportList
        }
        setData={setData}
      />
      <section
        className={`flex w-full flex-col items-center justify-center pb-160 pt-80 max-md:px-20`}
      >
        <div
          className={`flex w-full max-w-1808 flex-wrap items-start justify-center gap-24`}
        >
          <Swiper_sec pageMode={pageMode} data={data} />
        </div>
        <div className={`flex w-full max-w-1200 items-start justify-center`}>
          <div className={`w-full`}>
            {data[pagingNum] ? (
              <div className={`h-656 w-full max-w-560`}>
                <div
                  className={`rounded-br-16 rounded-tr-16 border-1 border-grey-400 bg-white-solid pr-32 pt-32`}
                >
                  <img
                    className={`w-full rounded-br-16 rounded-tr-16`}
                    src={`${data[pagingNum].src}`}
                    alt=''
                  />
                  <div
                    className={`flex items-center justify-start gap-16 px-24 py-24`}
                  >
                    <button
                      onClick={() => {
                        pagingDown();
                      }}
                    >
                      <img
                        src='/public/images/icon/arrow_left_rounded.svg'
                        alt=''
                      />
                    </button>
                    <span className={`text-bold16 text-grey-900`}>
                      {pagingNum !== null && pagingNum !== undefined
                        ? pagingNum + 1
                        : ''}
                    </span>
                    <span className={`text-regular16 text-grey-500`}>/</span>
                    <span className={`text-regular16 text-grey-500`}>
                      {data.length ? data.length : ''}
                    </span>
                    <button
                      onClick={() => {
                        pagingUP();
                      }}
                    >
                      <img
                        src='/public/images/icon/arrow_right_rounded.svg'
                        alt=''
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start justify-center gap-16 py-24`}
                >
                  <div className={`flex items-center justify-start gap-16`}>
                    {data[pagingNum].tag.map((item, key) => (
                      <TagIcon
                        id={item.id}
                        text={item.text}
                        mode={item.mode}
                        key={key}
                      />
                    ))}
                    <span className={`text-regular14 text-grey-500`}>
                      {data[pagingNum].start_date}
                    </span>
                  </div>
                  <div>
                    <span className={`text-bold24 text-grey-900`}>
                      {data[pagingNum].title}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            ref={contentBox}
            className={`relative flex w-full max-w-616 flex-col items-center justify-start gap-16`}
          >
            <div
              style={{ top: `${bgBoxPositon}px` }}
              className={`absolute left-0 z-10 h-80 w-full rounded-16 bg-white-solid shadow-sm transition`}
            ></div>
            {data?.slice(0, 7).map(data => (
              <div
                onMouseEnter={e => {
                  positionFind(e);
                }}
                className={`relative z-20 flex h-80 w-full items-center justify-between px-24 py-24`}
                key={data.id}
              >
                <div className={`flex items-center justify-center gap-16`}>
                  {data.tag.slice(0, 1).map((item, key) => (
                    <TagIcon id={item.id} key={key} text={item.text} />
                  ))}
                  <span className={`text-bold18 text-grey-900`}>
                    {data.title}
                  </span>
                </div>
                <span className={`text-regular14 text-grey-400`}>
                  {data.start_date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TidingsMission;
