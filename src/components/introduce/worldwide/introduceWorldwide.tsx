// 훅
import React, { useState } from 'react';

// 컴포넌트
import MapIcon from '@/components/introduce/worldwide/mapIcon';
import IntroduceWorldwideContext from '@/components/introduce/worldwide/introduceWorldwideContext';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroduceWorldwide = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);

  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(1);

  return (
    <section
      className={`flex w-full flex-col items-center justify-start overflow-hidden bg-primary-50`}
    >
      <div
        className={`flex h-666 w-1200 flex-shrink-0 flex-col items-center justify-start pb-80 pt-40 max-lg:aspect-[393/240] max-lg:h-full max-lg:w-full max-lg:pb-0 max-lg:pt-0`}
      >
        <div
          className={`relative h-full max-h-546 w-full flex-shrink-0 rounded-16 bg-cover bg-center bg-no-repeat max-lg:h-full max-lg:max-h-[unset] max-lg:w-full max-lg:max-w-[unset] max-lg:rounded-0 max-lg:bg-contain`}
          style={{
            backgroundImage: `url(${mobile ? `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/mo_map.png` : `${import.meta.env.VITE_PUBLIC_URL}images/worldwide/map.png`})`,
          }}
        >
          <MapIcon
            selectedCategoryArticleId={selectedCategoryArticleId}
            setSelectedCategoryArticleId={setSelectedCategoryArticleId}
          />
        </div>
      </div>
      <IntroduceWorldwideContext
        selectedCategoryArticleId={selectedCategoryArticleId}
        setSelectedCategoryArticleId={setSelectedCategoryArticleId}
      />
    </section>
  );
};

export default IntroduceWorldwide;
