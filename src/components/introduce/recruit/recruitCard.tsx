import React from 'react';

import TagIcon from '@/components/common/tagIcon';

const RecruitCard = ({ item = [] }) => {
  return (
    <button
      className={`flex h-188 w-full flex-col items-start justify-start gap-24 rounded-16 bg-grey-50 px-32 py-24`}
    >
      <p className={`text-bold24 text-grey-900`}>{item?.title}</p>
      <div className={`flex items-start justify-start`}>
        <span className={`text-bold18 w-120 text-start text-grey-900`}>
          {item?.recruitType}
        </span>
        <p className={`text-regular18 text-grey-500`}>
          <span>{item?.startDate}</span>
          <span>&nbsp;~&nbsp;</span>
          <span>{item?.endDate}</span>
        </p>
      </div>
      <div>
        {item?.tag?.map((obj, objIdx) => (
          <TagIcon id={obj?.id} key={objIdx} mode={obj?.mode} />
        ))}
      </div>
    </button>
  );
};

export default RecruitCard;
