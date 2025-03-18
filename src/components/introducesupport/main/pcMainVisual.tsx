// 훅
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 컴포넌트
import ScrollTopScanner from '@/components/common/scrollTopScanner';

const PcMainVisual = props => {
  const scrollTop = ScrollTopScanner();

  const { setSupportTab } = props;

  //두번째 애니메이션
  const [afterAni, setAfterAni] = useState(false);

  useEffect(() => {
    //두번째 실행
    const logoFadeOutTimeout = setTimeout(() => {
      setAfterAni(true);
    }, 1700);
    return () => {
      clearTimeout(logoFadeOutTimeout);
    };
  }, []);

  // 로고 Fade In
  const fadeLogoAni = {
    hidden: { opacity: 0, y: '20%', scale: 0.5 },
    fadeIn: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.7,
      },
    },
    fadeOut: {
      opacity: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  // 텍스트 Fade In
  const fadeTextAni = {
    hidden: { opacity: 0, y: '-60%', scale: 0.3 },
    fadeIn: {
      opacity: 1,
      y: '25%',
      scale: 1.2,
      transition: {
        duration: 0.8,
        delay: 0.7,
      },
    },
    fadeOut: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  // 이미지 Fadein
  const fadeImg = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1.7,
      },
    },
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    // 2초 후에 모든 div에 대해 랜덤한 시간 후에 hidden 클래스를 추가
    const timeoutId = setTimeout(() => {
      // 모든 div 요소를 선택합니다.
      const divs = document.querySelectorAll('.random-hide-div');

      // 각 div에 대해 랜덤한 시간 후에 hidden 클래스를 추가합니다.
      divs.forEach((div, index) => {
        const randomDelay = Math.random() * 1000; // 최대 3초까지 랜덤한 시간 딜레이
        setTimeout(() => {
          div.classList.add('hidden1'); // 지정된 시간 후에 숨기기
        }, randomDelay);
      });
    }, 2000); // 2초 뒤에 모션을 시작

    // Clean up 함수: 컴포넌트가 언마운트될 때, 타이머 제거
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      className='relative aspect-[2100_/_960] w-full bg-[#FF6B00]'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div
        className='absolute top-0 aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_main_bg.jpg)`,
        }}
      >
        {/* 히든 되는 박스들 */}
        <div className='random-hide-div absolute left-[19.9%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[24.9%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[30%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[45%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[50%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[55%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[65.1%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[70.1%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[80.2%] top-[29.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[14.8%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[19.9%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='ranlut-hide-div absolute left-[25%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[39.9%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[45%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[50%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[65.1%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[70.1%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[80.2%] top-[40.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[14.8%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[19.9%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[25%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[39.9%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[45%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[65.1%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[75.2%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[80.2%] top-[51.3%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[14.8%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[19.9%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[25%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[30%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[45%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[50%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[55%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[65.1%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        <div className='random-hide-div absolute left-[80.2%] top-[62.4%] aspect-square w-[5.2%] bg-[#FF6B00]'></div>
        {/* 방송&퐁당 플랫폼 후원하기 */}
        <button
          className='absolute left-[15%] top-[29.5%] aspect-square w-[20%]'
          onClick={() => {
            setSupportTab(1);
          }}
        ></button>
        {/* 콘텐츠 제작 후원하기 */}
        <button
          className='absolute left-[40%] top-[29.5%] aspect-square w-[20%]'
          onClick={() => {
            setSupportTab(2);
          }}
        ></button>
        {/* 퐁당 글로번 후원하기 */}
        <button
          className='absolute left-[65.2%] top-[29.5%] aspect-square w-[20%]'
          onClick={() => {
            setSupportTab(3);
          }}
        ></button>
        {/* 후원하기 Footer */}
        <div
          className={`${scrollTop ? `fixed` : `absolute`} bottom-0 flex aspect-[1920_/_112] w-full items-center justify-center bg-[rgba(255,_255,_255,_0.3)]`}
        >
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
            }}
            className='me-[0.8%] aspect-[130_/_64] w-[7%] bg-cover bg-center bg-no-repeat text-[0]'
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/btn_support1.svg)`,
            }}
          >
            정기후원
          </button>
          <button
            onClick={() => {
              window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
            }}
            className='me-[0.8%] aspect-[130_/_64] w-[7%] bg-cover bg-center bg-no-repeat text-[0]'
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/btn_support2.svg)`,
            }}
          >
            증액후원
          </button>
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
            }}
            className='me-[0.8%] aspect-[130_/_64] w-[7%] bg-cover bg-center bg-no-repeat text-[0]'
            style={{
              backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/btn_support3.svg)`,
            }}
          >
            일시후원
          </button>
        </div>
      </div>
      {/* 초기 배경 */}
      <motion.div
        className='absolute top-0 aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        variants={fadeImg}
        initial='hidden'
        animate='visible'
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/pc_main_bg2.jpg)`,
          pointerEvents: `${afterAni ? 'none' : 'initial'}`,
        }}
      ></motion.div>
      {/* CGN 로고 */}
      <motion.div
        className='pointer-events-none absolute left-[21%] top-[35%] z-10 aspect-[1060_/_376] w-[57%]'
        variants={fadeLogoAni}
        initial='hidden'
        animate={afterAni ? 'fadeOut' : 'fadeIn'}
      >
        <img
          src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/white_cgn_logo.svg`}
          alt=''
          className='h-full w-full'
        />
      </motion.div>
      {/* 타이틀 */}
      <motion.div
        className='pointer-events-none absolute left-[21%] top-[35%] z-10 aspect-[1060_/_376] w-[57%]'
        variants={fadeTextAni}
        initial='hidden'
        animate={afterAni ? 'fadeOut' : 'fadeIn'}
      >
        <span className='pointer-events-none absolute top-[-57.6%] w-full text-center font-[Pretendard] text-[2.6vw] font-bold leading-[3.3vw] text-white-solid'>
          CGN 모든 사역은
          <br />
          100% 후원으로 운영됩니다.
        </span>
      </motion.div>
    </motion.div>
  );
};
export default PcMainVisual;
