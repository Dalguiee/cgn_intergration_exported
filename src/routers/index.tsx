// 훅
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import HomePage from '@/pages/home/page';
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';
import IntroduceVisionPage from '@/pages/introduce/vision/page';
import IntroduceOrganizationPage from '@/pages/introduce/organization/page';
import IntroduceWorldwidePage from '@/pages/introduce/worldwide/page';
import IntroduceRecruitPage from '@/pages/introduce/recruit/page';

export default function MainRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  // 홈으로 바인딩
  useEffect(() => {
    if (location?.pathname === `` || location.pathname === `/`) {
      navigate(`/home`);
    }
  }, [location?.pathname]);

  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        {/* 홈 */}
        <Route path='home' element={<HomePage />}></Route>
        {/* 소식 */}
        <Route
          path='tidings/campaign'
          element={<TidingsCampaignPage />}
        ></Route>
        <Route path='tidings/mission' element={<TidingsMissionPage />}></Route>
        <Route path='tidings/support' element={<TidingsSupportPage />}></Route>
        <Route
          path='tidings/broadcast'
          element={<TidingsBroadcastPage />}
        ></Route>
        <Route
          path='tidings/:subDepth/detail'
          element={<TidingsDetailPage />}
        ></Route>
        {/* 소개 */}
        <Route
          path='introduce/vision'
          element={<IntroduceVisionPage />}
        ></Route>
        <Route
          path='introduce/organization'
          element={<IntroduceOrganizationPage />}
        ></Route>
        <Route
          path='introduce/worldwide'
          element={<IntroduceWorldwidePage />}
        ></Route>
        <Route
          path='introduce/recruit'
          element={<IntroduceRecruitPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
