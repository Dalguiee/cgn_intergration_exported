import MainHeader from '@/layouts/mainHeader';
import MainFooter from '@/layouts/mainFooter';
import { Outlet } from 'react-router-dom';

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
