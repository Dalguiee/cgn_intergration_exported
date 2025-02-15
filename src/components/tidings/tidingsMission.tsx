import { tidingsMissionList, missionMockup } from '@/db/mockup';
import React, { useEffect, useState } from 'react';
import TabBtn from '../common/tabBtn';
import TidingsCard2 from './tidingsCard2';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TagIcon from '../common/tagBtn';

const Swiper_sec = ({ data }) => {
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
          <TidingsCard2 key={item.id} allData={data} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TidingsMission = () => {
  const [data, setData] = useState();
  const [pagingNum, setPagingNum] = useState(0);

  useEffect(() => {
    setData(missionMockup);
  }, []);
  // const { cardData } = React.useContext(dataContext);
  // console.log(cardData);

  const pagingUP = () => {
    if (pagingNum < missionMockup.length - 1) {
      setPagingNum(item => {
        return item + 1;
      });
    } else {
      console.log('최대치');
    }
  };
  const pagingDown = () => {
    if (pagingNum > 0) {
      setPagingNum(item => {
        return item - 1;
      });
    } else {
      console.log('최소치');
    }
  };

  if (!data) return <></>;
  return (
    <>
      <TabBtn
        mockData={missionMockup}
        category={tidingsMissionList}
        setData={setData}
      />
      <section
        className={`flex w-full flex-col items-center justify-center pb-160 pt-80 max-md:px-20`}
      >
        <div
          className={`flex w-full max-w-1808 flex-wrap items-start justify-center gap-24`}
        >
          <Swiper_sec data={data} />
        </div>
        <div className={`flex w-full items-center justify-center`}>
          <div className={`w-full max-w-1200`}>
            {missionMockup[pagingNum] ? (
              <div className={`h-656 w-full max-w-560`}>
                <div
                  className={`rounded-br-16 rounded-tr-16 border-1 border-grey-400 bg-white-solid pr-32 pt-32`}
                >
                  <img
                    className={`w-full rounded-br-16 rounded-tr-16`}
                    src={`${missionMockup[pagingNum].src}`}
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
                      {missionMockup.length ? missionMockup.length : ''}
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
                    {missionMockup[pagingNum].tag.map((item, key) => (
                      <TagIcon text={item.text} mode={item.mode} key={key} />
                    ))}
                    <span className={`text-regular14 text-grey-500`}>
                      {missionMockup[pagingNum].start_date}
                    </span>
                  </div>
                  <div>
                    <span className={`text-bold24 text-grey-900`}>
                      {missionMockup[pagingNum].title}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TidingsMission;
