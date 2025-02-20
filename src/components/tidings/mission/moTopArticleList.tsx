import React from 'react';
import TidingsCard2 from './tidingsCard2';

const MoTopArticleList = ({ findedMockupData, pageMode }) => {
  return (
    <div
      className={`hidden w-full max-w-1560 flex-wrap items-start justify-center gap-24 max-lg:flex`}
    >
      {findedMockupData?.map((item, key) => (
        <TidingsCard2 pageMode={pageMode} key={key} item={item} />
      ))}
    </div>
  );
};

export default MoTopArticleList;
