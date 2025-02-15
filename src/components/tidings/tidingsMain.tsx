import React, { useEffect, useState } from 'react';
import TidingsCard from './tidingsCard';
// import { dataContext } from '@/contexts/Context';

import { campaignMockup, tidingsList } from '@/db/mockup';
import TabBtn from '../common/tabBtn';

const TidingsMain = () => {
  // 전체 데이터를 한번 State 에 담아 사용합니다.
  // 컨테이너의 데이터 필터링을 연동하기 위함입니다.
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
            <TidingsCard key={item.id} allData={campaignMockup} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TidingsMain;
