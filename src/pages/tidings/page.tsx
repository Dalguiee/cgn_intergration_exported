import TidingsHeader from '@/components/tidings/tidingsHeader';
import TidingsMain from '@/components/tidings/tidingsMain';
import Locator from '@/layouts/locator';

const TidingsPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <TidingsHeader
        title={'캠페인/이벤트'}
        subTitle={'CGN의 캠페인/이벤트를 확인해 보세요.'}
      />
      <TidingsMain />
    </section>
  );
};

export default TidingsPage;
