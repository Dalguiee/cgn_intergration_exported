import { motion } from 'framer-motion';

//데이터
import { mediaData } from '@/db/mockup';

// 컴포넌트
import HomeFondantContentsSwiper from '@/components/home/fondantContents/homeFondantContentsSwiper';
import StyledButtons from '@/components/common/styledButtons';
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';

// 모션변수
const rotating = {
  hidden: { rotate: `0deg` },
  visible: {
    rotate: [`0deg`, `-60deg`, `60deg`, `0deg`],
    transition: { duration: 23, repeat: Infinity, ease: 'easeInOut' },
  },
};

const rotatingReverse = {
  hidden: { rotate: `0deg` },
  visible: {
    rotate: [`0deg`, `90deg`, `-90deg`, `0deg`],
    transition: { duration: 13, repeat: Infinity, ease: 'easeInOut' },
  },
};

const HomeFondantContents = () => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();
  return (
    <div
      ref={intersectionRef}
      className={`relative flex h-906 w-full flex-col items-center justify-center overflow-hidden px-16 pr-16 max-lg:h-379 max-lg:px-0`}
    >
      <div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/bg/section3_bg.png)`,
        }}
        className={`absolute left-0 top-0 z-[-1] h-519 w-full bg-cover bg-center bg-no-repeat max-lg:h-178`}
      >
        <motion.img
          variants={rotating}
          initial={`hidden`}
          animate={isVisible ? `visible` : `hidden`}
          className={`absolute left-[-14%] top-[-49%] w-[50%] select-none object-contain max-lg:left-[-22%] max-lg:top-[-40%] max-lg:w-[70%]`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/home/home_fondant_animate_obj_1.png`}
          width={952}
          height={372}
          alt=''
        />
        <motion.img
          variants={rotatingReverse}
          initial={`hidden`}
          animate={isVisible ? `visible` : `hidden`}
          className={`absolute right-[-8%] top-[-26%] w-[34%] select-none object-contain max-lg:right-[-42%] max-lg:top-[17%] max-lg:w-[56%]`}
          src={`${import.meta.env.VITE_PUBLIC_URL}images/home/home_fondant_animate_obj_2.png`}
          width={539}
          height={207}
          alt=''
        />
      </div>

      {/* 컨텐츠 헤더 */}
      <div
        className={`mb-40 flex w-full max-w-1560 items-end justify-between max-lg:mb-12 max-lg:px-16`}
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
          className='w-143 max-lg:w-81 max-lg:border-none max-lg:bg-transparent max-lg:px-0'
          formMode='mode2-r'
          colorMode='mode3'
          onClick={() => {
            window.open(`https://www.fondant.kr/`, `_blank`);
          }}
          arrowMode={true}
        />
      </div>
      {/* 슬라이딩 컨텐츠 */}
      <div className={`w-full max-w-1560 overflow-visible max-lg:pl-16`}>
        <HomeFondantContentsSwiper mediaData={mediaData} />
      </div>
    </div>
  );
};

export default HomeFondantContents;
