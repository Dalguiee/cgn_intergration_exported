import React from 'react';
import TidingsCard from './tidingsCard';
// import { dataContext } from '@/contexts/Context';

import { tidingsMockup } from '@/db/mockup';

const TidingsMain = () => {
  // const { cardData } = React.useContext(dataContext);
  // console.log(cardData);

  return (
    <section className={`flex w-full items-center justify-center pb-160 pt-80`}>
      <div
        className={`flex w-1560 flex-wrap items-start justify-center gap-24`}
      >
        {tidingsMockup.map(item => (
          <TidingsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TidingsMain;
