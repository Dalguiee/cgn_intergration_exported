// 훅
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 컴포넌트
import CategoryList from '@/components/common/categoryList';
import IntroduceChairman from '@/components/introduce/organization/introduceChairman';
import IntroduceCEO from '@/components/introduce/organization/introduceCEO';
import IntroduceFollowers from '@/components/introduce/organization/introduceFollowers';
import IntroduceHistory from './history/introduceHistory';
import IntroduceDirections from './introduceDirections';

const IntroduceOrganization = () => {
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const queryList = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(queryList);
  const queryNumber = Number(queryData?.articleId);

  useEffect(() => {
    if (queryNumber > -1 && queryNumber < 6) {
      navigate(
        `/introduce/organization?articleId=${selectedCategoryArticleId}`
      );
    }
  }, [selectedCategoryArticleId]);

  return (
    <>
      <div className={`mb-24 w-full`}>
        <CategoryList
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>
      <section className={`flex flex-col items-center justify-start`}>
        {queryNumber === 0 ? <IntroduceChairman /> : ''}
        {queryNumber === 1 ? <IntroduceCEO /> : ''}
        {queryNumber === 2 ? <IntroduceFollowers /> : ''}
        {queryNumber === 3 ? <IntroduceHistory /> : ''}
        {queryNumber === 4 ? <IntroduceDirections /> : ''}
      </section>
    </>
  );
};

export default IntroduceOrganization;
