// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

const HomeLeftMainCampaign = props => {
  const navigate = useNavigate();
  console.log(props.campaignData);
  return (
    <div
      className={`flex aspect-[792/660] h-full max-h-660 w-full max-w-792 items-center justify-center max-lg:aspect-[360/300] max-lg:max-h-[unset] max-lg:max-w-[unset]`}
    >
      {props.campaignData?.slice(0, 1)?.map((item, key) => (
        <button
          onClick={() => {
            navigate(`/tidings/${item?.category}/detail?articleId=${item?.id}`);
          }}
          key={key}
          style={{
            backgroundImage: `url("${item?.src}")`,
            filter: `opacity(0.9999)`,
          }}
          className={`relative bg-[url("${item?.src}")] flex h-full w-full flex-col items-start justify-between rounded-16 bg-cover bg-center bg-no-repeat px-24 pb-33 pt-24 max-lg:rounded-8 max-lg:px-16 max-lg:py-16`}
        >
          {item?.tag?.map((tag, key) => {
            if (tag?.id === 1 || tag?.id === 3) {
              return <TagIcon key={key} id={tag?.id} mode={'mode3'} />;
            }
          })}
          <p
            className={`text-bold32 max-lg:text-bold16 z-10 ml-19 text-left text-grey-900 max-lg:ml-0`}
          >
            {item?.title}
          </p>
        </button>
      ))}
    </div>
  );
};
export default HomeLeftMainCampaign;
