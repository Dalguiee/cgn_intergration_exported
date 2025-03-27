// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';
import ResponsiveScanner from '@/components/common/responsiveScanner';

// 미션 및 후원에 사용되는 유형2의 컨텐츠 카드 컴포넌트 입니다
const TidingsCard2 = ({ item, pageMode }) => {
  const navigator = useNavigate();
  const cardBreakPoint = ResponsiveScanner(`(max-width:1800px)`);
  return (
    <button
      data-aos='fade-up'
      style={{ boxShadow: `0 0 30px 1px #ececec` }}
      onClick={() => {
        navigator(`/news/${pageMode}/detail?articleId=${item.id}`);
      }}
      className={`flex h-full w-full flex-col items-center justify-start rounded-16 bg-white-solid shadow-sm`}
    >
      <img
        className='aspect-[560/382] w-full rounded-tl-16 rounded-tr-16 object-cover object-top max-lg:aspect-[unset]'
        src={`${import.meta.env.VITE_PUBLIC_URL}images/tidings/card_content_small_top_rounded.png`}
        width={361}
        height={246}
        alt='메인카드이미지'
      />
      <div
        className={`aspect-[560/168] w-full rounded-bl-16 rounded-br-16 bg-white-solid px-24 py-24 max-lg:aspect-[unset] max-lg:px-16 max-lg:pb-24 max-lg:pt-16`}
      >
        <div className={`flex w-full items-center justify-start gap-16`}>
          <div className={`flex items-center justify-center gap-4`}>
            {item?.tag?.map((obj, key) => (
              <TagIcon text={obj.text} id={obj.id} mode={obj.mode} key={key} />
            ))}
          </div>
          <div className={`line-clamp-1`}>
            <span
              className={`text-regular14 max-lg:text-regular12 text-grey-400`}
            >
              {item.startDate}
            </span>
            <span
              className={`text-regular14 max-lg:text-regular12 text-grey-400`}
            >
              ~
            </span>
            <span
              className={`text-regular14 max-lg:text-regular12 text-grey-400`}
            >
              {item.endDate}
            </span>
          </div>
        </div>
        <div className={`mt-12 flex w-full items-center justify-start`}>
          <span
            className={`text-bold24 max-lg:text-bold18 ${cardBreakPoint ? `line-clamp-1` : `line-clamp-2`} text-grey-900`}
          >
            {item.title}
          </span>
        </div>
      </div>
    </button>
  );
};

export default TidingsCard2;
