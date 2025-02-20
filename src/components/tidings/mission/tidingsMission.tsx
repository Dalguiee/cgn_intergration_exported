/*
 * 개발중인 컴포넌트입니다.
 */

import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mockupData } from '@/db/mockup';

import CategoryList from '@/components/common/categoryList';
import TagIcon from '@/components/common/tagIcon';
import TextScroll from '@/components/tidings/mission/textScroll';
import PcTopArticleSwiper from '@/components/tidings/mission/pcTopArticleSwiper';
import MoTopArticleList from './moTopArticleList';

/*
 *해당 페이지는 후원과 레이아웃이 같아 페이지 모드를 감지하여 컨텐츠만 바꿔끼도록 설계되었습니다.
 *pageMode 에 따라 불러오는 컨텐츠 분기를 걸어놓았습니다.
 */
const TidingsMission = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contentBox = useRef(null);
  const listAll = useRef([]);
  /* 페이지에서 사용될 컨텐츠 데이터 불러오기 */
  const [findedMockupData, setfindedMockupData] = useState();
  /*  미션과 후원에서 동시에 사용되므로 해당 모드를 통해 중간 params 값을 전환하여 detail url 을 정합니다. */
  const [pageMode, setPageMode] = useState('');
  /* 하단부 양쪽 화살표를 통해 데이터를 전환하는 버튼에 사용되는 번호입니다. */
  // 오른쪽 리스트에 마우스를 올리면 해당 데이터의 index 값이 pagingNum 으로 setState 됩니다
  const [pagingNum, setPagingNum] = useState(0);
  /* 하단부 오른쪽 컨텐츠를 따라다니는 색망상자의 위치입니다. */
  const [bgBoxPositon, setBgBoxPosition] = useState(0);
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);

  /* 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다. */
  const mockupExport = mockupData.filter(item => {
    return item.path.includes(location.pathname);
  });
  const mockupExportedData = mockupExport?.[0]?.data;

  /* 불러온 mockUp 데이터를 categorylist 에서 find 연동을 위하여 state 에 한번 넣습니다. */
  useEffect(() => {
    setfindedMockupData(mockupExportedData);
  }, [location, selectedCategoryArticleId]);

  /* tidings 헤더 아래에 존재하는 카테고리 버튼의 기능입니다. */
  /* category list 에서 selectedCategoryArticleId 를 state 를 통해 받으며, 카테고리에 따라 분류된 데이터를 state 에 update 합니다. */
  useEffect(() => {
    if (selectedCategoryArticleId === 0) {
      setfindedMockupData(mockupExportedData);
    } else {
      setfindedMockupData(
        mockupExportedData?.filter(item => {
          return item?.tag?.some(
            obj => obj?.id === Number(selectedCategoryArticleId)
          );
        })
      );
    }
  }, [selectedCategoryArticleId]);

  /* 현재 선교스토리 혹은 후원중 어느 페이지로 분기되었는지 사용할 String state 지정 */
  useEffect(() => {
    if (location?.pathname?.includes('/tidings/mission')) {
      setPageMode('mission');
    } else if (location?.pathname?.includes('/tidings/support')) {
      setPageMode('support');
    }
  }, [location]);

  /*
   * 하단부 왼쪽 카드 숫자 양옆 num 을 높이고 내리는 버튼 기능입니다. pageNum 연동
   */
  const pagingNext = () => {
    if (pagingNum < findedMockupData?.length - 1) {
      setPagingNum(item => {
        return item + 1;
      });
    } else {
      console.log('페이지 최대치도달');
    }
  };
  const pagingPrev = () => {
    if (pagingNum > 0) {
      setPagingNum(item => {
        return item - 1;
      });
    } else {
      console.log('페이지 최소치도달');
    }
  };

  /*
   *왼쪽 숫자버튼을 올리고 내렸을 경우 오른쪽 흰색 박스가 해당 항목객체로 따라가는 위치를 잡기위한 함수입니다.
   */
  useEffect(() => {
    if (listAll?.current?.[pagingNum]) {
      positionFind(listAll?.current?.[pagingNum]);
    }
  }, [listAll, pagingNum]);

  const positionFind = e => {
    setBgBoxPosition(e.offsetTop);
  };

  // url 변경될 경우 페이지 번호를 0으로 돌립니다
  useEffect(() => {
    setPagingNum(0);
  }, [location]);

  if (!findedMockupData) return <></>;
  return (
    <>
      <CategoryList
        setSelectedCategoryArticleId={setSelectedCategoryArticleId}
      />
      <section
        className={`flex w-full flex-col items-center justify-center pb-160 pt-32 max-lg:mb-20 max-lg:px-20 max-lg:pb-0 max-lg:pt-0`}
      >
        <MoTopArticleList
          findedMockupData={findedMockupData}
          pageMode={pageMode}
        />

        <div
          className={`flex w-full max-w-1808 flex-wrap items-start justify-center gap-24 max-lg:hidden`}
        >
          <PcTopArticleSwiper
            pageMode={pageMode}
            findedMockupData={findedMockupData}
          />
        </div>
        <TextScroll />
        <div
          className={`flex w-full max-w-1200 items-start justify-center px-20 max-lg:hidden`}
        >
          {/* 텍스트 애니메이션 하단 왼쪽 구역입니다 */}
          <div className={`sticky top-80 w-full`}>
            {findedMockupData?.[pagingNum] ? (
              <div className={`h-656 w-full max-w-560`}>
                <div
                  className={`rounded-br-16 rounded-tr-16 border-1 border-grey-400 bg-white-solid pr-32 pt-32`}
                >
                  <button
                    onClick={() => {
                      navigate(
                        `${`/tidings/${pageMode}/detail?articleId=${findedMockupData?.[pagingNum]?.id}`}`
                      );
                    }}
                  >
                    <img
                      className={`w-full rounded-br-16 rounded-tr-16`}
                      src={`${findedMockupData?.[pagingNum]?.src}`}
                      alt=''
                    />
                  </button>
                  <div
                    className={`flex items-center justify-start gap-16 px-24 py-24`}
                  >
                    <button
                      onClick={() => {
                        pagingPrev();
                      }}
                    >
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_rounded.svg`}
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
                      {findedMockupData?.length ? findedMockupData?.length : ''}
                    </span>
                    <button
                      onClick={() => {
                        pagingNext();
                      }}
                    >
                      <img
                        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_rounded.svg`}
                        alt=''
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start justify-center gap-16 py-24`}
                >
                  <div className={`flex items-center justify-start gap-16`}>
                    {findedMockupData?.[pagingNum]?.tag?.map((item, key) => (
                      <TagIcon
                        id={item.id}
                        text={item.text}
                        mode={item.mode}
                        key={key}
                      />
                    ))}
                    <span className={`text-regular14 text-grey-500`}>
                      {findedMockupData?.[pagingNum]?.startDate}
                    </span>
                  </div>
                  <div>
                    <span className={`text-bold24 text-grey-900`}>
                      {findedMockupData?.[pagingNum]?.title}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* 텍스트 애니메이션 하단 오른쪽 리스트 구역입니다 */}
          <div
            ref={contentBox}
            className={`relative flex w-full max-w-616 flex-col items-center justify-start gap-16`}
          >
            <div
              style={{ top: `${bgBoxPositon}px`, transition: `0.25s` }}
              className={`absolute left-0 z-10 h-80 w-full rounded-16 bg-white-solid shadow-sm`}
            ></div>
            {findedMockupData?.map((data, key) => (
              <button
                ref={el => {
                  listAll.current[key] = el;
                }}
                onMouseEnter={e => {
                  positionFind(e.target);
                  setPagingNum(key);
                }}
                onClick={() => {
                  navigate(
                    `${`/tidings/${pageMode}/detail?articleId=${data?.id}`}`
                  );
                }}
                className={`relative z-20 flex h-80 w-full items-center justify-between px-24 py-24`}
                key={data?.id}
              >
                <div className={`flex items-center justify-center gap-16`}>
                  {data?.tag
                    .slice(0, 1)
                    .map((item, key) => (
                      <TagIcon
                        mode={item?.mode}
                        id={item?.id}
                        key={key}
                        text={item?.text}
                      />
                    ))}
                  <span className={`text-bold18 text-grey-900`}>
                    {data?.title}
                  </span>
                </div>
                <span className={`text-regular14 text-grey-400`}>
                  {data?.startDate}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TidingsMission;
