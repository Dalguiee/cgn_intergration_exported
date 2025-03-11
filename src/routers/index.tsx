import { Route, Routes } from 'react-router-dom';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import HomePage from '@/pages/home/page';
// 소식
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';
// 소개
import IntroducePage from '@/pages/introduce/vision/page';
import IntroduceOrganizationPage from '@/pages/introduce/organization/page';
// 후원
import IntroducesupportPage from '@/pages/introducesupport/main/page';
import IntroducesupportAnniversaryPage from '@/pages/introducesupport/anniversary/page';
import IntroducesupportOverseasPage from '@/pages/introducesupport/overseas/page';
import IntroducesupportReportPage from '@/pages/introducesupport/report/page';

export default function MainRouter() {
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
        {/* 후원 */}
        <Route
          path='introducesupport/main'
          element={<IntroducesupportPage />}
        ></Route>
        {/* <Route
          path='introduce/organization'
          element={<IntroduceOrganizationPage />}
          ></Route> */}
        <Route
          path='introducesupport/anniversary'
          element={<IntroducesupportAnniversaryPage />}
        ></Route>
        <Route
          path='introducesupport/overseas'
          element={<IntroducesupportOverseasPage />}
        ></Route>
        <Route
          path='introducesupport/report'
          element={<IntroducesupportReportPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
