//데이터
import { mediaData } from '@/db/mockup';

// 컴포넌트
import HomeFondantContentsSwiper from '@/components/home/fondantContents/homeFondantContentsSwiper';
import StyledButtons from '@/components/common/styledButtons';

const HomeFondantContents = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/bg/section3_bg.png)`,
      }}
      className={`flex h-906 w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pr-16 max-lg:h-300 lg:pl-180`}
    >
      {/* 컨텐츠 헤더 */}
      <div
        className={`mb-40 flex w-full max-w-1560 items-end justify-between max-lg:mb-12 max-lg:pl-16`}
      >
        <div className={`flex flex-col items-start justify-start`}>
          <span
            className={`text-bold48 max-lg:text-bold24 text-white-solid max-lg:text-grey-900`}
          >
            퐁당 콘텐츠
          </span>
          <span className={`text-regular24 text-white-solid max-lg:hidden`}>
            4만 여개의 다양한 콘텐츠를 무료로 시청하세요!
          </span>
        </div>

        <StyledButtons
          text='퐁당 바로가기'
          className='w-139 max-lg:w-81 max-lg:border-none max-lg:bg-transparent max-lg:px-0'
          formMode='mode2-r'
          colorMode='mode3'
          onClick={() => {
            window.open(`https://www.fondant.kr/`, `_blank`);
          }}
          arrowMode={true}
        />
      </div>
      {/* 슬라이딩 컨텐츠 */}
      <div className={`w-full overflow-visible max-lg:pl-16`}>
        <HomeFondantContentsSwiper mediaData={mediaData} />
      </div>
    </div>
  );
};

export default HomeFondantContents;
