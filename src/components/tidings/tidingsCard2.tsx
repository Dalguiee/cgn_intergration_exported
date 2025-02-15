import { useNavigate } from 'react-router-dom';
import TagIcon from '../common/tagBtn';

const TidingsCard2 = ({ item, allData }) => {
  const navigator = useNavigate();
  return (
    <button
      data-aos='fade-up'
      onClick={() => {
        navigator('/tidings/mission/detail', {
          state: { detailData: item, allData },
        });
      }}
      className={`mt-16 flex min-h-550 w-full max-w-560 flex-col items-center justify-start rounded-16 shadow-sm`}
    >
      <img
        className='h-382 w-full rounded-tl-16 rounded-tr-16 object-cover object-top'
        src='/public/images/tidings/card_content_small_top_rounded.png'
        width={``}
        height={`382px`}
        alt='메인카드이미지'
      />
      <div
        className={`w-full rounded-bl-16 rounded-br-16 bg-white-solid px-24 py-24`}
      >
        <div className={`flex w-full items-center justify-start gap-16`}>
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
      </div>
    </button>
  );
};

export default TidingsCard2;
