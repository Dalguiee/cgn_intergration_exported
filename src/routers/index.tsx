
import { Route, Routes } from 'react-router-dom';
import TidingsPage from '@/pages/tidings/page';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Main</div>} />
      <Route path="/tidings" element={<TidingsPage />} />
    </Routes>
  );
}
