// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import TidingsCard from '@/components/tidings/campaign/tidingsCard';
import CategoryList from '@/components/common/categoryList';

// 데이터
import { mockupData } from '@/db/mockup';
import NoSearchResult from '@/components/common/noSearchResult';

const TidingsCampaign = () => {
  const location = useLocation();
  const [findedMockupData, setfindedMockupData] = useState([]);
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  const mockupExport = mockupData.filter(item => {
    return item?.path?.includes(location?.pathname);
  });
  const mockupExportedData = mockupExport?.[0]?.data;

  // 불러온 mockUp 데이터를 categorylist 에서 find 연동을 위하여 state 에 한번 넣습니다.
  useEffect(() => {
    setfindedMockupData(mockupExportedData);
  }, [location, selectedCategoryArticleId]);

  // category list 에서 selectedCategoryArticleId 에 따라 filter 연동을 위하여 state 에 update 합니다.
  useEffect(() => {
    if (selectedCategoryArticleId === 0) {
      setfindedMockupData(mockupExportedData);
      // setfindedMockupData([]);
    } else {
      setfindedMockupData(
        mockupExportedData.filter(item => {
          return item?.tag?.some(
            obj => obj?.id === Number(selectedCategoryArticleId)
          );
        })
      );
      // setfindedMockupData([]);
    }
  }, [selectedCategoryArticleId]);

  return (
    <>
      <CategoryList
        selectedCategoryArticleId={selectedCategoryArticleId}
        setSelectedCategoryArticleId={setSelectedCategoryArticleId}
      />
      <section
        data-aos='fade-up'
        className={`flex w-full flex-col items-center justify-center px-20 pb-160 pt-80 max-lg:mt-24 max-lg:pb-20 max-lg:pt-0`}
      >
        {findedMockupData?.length <= 0 ? (
          <div className={`w-full`}>
            <NoSearchResult mode={`mode2`} />
          </div>
        ) : (
          <div
            className={`grid w-1200 max-w-1560 grid-cols-3 flex-wrap items-start justify-center gap-24 max-lg:grid-cols-1`}
          >
            {findedMockupData?.map((item, idx) => (
              <TidingsCard key={idx} item={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default TidingsCampaign;
