import { Route, Routes } from 'react-router-dom';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import Home from '@/components/home/home';
import TidingsBroadcastPage from '@/pages/tidings/broadcast';
import TidingsCampaignPage from '@/pages/tidings/campaign';
import TidingsDetailPage from '@/pages/tidings/detail';
import TidingsMissionPage from '@/pages/tidings/mission';
import TidingsSupportPage from '@/pages/tidings/support';

export default function MainRouter() {
  // return (
  //   <Routes>
  //     <Route path='/*' element={<DefaultLayer />}>
  //       <Route
  //         path='tidings/campaign'
  //         element={<TidingsCampaignPage />}
  //       ></Route>
  //       <Route
  //         path='tidings/:subDepth/detail'
  //         element={<TidingsDetailPage />}
  //       ></Route>
  //     </Route>
  //   </Routes>
  // );

  // 개발중
  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        <Route path='home' element={<Home />}></Route>
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
