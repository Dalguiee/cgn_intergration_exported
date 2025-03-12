// 훅
import React, { useEffect, useState } from 'react';

// 컴포넌트
import CategoryList from '@/components/common/categoryList';
import IntroduceChairman from '@/components/introduce/organization/introduceChairman';
import IntroduceCEO from '@/components/introduce/organization/introduceCEO';
import IntroduceFollowers from '@/components/introduce/organization/introduceFollowers';
import IntroduceDirections from '@/components/introduce/organization/introduceDirections';
import IntroduceHistory from '@/components/introduce/organization/history/introduceHistory';
import IntroduceThemeHeader from '@/components/introduce/organization/introduceThemeHeader';
import { useNavigate, useParams } from 'react-router-dom';

const IntroduceOrganization = () => {
  const navigate = useNavigate();
  const [selectedCategoryArticleId, setSelectedCategoryArticleId] = useState(0);
  const { subDepth } = useParams();

  // 재 라우팅 영역, categoryList 의 state id 에 따라 라우팅 합니다.
  useEffect(() => {
    switch (selectedCategoryArticleId) {
      case 0:
        navigate('/introduce/organization/chairman');
        break;
      case 1:
        navigate('/introduce/organization/ceo');
        break;
      case 2:
        navigate('/introduce/organization/followers');
        break;
      case 3:
        navigate('/introduce/organization/history');
        break;
      case 4:
        navigate('/introduce/organization/directions');
        break;
      default:
        navigate('/introduce/organization/chairman');
    }
  }, [location?.pathname, selectedCategoryArticleId]);

  return (
    <>
      <IntroduceThemeHeader
        className={`lg:hidden`}
        selectedCategoryArticleId={selectedCategoryArticleId}
      />
      <div className={`w-full max-lg:mb-24`}>
        <CategoryList
          selectedCategoryArticleId={selectedCategoryArticleId}
          setSelectedCategoryArticleId={setSelectedCategoryArticleId}
        />
      </div>
      <section className={`flex flex-col items-center justify-start`}>
        {subDepth === `chairman` ? <IntroduceChairman /> : ''}
        {subDepth === `ceo` ? <IntroduceCEO /> : ''}
        {subDepth === `followers` ? <IntroduceFollowers /> : ''}
        {subDepth === `history` ? <IntroduceHistory /> : ''}
        {subDepth === `directions` ? <IntroduceDirections /> : ''}
      </section>
    </>
  );
};

export default IntroduceOrganization;
