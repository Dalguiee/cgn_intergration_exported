// 훅
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 데이터
import { noticeData } from '@/db/mockup';

const CustomerCenterNoticeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(querySearch);
  const [currentData, setCurrentData] = useState({});
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

  // 맨 위로 스크롤 올림
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            className={`text-regular14 ml-40 w-fit whitespace-nowrap text-grey-400 max-lg:ml-0`}
          >
            {currentData?.date}
          </span>
        </div>
        <div
          className={`flex flex-col-reverse items-start justify-center py-60 max-lg:flex-col max-lg:pb-60 max-lg:pt-0`}
        >
          <div className={`mb-16 max-lg:mt-16`}>
            <div className={`mb-16 max-lg:mt-16`}>
              <span className={`text-bold24 text-grey-700`}>
                {currentData?.subTitle}
              </span>
            </div>
            <div>
              <p className={`text-regular18 whitespace-pre-line text-grey-700`}>
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
              <span className={`text-bold16 whitespace-nowrap text-grey-900`}>
                이전 글
              </span>
              <span
                className={`text-regular16 ml-16 mr-31 line-clamp-1 text-grey-500`}
              >
                {beforeData?.title}
              </span>
            </button>
            <span
              className={`text-regular14 whitespace-nowrap text-grey-400 max-lg:hidden`}
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
                <span className={`text-bold16 whitespace-nowrap text-grey-900`}>
                  다음 글
                </span>
                <span
                  className={`text-regular16 ml-16 mr-31 line-clamp-1 text-grey-500`}
                >
                  {afterData?.title}
                </span>
              </button>
              <span
                className={`text-regular14 whitespace-nowrap text-grey-400 max-lg:hidden`}
              >
                {afterData?.date}
              </span>
            </div>
          </div>
        </div>
        {/* 돌아가기 버튼 */}
        <div
          className={`flex w-full items-start justify-end max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/customer/notice`);
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
