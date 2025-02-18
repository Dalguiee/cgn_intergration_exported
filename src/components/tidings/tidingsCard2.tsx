//개발중

import { useNavigate } from 'react-router-dom';
import TagIcon from '@/components/common/tagBtn';

// 미션 및 후원에 사용되는 유형2의 컨텐츠 카드 컴포넌트 입니다

const TidingsCard2 = ({ item, allData, pageMode }) => {
  // const navigator = useNavigate();

  return <>개발중</>;
  return (
    <button
      data-aos='fade-up'
      onClick={() => {
        navigator(`/tidings/${pageMode}/detail`, {
          state: { detailData: item, allData },
        });
      }}
      className={`mt-16 flex min-h-550 w-full max-w-560 flex-col items-center justify-start rounded-16 bg-white-solid shadow-sm max-lg:min-h-378`}
    >
      <img
        className='h-382 w-full rounded-tl-16 rounded-tr-16 object-cover object-top'
        src={`${import.meta.env.VITE_PUBLIC_URL}images/tidings/card_content_small_top_rounded.png`}
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
              <TagIcon text={obj.text} id={obj.id} mode={obj.mode} key={key} />
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
