// 컴포넌트
import TagIcon from '@/components/common/tagIcon';
import { useNavigate } from 'react-router-dom';

const HomeCampaignCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/tidings/${item?.category}/detail?articleId=${item?.id}`);
      }}
      className={`h-fit w-full max-w-352 max-lg:min-h-179 max-lg:max-w-[unset]`}
    >
      <button
        style={{
          backgroundImage: `url("${item?.src}")`,
        }}
        className={`flex aspect-[352/240] h-full max-h-240 w-full items-start justify-start rounded-8 bg-cover bg-center bg-no-repeat px-12 py-12 max-lg:aspect-[175/119] max-lg:h-fit max-lg:w-full`}
      >
        {item?.tag?.map((tag, key) => {
          if (tag?.id === 1 || tag?.id === 3) {
            return <TagIcon key={key} id={tag?.id} mode={'mode1'} />;
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
