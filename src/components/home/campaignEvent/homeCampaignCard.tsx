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
      className={`h-fit w-full max-w-352 rounded-16 max-lg:min-h-179 max-lg:max-w-[unset]`}
    >
      <button
        className={`relative flex aspect-[352/240] h-full max-h-240 w-full items-start justify-start overflow-hidden rounded-16 max-lg:aspect-[175/119] max-lg:h-fit max-lg:w-full max-lg:rounded-8`}
      >
        <div
          className={`absolute h-full w-full bg-cover bg-center bg-no-repeat hover:scale-110`}
          style={{
            backgroundImage: `url("${item?.src}")`,
            transition: `1s`,
          }}
        ></div>
        {item?.tag?.map((tag, key) => {
          if (tag?.id === 1 || tag?.id === 3) {
            return (
              <TagIcon
                key={key}
                id={tag?.id}
                className={`z-[1] ml-12 mt-16`}
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
