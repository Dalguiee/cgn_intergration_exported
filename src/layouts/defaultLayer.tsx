// 훅
import { Outlet, useNavigate } from 'react-router-dom';

// 컴포넌트
import MainHeader from '@/layouts/mainHeader/mainHeader';
import MainFooter from '@/layouts/mainFooter/mainFooter';
import { useEffect } from 'react';

const DefaultLayer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Outlet?.length < 0) {
      navigate(`/outofservice`);
    }
  }, [Outlet]);

  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default DefaultLayer;
