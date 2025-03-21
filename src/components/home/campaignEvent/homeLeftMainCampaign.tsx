// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

const HomeLeftMainCampaign = props => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex aspect-[792/660] w-full items-center justify-center max-lg:aspect-[360/300]`}
    >
      {props.campaignData?.slice(0, 1)?.map((item, key) => (
        <button
          data-under-dark-gradient
          onClick={() => {
            navigate(`/news/${item?.category}/detail?articleId=${item?.id}`);
          }}
          key={key}
          style={{
            filter: `opacity(0.9999)`,
          }}
          className={`relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-16 px-24 pb-33 pt-24 max-lg:rounded-8 max-lg:px-16 max-lg:py-16`}
        >
          {item?.tag?.map((tag, key) => {
            if (tag?.id === 1 || tag?.id === 3) {
              return (
                <TagIcon
                  key={key}
                  id={tag?.id}
                  mode={'mode1'}
                  className={`z-[1]`}
                />
              );
            }
          })}
          <div
            className={`absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat hover:scale-110`}
            style={{
              backgroundImage: `url("${item?.src}")`,
              transition: `0.8s`,
            }}
          ></div>
          <p
            className={`text-bold32 max-lg:text-bold16 z-10 ml-19 text-left text-white-solid max-lg:ml-0`}
          >
            {item?.title}
          </p>
        </button>
      ))}
    </div>
  );
};
export default HomeLeftMainCampaign;
