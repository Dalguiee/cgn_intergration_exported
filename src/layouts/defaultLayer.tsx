// 훅
import { Outlet } from 'react-router-dom';

// 컴포넌트
import MainHeader from '@/layouts/mainHeader/mainHeader';
import MainFooter from '@/layouts/mainFooter';

const DefaultLayer = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default DefaultLayer;
