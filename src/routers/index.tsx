import { Route, Routes } from 'react-router-dom';

import DefaultLayer from '@/layouts/defaultLayer';
import TidingsPage from '@/pages/tidings/page';
import TidingsDetailPage from '@/pages/tidingsDetail/page';
import TidingsMissionPage from '@/pages/tidingsMission/page';
import TidingsSupportPage from '@/pages/tidingsSupport/page';

export default function MainRouter() {
  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        <Route path='tidings/campaign' element={<TidingsPage />}></Route>
        <Route path='tidings/mission' element={<TidingsMissionPage />}></Route>
        <Route path='tidings/support' element={<TidingsSupportPage />}></Route>
        <Route
          path='tidings/:subDepth/detail'
          element={<TidingsDetailPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
