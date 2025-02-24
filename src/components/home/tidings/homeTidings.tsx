// 훅
import React, { useEffect, useState } from 'react';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import CategoryList from '@/components/home/tidings/tidingsCategoryList';
import Section4PcTopArticleSwiper from '@/components/home/tidings/tidingsPcTopArticleSwiper';

/*
 *해당 페이지는 후원과 레이아웃이 같아 페이지 모드를 감지하여 받는 데이터만 따로 받도록 퍼블리싱 되었습니다.
 */
const HomeTidings = () => {
  const [findedMockupData, setfindedMockupData] = useState([]);
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);

  useEffect(() => {
    if (selectedCategoryArticleId === 0) {
      let allData = [];
      mockupData?.map(item => {
        allData = [...allData, ...item?.data];
      });
      setfindedMockupData(allData);
    } else {
      const allData = mockupData?.filter(item => {
        return item?.id === selectedCategoryArticleId;
      });
      setfindedMockupData(allData?.[0]?.data);
    }

    // setfindedMockupData(allData);
  }, [selectedCategoryArticleId]);

  useEffect(() => {
    console.log(selectedCategoryArticleId, findedMockupData);
  }, [selectedCategoryArticleId, findedMockupData]);

  return (
    <section
      className={`flex h-890 flex-col items-center justify-center gap-40 bg-secondary-brown_bg_2`}
    >
      <CategoryList
        setSelectedCategoryArticleId={setSelectedCategoryArticleId}
      />
      <div
        className={`flex w-full flex-col items-center justify-center max-lg:mb-20 max-lg:px-0 max-lg:pb-0 max-lg:pt-0`}
      >
        <div className={`w-full flex-shrink-0 overflow-hidden pl-180`}>
          <Section4PcTopArticleSwiper findedMockupData={findedMockupData} />
        </div>
        <div
          className={`flex w-full max-w-1200 items-start justify-center px-20 max-lg:hidden`}
        ></div>
      </div>
    </section>
  );
};

export default HomeTidings;
