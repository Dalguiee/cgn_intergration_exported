import React from 'react';
import NoticeHeader from './noticeHeader';
import TagIcon from '@/components/common/tagIcon';
import Btn from '@/components/common/btn';

const noticeData = [
  {
    id: 1,
    tag: [
      {
        id: 15,
        mode: `mode1`,
      },
    ],
    text: '11월 6일 새벽 2시~4시 시스템 점검 안내',
    startDate: `2024.08.28`,
  },
  {
    id: 2,
    tag: [
      {
        id: 15,
        mode: `mode1`,
      },
    ],
    text: '11월 6일 새벽 2시~4시 시스템 점검 안내',
    startDate: `2024.08.28`,
  },
  {
    id: 3,
    tag: [
      {
        id: 15,
        mode: `mode1`,
      },
    ],
    text: '11월 6일 새벽 2시~4시 시스템 점검 안내',
    startDate: `2024.08.28`,
  },
  {
    id: 4,
    tag: [
      {
        id: 15,
        mode: `mode1`,
      },
    ],
    text: '11월 6일 새벽 2시~4시 시스템 점검 안내',
    startDate: `2024.08.28`,
  },
  {
    id: 5,
    tag: [
      {
        id: 15,
        mode: `mode1`,
      },
    ],
    text: '11월 6일 새벽 2시~4시 시스템 점검 안내',
    startDate: `2024.08.28`,
  },
];

const NoticeMain = () => {
  return (
    <section
      className={`flex h-fit w-full items-center justify-center py-120 max-lg:bg-transparent max-lg:py-0 lg:bg-secondary-brown_bg_2`}
    >
      <div
        className={`flex w-full max-w-1560 flex-col items-center justify-start gap-40 max-lg:gap-0`}
      >
        <div className={`mb-16 flex w-full justify-between px-16 lg:hidden`}>
          <span className={`text-bold24 text-grey-900`}>공지사항</span>
          <button className={`flex items-center justify-center`}>
            <span className={`text-regular12 text-grey-900`}>바로가기</span>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
              alt=''
            />
          </button>
        </div>

        <NoticeHeader />

        <div
          className={`flex h-fit min-h-420 w-full items-start justify-between gap-24 max-lg:h-fit max-lg:flex-col max-lg:gap-0 max-lg:px-16`}
        >
          <div className={`w-full bg-white-solid px-24 max-lg:px-0`}>
            {noticeData.map((item, key) => (
              <button
                key={key}
                className={`flex h-84 w-full items-center justify-between border-t-1 ${key === 0 ? 'lg:border-none' : ''} border-grey-200 max-lg:h-56`}
              >
                <div className='flex items-center justify-start'>
                  <div className={`mr-16`}>
                    {item?.tag?.map((item, key) => (
                      <TagIcon key={key} id={item?.id} mode={item?.mode} />
                    ))}
                  </div>
                  <p
                    className={`text-regular18 max-lg:text-regular14 line-clamp-1 text-grey-500`}
                  >
                    {item.text}
                  </p>
                </div>
                <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
                  {item?.startDate}
                </span>
              </button>
            ))}
          </div>
          <div
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/home/recruit_banner.png)`,
            }}
            className={`flex h-full min-h-420 w-360 flex-shrink-0 flex-col items-center justify-center gap-[125.4px] rounded-16 max-lg:min-h-300 max-lg:w-full max-lg:gap-62`}
          >
            <span className={`text-bold24 text-center text-white-solid`}>
              CGN에서 소중한
              <br />
              인재를 기다립니다.
            </span>
            <button
              className={`text-bold16 max-lg:text-bold14 flex h-54 w-162 items-center justify-center rounded-8 border-1 border-white-solid text-white-solid max-lg:h-40 max-lg:w-130`}
            >
              채용공고 바로가기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeMain;
