import React from 'react';

import TagIcon from '@/components/common/tagIcon';
import { useNavigate } from 'react-router-dom';

const RecruitCard = ({ item = [] }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`/introduce/recruit/detail?articleId=${item?.id}`);
      }}
      className={`flex h-188 w-full flex-col items-start justify-start gap-24 rounded-16 bg-grey-50 px-32 py-24 max-lg:h-156 max-lg:gap-0 max-lg:px-24`}
    >
      <p
        className={`text-bold24 max-lg:text-bold18 line-clamp-1 text-grey-900 max-lg:mb-8`}
      >
        {item?.title}
      </p>
      <div className={`flex items-start justify-start max-lg:mb-24`}>
        <span
          className={`text-bold18 max-lg:text-bold14 w-120 text-start text-grey-900 max-lg:w-72`}
        >
          {item?.recruitType}
        </span>
        <p
          className={`text-regular18 max-lg:text-regular14 line-clamp-1 text-grey-500`}
        >
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
