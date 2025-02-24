import Btn from '@/components/common/btn';

const CampaignEventHeader = ({ pagingNext, pagingPrev }) => {
  return (
    <section
      className={`flex w-full max-w-1560 items-center justify-between max-lg:hidden`}
    >
      <h2 className={`text-bold48 text-grey-900`}>캠페인/이벤트</h2>
      <div className={`flex items-center justify-between`}>
        <div className={`flex items-center justify-center gap-8`}>
          <button
            onClick={() => {
              pagingPrev();
            }}
            className={`h-40 w-40`}
          >
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_left_rounded.svg`}
              width={40}
              height={40}
              alt='왼쪽'
            />
          </button>
          <button
            onClick={() => {
              pagingNext();
            }}
            className={`h-40 w-40`}
          >
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_rounded.svg`}
              width={40}
              height={40}
              alt='오른쪽'
            />
          </button>
        </div>
        <div className={`ml-24`}>
          <Btn
            text='전체보기'
            formMode='mode2-r'
            colorMode='mode3'
            arrowMode={true}
          />
        </div>
      </div>
    </section>
  );
};

export default CampaignEventHeader;
