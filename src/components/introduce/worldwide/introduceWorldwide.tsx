// 훅
import React, { useState } from 'react';

// 컴포넌트
import MapIcon from './mapIcon';
import CategoryList from '@/components/common/categoryList';

const IntroduceWorldwide = () => {
  const [selectedCategoryId, setSelectedCategoryArticleId] = useState(0);
  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <div
        className={`flex h-666 w-full max-w-1200 flex-col items-center justify-start pb-80 pt-40`}
      >
        <div
          className={`relative h-full max-h-546 w-full max-w-1200 rounded-16 bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(/public/images/worldwide/map.png)` }}
        >
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={1}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={0}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={2}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={3}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={4}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={5}
          />
          <MapIcon
            selectedCategoryId={selectedCategoryId}
            className={``}
            dataId={6}
          />
        </div>
      </div>
      <div
        className={`h-852 w-full`}
        style={{
          backgroundImage: `url(/public/images/worldwide/under_content_area_background.png)`,
        }}
      >
        <CategoryList
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>
    </section>
  );
};

export default IntroduceWorldwide;
