// 훅
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 컴포넌트
import PolicyCategoryList from './policyCategoryList';
import PolicyTerms from './policyTerms';
import PolicyPrivacy from './policyPrivacy';

const Policy = () => {
  const { subDepth } = useParams();

  // 상단이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <PolicyCategoryList />
      <div
        className={`flex w-full flex-col items-center justify-start py-80 max-lg:px-16 max-lg:pb-35 max-lg:pt-24`}
      >
        {subDepth === `terms` ? <PolicyTerms /> : ``}
        {subDepth === `privacy` ? <PolicyPrivacy /> : ``}
      </div>
    </section>
  );
};

export default Policy;
