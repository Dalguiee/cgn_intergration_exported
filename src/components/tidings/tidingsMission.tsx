import { tidingsMissionList, missionMockup } from '@/db/mockup';
import React, { useEffect, useState } from 'react';
import TabBtn from '../common/tabBtn';
import TidingsCard from './tidingsCard';

const TidingsMission = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(missionMockup);
  }, []);
  // const { cardData } = React.useContext(dataContext);
  // console.log(cardData);

  if (!data) return <></>;
  return (
    <>
      <TabBtn
        mockData={missionMockup}
        category={tidingsMissionList}
        setData={setData}
      />
      <section
        className={`flex w-full items-center justify-center pb-160 pt-80 max-md:px-20`}
      >
        <div
          className={`flex w-1560 flex-wrap items-start justify-center gap-24`}
        >
          {data?.map(item => <TidingsCard key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
};

export default TidingsMission;
