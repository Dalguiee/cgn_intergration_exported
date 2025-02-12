import { Route, Routes } from 'react-router-dom';

import DefaultLayer from '@/layouts/defaultLayer';
import TidingsPage from '@/pages/tidings/page';
import TidingsDetailPage from '@/pages/tidingsDetail/page';

export default function MainRouter() {
  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        <Route path='tidings' element={<TidingsPage />}></Route>
        <Route path='tidings/detail' element={<TidingsDetailPage />}></Route>
      </Route>
    </Routes>
  );
}
