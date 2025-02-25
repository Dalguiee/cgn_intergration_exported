// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

// 미션 및 후원에 사용되는 유형2의 컨텐츠 카드 컴포넌트 입니다
const TidingsCard = ({ item, pageMode }) => {
  const navigator = useNavigate();
  return (
    <button
      // data-aos='fade-up'
      onClick={() => {
        navigator(`/tidings/${pageMode}/detail?articleId=${item?.id}`);
      }}
      className={`flex min-h-550 w-full flex-col items-center justify-start overflow-hidden rounded-16 bg-white-solid shadow-sm max-lg:min-h-309 max-lg:w-full lg:max-w-560`}
    >
      <img
        className='min-h-382 w-full rounded-tl-16 rounded-tr-16 object-cover object-top max-lg:aspect-[361/24] max-lg:min-h-189'
        src={`${import.meta.env.VITE_PUBLIC_URL}images/tidings/card_content_small_top_rounded.png`}
        width={361}
        height={246}
        alt='메인카드이미지'
      />
      <div
        className={`h-full w-full rounded-bl-16 rounded-br-16 bg-white-solid px-24 py-24`}
      >
        <div className={`flex w-full items-center justify-start gap-16`}>
          <div className={`flex items-center justify-center gap-4`}>
            {item?.tag?.map((obj, key) => (
              <TagIcon
                text={obj?.text}
                id={obj?.id}
                mode={obj?.mode}
                key={key}
              />
            ))}
          </div>
          <div>
            <span className={`text-regular14 text-grey-400`}>
              {item?.startDate}
            </span>
          </div>
        </div>
        <div className={`mt-12 flex w-full items-center justify-start`}>
          <span
            className={`text-bold24 max-lg:text-bold16 line-clamp-2 text-grey-900`}
          >
            {item?.title}
          </span>
        </div>
      </div>
      <img
        className={`absolute bottom-12 right-12 h-38 w-26`}
        width={26}
        height={38}
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/home_tidings_content_mark.svg`}
        alt=''
      />
    </button>
  );
};

export default TidingsCard;
