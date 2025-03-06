// 훅
import React, { useState } from 'react';

// 컴포넌트
import MapIcon from './mapIcon';
import IntroduceWorldwideContext from './introduceWorldwideContext';

const IntroduceWorldwide = () => {
  const [selectedCategoryId, setSelectedCategoryArticleId] = useState(0);
  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <div
        className={`flex h-666 w-full max-w-1200 flex-col items-center justify-start pb-80 pt-40`}
      >
        <div
          className={`relative h-full max-h-546 w-full max-w-1200 rounded-16 bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/worldwide/map.png)`,
          }}
        >
          {[...Array(7)]?.map((item, key) => (
            <MapIcon
              selectedCategoryId={selectedCategoryId}
              className={``}
              dataId={key}
            />
          ))}
        </div>
      </div>
      <IntroduceWorldwideContext
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryArticleId={setSelectedCategoryArticleId}
      />
    </section>
  );
};

export default IntroduceWorldwide;
