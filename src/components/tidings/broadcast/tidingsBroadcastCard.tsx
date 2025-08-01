// 훅
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const TidingsBroadcastCard = ({ item, idx, all }) => {
  const navigate = useNavigate();

  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  return (
    <button
      onClick={() => {
        navigate(`/news/press/detail?articleId=${item?.id}`);
      }}
      className={`${idx === all?.length - 1 ? `mb-60 border-b-3 border-grey-900 pb-40` : ``} ${mobile ? `border-none` : ``} mb-40 flex items-start justify-center gap-40 border-t-3 border-grey-900 pl-4 pt-40 max-lg:mb-0 max-lg:h-141 max-lg:gap-8 max-lg:border-t-0 max-lg:px-16 max-lg:py-16`}
    >
      <div className={`w-full`}>
        <div className={`mb-16 max-lg:mb-8`}>
          {item?.tag?.map((item, key) => (
            <TagIcon key={key} id={item?.id} mode={item?.mode} />
          ))}
        </div>

        <div
          className={`mb-40 flex flex-col items-start justify-center gap-24 max-lg:mb-0 max-lg:gap-8`}
        >
          <h4
            style={{ wordBreak: `keep-all` }}
            className={`max-lg:text-bold16 text-bold24 line-clamp-2 text-left text-grey-900`}
          >
            {item?.title}
          </h4>

          <span className={`text-regular12 h-16 text-grey-300`}>
            {item?.startDate}
          </span>
        </div>

        <div className={`text-left max-lg:hidden`}>
          <p className={`text-regular18 line-clamp-6 w-full text-grey-500`}>
            {item?.content}
          </p>
        </div>
      </div>
      <div
        className={`max-lg:h-full max-lg:w-full max-lg:max-w-160 lg:min-w-560`}
      >
        <img
          className={`h-full w-full rounded-8 object-cover max-lg:aspect-[160/109]`}
          width={560}
          height={382}
          src={`${item?.src}`}
          alt='기사 사진'
        />
      </div>
    </button>
  );
};

export default TidingsBroadcastCard;
