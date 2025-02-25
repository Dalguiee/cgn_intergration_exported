import TagIcon from '@/components/common/tagIcon';

const LeftMainCampaign = props => {
  return (
    <div
      className={`flex aspect-[792/660] h-full max-h-660 w-full max-w-792 items-center justify-center max-lg:aspect-[360/300] max-lg:max-h-[unset] max-lg:max-w-[unset]`}
    >
      {props.campaignData?.slice(0, 1)?.map((item, key) => (
        <button
          key={key}
          style={{
            backgroundImage: `url("${item?.src}")`,
          }}
          className={`bg-[url("${item?.src}")] flex h-full w-full flex-col items-start justify-between rounded-8 bg-cover bg-center bg-no-repeat px-24 pb-33 pt-24 max-lg:px-16 max-lg:py-16`}
        >
          {item?.tag?.map((tag, key) => {
            if (tag?.id === 2 || tag?.id === 7) {
              return <TagIcon key={key} id={tag?.id} mode={'mode3'} />;
            }
          })}
          <p
            className={`text-bold32 max-lg:text-bold16 ml-19 text-left text-grey-900 max-lg:ml-0`}
          >
            {item?.title}
          </p>
        </button>
      ))}
    </div>
  );
};
export default LeftMainCampaign;
