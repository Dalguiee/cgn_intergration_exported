// 훅
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

const HomeCampaignEventHeader = ({
  pagingNext,
  pagingPrev,
  campaignLengthData,
  startNum,
  endNum,
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={`flex w-full max-w-1560 items-center justify-between max-lg:mb-16`}
    >
      <h2 className={`text-bold48 max-lg:text-bold24 text-grey-900`}>
        캠페인/이벤트
      </h2>
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center justify-center gap-8 max-lg:gap-4`}>
          <button
            onClick={() => {
              pagingPrev();
            }}
            className={`${startNum > 0 ? '' : 'pointer-events-none border-grey-200'} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200 max-lg:h-36 max-lg:w-36`}
          >
            <img
              src={`${startNum > 0 ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey200.svg`} `}
              width={24}
              height={24}
              alt='왼쪽'
            />
          </button>
          <button
            onClick={() => {
              pagingNext();
            }}
            className={`${endNum < campaignLengthData ? '' : 'pointer-events-none border-grey-200'} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200 max-lg:h-36 max-lg:w-36`}
          >
            <img
              className={`h-24 w-24`}
              src={`${endNum < campaignLengthData ? `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey900.svg` : `${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey200.svg`}`}
              width={24}
              height={24}
              alt='오른쪽'
            />
          </button>
        </div>
        <div className={`ml-24 max-lg:ml-16`}>
          <StyledButtons
            className='w-116 max-lg:w-58 max-lg:border-none max-lg:bg-transparent max-lg:px-0'
            text='전체보기'
            formMode='mode2-r'
            colorMode='mode3'
            arrowMode={true}
            onClick={() => {
              navigate(`/news/campaign`);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCampaignEventHeader;
