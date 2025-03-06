// 훅
import React, { useState } from 'react';

// 컴포넌트
import CategoryList from '@/components/common/categoryList';
import IntroduceChairman from '@/components/introduce/organization/introduceChairman';
import IntroduceCEO from '@/components/introduce/organization/introduceCEO';
import IntroduceFollowers from '@/components/introduce/organization/introduceFollowers';
import IntroduceDirections from '@/components/introduce/organization/introduceDirections';
import IntroduceHistory from '@/components/introduce/organization/history/introduceHistory';

const IntroduceOrganization = () => {
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);

  return (
    <>
      <div className={`mb-24 w-full`}>
        <CategoryList
          selectedCategoryArticleId={selectedCategoryArticleId}
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>
      <section className={`flex flex-col items-center justify-start`}>
        {selectedCategoryArticleId === 0 ? <IntroduceChairman /> : ''}
        {selectedCategoryArticleId === 1 ? <IntroduceCEO /> : ''}
        {selectedCategoryArticleId === 2 ? <IntroduceFollowers /> : ''}
        {selectedCategoryArticleId === 3 ? <IntroduceHistory /> : ''}
        {selectedCategoryArticleId === 4 ? <IntroduceDirections /> : ''}
      </section>
    </>
  );
};

export default IntroduceOrganization;
