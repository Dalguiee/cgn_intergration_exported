// 훅
import React from 'react';

// 컴포넌트
import HomeNoticeHeader from '@/components/home/notice/homeNoticeHeader';
import TagIcon from '@/components/common/tagIcon';
import { useNavigate } from 'react-router-dom';
import { noticeData } from '@/db/mockup';

const HomeNoticeMain = () => {
  const navigate = useNavigate();
  return (
    <section
      className={`flex h-fit w-full items-center justify-center py-120 max-lg:mb-40 max-lg:bg-transparent max-lg:py-0 lg:bg-secondary-brown_bg_2 lg:px-16`}
    >
      <div
        className={`flex w-full max-w-1560 flex-col items-center justify-start gap-40 max-lg:gap-0`}
      >
        <HomeNoticeHeader />

        <div
          className={`flex h-fit min-h-420 w-full items-start justify-between gap-24 max-lg:h-fit max-lg:flex-col max-lg:gap-0 max-lg:px-16`}
        >
          <div
            className={`w-full bg-white-solid px-24 max-lg:mb-16 max-lg:border-b-1 max-lg:border-grey-200 max-lg:px-0`}
          >
            {noticeData.map((item, key) => (
              <button
                onClick={() => {
                  navigate(
                    `/customercenter/notice/detail?articleId=${item?.id}`
                  );
                }}
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
                    {item?.title}
                  </p>
                </div>
                <span className={`text-regular14 text-grey-400 max-lg:hidden`}>
                  {item?.date}
                </span>
              </button>
            ))}
          </div>
          <div
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/home/recruit_banner.png)`,
            }}
            className={`flex h-full min-h-420 w-360 flex-shrink-0 flex-col items-center justify-center gap-[125.4px] rounded-16 max-lg:min-h-300 max-lg:w-full max-lg:gap-62 max-lg:rounded-8`}
          >
            <span className={`text-bold24 text-center text-white-solid`}>
              CGN에서 소중한
              <br />
              인재를 기다립니다.
            </span>
            <button
              onClick={() => {
                navigate(`/introduce/recruit`);
              }}
              className={`text-bold16 max-lg:text-bold14 flex h-54 w-162 items-center justify-center rounded-8 border-1 border-white-solid text-white-solid max-lg:h-40 max-lg:w-130 max-lg:rounded-8`}
            >
              채용공고 바로가기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNoticeMain;
