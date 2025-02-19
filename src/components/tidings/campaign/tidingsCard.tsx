import { useNavigate } from 'react-router-dom';
import TagIcon from '@/components/common/tagIcon';

// 캠페인 이벤트에 사용되는 1형 카드 컴포넌트 입니다

const TidingsCard = ({ item, allData }) => {
  const navigator = useNavigate();
  return (
    <button
      onClick={() => {
        navigator(`/tidings/campaign/detail?articleId=${item?.id}`);
      }}
      style={{ boxShadow: `0 0 30px 1px #ececec` }}
      className={`mt-16 flex w-full flex-col items-center justify-start rounded-16 bg-white-solid px-16 pb-40 pt-16`}
    >
      <img
        className='aspect-[252/240] w-full rounded-8 object-cover'
        src={`${import.meta.env.VITE_PUBLIC_URL}images/tidings/card_content_small.png`}
        width={`352px`}
        height={`240px`}
        alt='메인카드이미지'
      />
      <div className={`mt-24 flex w-full items-center justify-between`}>
        <div className={`flex items-center justify-center gap-4`}>
          {item?.tag?.map((obj, key) => (
            <TagIcon text={obj.text} id={obj.id} mode={obj.mode} key={key} />
          ))}
        </div>
        <div>
          <span className={`text-regular14 text-grey-400`}>
            {item.startDate}
          </span>
          <span className={`text-regular14 text-grey-400`}>~</span>
          <span className={`text-regular14 text-grey-400`}>{item.endDate}</span>
        </div>
      </div>
      <div className={`mt-12 flex w-full items-center justify-start`}>
        <span className={`text-bold24 text-left text-grey-900`}>
          {item.title}
        </span>
      </div>
    </button>
  );
};

export default TidingsCard;
