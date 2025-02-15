import React, { useEffect, useState } from 'react';
import TidingsCard from './tidingsCard';
// import { dataContext } from '@/contexts/Context';

import { campaignMockup } from '@/db/mockup';
import { tidingsList } from '@/db/mockup';
import TabBtn from '../common/tabBtn';

const TidingsMain = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(campaignMockup);
  }, []);

  // const { cardData } = React.useContext(dataContext);
  // console.log(cardData);

  if (!data) return <></>;
  return (
    <>
      <TabBtn
        mockData={campaignMockup}
        category={tidingsList}
        setData={setData}
      />
      <section
        className={`flex w-full items-center justify-center pb-160 pt-80 max-md:px-20`}
      >
        <div
          className={`flex w-1560 flex-wrap items-start justify-center gap-24`}
        >
          {data?.map(item => (
            <TidingsCard key={item.id} allData={data} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TidingsMain;
