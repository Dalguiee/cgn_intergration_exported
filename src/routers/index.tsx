import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import HomePage from '@/pages/home/page';
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';
import IntroducePage from '@/pages/introduce/vision/page';
import IntroduceOrganizationPage from '@/pages/introduce/organization/page';
import { useEffect } from 'react';

export default function MainRouter() {
  const location = useLocation();
  const navigate = useNavigate();

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
        <Route path='introduce/vision' element={<IntroducePage />}></Route>
        <Route
          path='introduce/organization'
          element={<IntroduceOrganizationPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
