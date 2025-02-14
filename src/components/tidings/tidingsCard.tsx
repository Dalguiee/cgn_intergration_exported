import { useNavigate } from 'react-router-dom';
import TagIcon from '../common/tagBtn';

const TidingsCard = ({ item }) => {
  const navigator = useNavigate();
  return (
    <button
      data-aos='fade-up'
      onClick={() => {
        navigator('/tidings/campaign/detail', { state: item });
      }}
      className={`mt-16 flex min-h-396 max-w-384 flex-col items-center justify-start rounded-16 bg-white-solid px-16 py-16 shadow-sm`}
    >
      <img
        className='h-240 w-full max-w-352 rounded-8'
        src='/public/images/tidings/card_content_small.png'
        width={`352px`}
        height={`240px`}
        alt='메인카드이미지'
      />
      <div className={`mt-24 flex w-full items-center justify-between`}>
        <div className={`flex items-center justify-center gap-4`}>
          {item?.tag?.map((obj, key) => (
            <TagIcon text={obj.text} mode={obj.mode} key={key} />
          ))}
        </div>
        <div>
          <span className={`text-regular14 text-grey-400`}>
            {item.start_date}
          </span>
          <span className={`text-regular14 text-grey-400`}>~</span>
          <span className={`text-regular14 text-grey-400`}>
            {item.end_date}
          </span>
        </div>
      </div>
      <div className={`mt-12 flex w-full items-center justify-start`}>
        <span className={`text-bold24 text-grey-900`}>{item.title}</span>
      </div>
    </button>
  );
};

export default TidingsCard;
