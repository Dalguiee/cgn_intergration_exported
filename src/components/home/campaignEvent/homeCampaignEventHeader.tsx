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
        <div className={`flex items-center justify-center gap-8`}>
          <button
            onClick={() => {
              pagingPrev();
            }}
            className={`max-lg:hidden ${startNum > 0 ? '' : 'pointer-events-none bg-grey-50'} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200`}
          >
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_grey900.svg`}
              width={24}
              height={24}
              alt='왼쪽'
            />
          </button>
          <button
            onClick={() => {
              pagingNext();
            }}
            className={`max-lg:hidden ${endNum < campaignLengthData ? '' : 'pointer-events-none bg-grey-50'} flex h-40 w-40 items-center justify-center rounded-999 border-1 border-grey-200`}
          >
            <img
              className={`h-24 w-24`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey900.svg`}
              width={24}
              height={24}
              alt='오른쪽'
            />
          </button>
        </div>
        <div className={`ml-24`}>
          <StyledButtons
            className='w-112 max-lg:w-58 max-lg:border-none max-lg:bg-transparent max-lg:px-0'
            text='전체보기'
            formMode='mode2-r'
            colorMode='mode3'
            arrowMode={true}
            onClick={() => {
              navigate(`/tidings/campaign`);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCampaignEventHeader;
