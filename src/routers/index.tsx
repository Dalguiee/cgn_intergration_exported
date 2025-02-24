import { Route, Routes } from 'react-router-dom';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import HomePage from '@/pages/home/page';
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';

export default function MainRouter() {
  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        <Route path='home' element={<HomePage />}></Route>
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
      </Route>
    </Routes>
  );
}
