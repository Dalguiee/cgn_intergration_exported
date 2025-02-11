import MainHeader from '@/layouts/mainHeader';
import MainFooter from '@/layouts/mainFooter';
import TidingsHeader from '@/components/tidings/header';

const TidingsPage = () => {
  return (
    <section className='flex h-screen flex-col'>
      <MainHeader />
      <TidingsHeader />
      TidingsPage
      <MainFooter />
    </section>
  );
};

export default TidingsPage;
