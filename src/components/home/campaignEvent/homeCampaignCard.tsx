// 컴포넌트
import TagIcon from '@/components/common/tagIcon';
import { useNavigate } from 'react-router-dom';

const HomeCampaignCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/news/${item?.category}/detail?articleId=${item?.id}`);
      }}
      className={`h-full rounded-16`}
    >
      <button
        className={`relative flex h-[70%] w-full items-start justify-start overflow-hidden rounded-16 px-12 py-16 max-lg:aspect-[175/119] max-lg:h-[unset] max-lg:w-full max-lg:rounded-8 max-lg:px-8 max-lg:py-8`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat hover:scale-110`}
          style={{
            backgroundImage: `url("${item?.src}")`,
            transition: `0.8s`,
          }}
        ></div>
        {item?.tag?.map((tag, key) => {
          if (tag?.id === 1 || tag?.id === 3) {
            return (
              <TagIcon
                key={key}
                id={tag?.id}
                className={`z-[1]`}
                mode={'mode1'}
              />
            );
          }
        })}
      </button>
      <p
        className={`text-regular24 max-lg:text-regular16 mt-12 line-clamp-2 text-grey-900`}
      >
        {item?.title}
      </p>
    </div>
  );
};

export default HomeCampaignCard;
