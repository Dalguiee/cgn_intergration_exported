// 훅
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 컴포넌트
import IntroduceChairman from '@/components/introduce/organization/introduceChairman';
import IntroduceCEO from '@/components/introduce/organization/introduceCEO';
import IntroduceFollowers from '@/components/introduce/organization/introduceFollowers';
import IntroduceDirections from '@/components/introduce/organization/introduceDirections';
import IntroduceHistory from '@/components/introduce/organization/history/introduceHistory';
import IntroduceThemeHeader from '@/components/introduce/organization/introduceThemeHeader';
import IntroduceOrganizationCategoryList from '@/components/introduce/organization/introduceOrganizationCategoryList';

const IntroduceOrganization = () => {
  const navigate = useNavigate();
  const { subDepth } = useParams();

  // 재 라우팅 영역, categoryList 의 state id 에 따라 라우팅 합니다.
  useEffect(() => {
    switch (subDepth) {
      case `chairman`:
        navigate('/about-us/organization/chairman');
        break;
      case `ceo`:
        navigate('/about-us/organization/ceo');
        break;
      case `people`:
        navigate('/about-us/organization/people');
        break;
      case `history`:
        navigate('/about-us/organization/history');
        break;
      case `location`:
        navigate('/about-us/organization/location');
        break;
      default:
        navigate('/about-us/organization/chairman');
    }
  }, [location?.pathname]);

  return (
    <>
      <IntroduceThemeHeader className={`lg:hidden`} />
      <div className={`w-full max-lg:mb-24`}>
        <IntroduceOrganizationCategoryList />
      </div>
      <section className={`flex flex-col items-center justify-start`}>
        {subDepth === `chairman` ? <IntroduceChairman /> : ''}
        {subDepth === `ceo` ? <IntroduceCEO /> : ''}
        {subDepth === `people` ? <IntroduceFollowers /> : ''}
        {subDepth === `history` ? <IntroduceHistory /> : ''}
        {subDepth === `location` ? <IntroduceDirections /> : ''}
      </section>
    </>
  );
};

export default IntroduceOrganization;
