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
      className={`flex h-906 w-full flex-col items-start justify-center overflow-hidden bg-cover bg-center bg-no-repeat max-lg:h-300`}
    >
      {/* 컨텐츠 헤더 */}
      <div
        className={`mb-40 flex w-full items-end justify-between px-16 max-lg:mb-12 max-lg:pl-16 lg:px-180`}
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
        <div className={`flex items-center justify-center lg:hidden`}>
          <span className={`text-regular12 text-grey-900`}>퐁당 바로가기</span>
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey700.svg`}
            alt=''
          />
        </div>

        <StyledButtons
          text='퐁당 바로가기'
          className='w-139 max-lg:hidden max-lg:bg-transparent'
          formMode='mode2-r'
          colorMode='mode3'
          arrowMode={true}
        />
      </div>
      {/* 슬라이딩 컨텐츠 */}
      <div className={`w-full overflow-visible pl-180 max-lg:pl-16`}>
        <HomeFondantContentsSwiper mediaData={mediaData} />
      </div>
    </div>
  );
};

export default HomeFondantContents;
