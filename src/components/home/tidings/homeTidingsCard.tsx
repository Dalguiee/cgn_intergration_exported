// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';

// 미션 및 후원에 사용되는 유형2의 컨텐츠 카드 컴포넌트 입니다
const HomeTidingsCard = ({ item, pageMode }) => {
  const navigator = useNavigate();
  return (
    <button
      // data-aos='fade-up'
      onClick={() => {
        navigator(`/news/${pageMode}/detail?articleId=${item?.id}`);
      }}
      className={`flex min-h-550 w-full flex-col items-center justify-start overflow-hidden rounded-16 shadow-sm max-lg:min-h-309 max-lg:w-full max-lg:rounded-8 lg:max-w-560`}
    >
      <div className={`h-fit w-fit overflow-hidden`}>
        <img
          style={{ transition: `0.8s` }}
          className={`min-h-382 w-full rounded-tl-16 rounded-tr-16 object-cover object-top hover:scale-110 max-lg:aspect-[361/24] max-lg:min-h-189 max-lg:rounded-tl-8 max-lg:rounded-tr-8`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/tidings/card_content_small_top_rounded.png`}
          width={361}
          height={246}
          alt='메인카드이미지'
        />
      </div>
      <div
        className={`h-168 w-full flex-shrink-0 rounded-bl-16 rounded-br-16 bg-white-solid px-24 py-24 max-lg:h-120 max-lg:rounded-bl-8 max-lg:rounded-br-8 max-lg:px-12 max-lg:py-16`}
      >
        <div
          className={`flex w-full flex-shrink-0 items-center justify-start gap-16 max-lg:gap-8`}
        >
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
            <span
              className={`text-regular14 max-lg:text-regular10 text-grey-400`}
            >
              {item?.startDate}
            </span>
          </div>
        </div>
        <div
          className={`mt-12 flex w-full flex-shrink-0 items-center justify-start pr-16 max-lg:pr-10`}
        >
          <p
            className={`text-bold24 max-lg:text-bold16 z-10 line-clamp-2 text-left text-grey-900`}
          >
            {item?.title}
          </p>
        </div>
      </div>
      <img
        className={`absolute bottom-12 right-12 h-38 w-26 max-lg:bottom-8 max-lg:right-8 max-lg:h-18 max-lg:w-12`}
        width={26}
        height={38}
        src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/home_tidings_content_mark.svg`}
        alt=''
      />
    </button>
  );
};

export default HomeTidingsCard;
