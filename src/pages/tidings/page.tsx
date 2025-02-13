import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMain from '@/components/tidings/tidingsMain';
import Locator from '@/layouts/locator';

const TidingsPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader />
      <TidingsMain />
    </section>
  );
};

export default TidingsPage;
