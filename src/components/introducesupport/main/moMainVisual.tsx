import React from 'react';
import { motion } from 'framer-motion';

const MoMainVisual = props => {
  const { supportTab, setSupportTab } = props;
  // 애니메이션을 순차적으로 시작하려면 `variants`를 설정합니다.
  const itemVariants = {
    hidden: { opacity: 0, y: -30 }, // 초기 상태 (위에서 내려오지 않음, 투명도 0)
    visible: {
      opacity: 1,
      y: 0, // y축 이동을 통해 slide down 효과
      transition: {
        duration: 0.5, // 애니메이션의 시간
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // 자식 요소들이 순차적으로 애니메이션 시작
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div
      className='w-full'
      style={{
        height: `${supportTab ? '820px' : 'fit-content'}`,
        overflow: `${supportTab ? 'hidden' : 'visible'}`,
      }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_main_bg.jpg)`,
        }}
        className={`flex w-full flex-col items-center bg-cover bg-top bg-repeat pb-120 pt-60`}
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <div className='text-bold32 mb-60 break-keep text-center text-white-solid'>
          CGN 모든 사역은
          <br />
          100% 후원으로 운영됩니다.
        </div>
        <motion.button
          className='aspect-320/180 relative mb-24 w-[calc(100%_-_80px)]'
          variants={itemVariants}
          onClick={() => setSupportTab(1)}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_main_sponsor1.jpg`}
            alt=''
            className='h-full w-full'
          />
          <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
            방송&퐁당 플랫폼
            <br />
            <span className='text-primary-500'>후원하기</span>
          </div>
        </motion.button>
        <motion.button
          className='aspect-320/180 relative mb-24 w-[calc(100%_-_80px)]'
          variants={itemVariants}
          onClick={() => setSupportTab(2)}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_main_sponsor2.jpg`}
            alt=''
            className='h-full w-full'
          />
          <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
            콘텐츠 제작
            <br />
            <span className='text-primary-500'>후원하기</span>
          </div>
        </motion.button>
        <motion.button
          className='aspect-320/180 relative w-[calc(100%_-_80px)]'
          variants={itemVariants}
          onClick={() => setSupportTab(3)}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/donation/mo_main_sponsor3.jpg`}
            alt=''
            className='h-full w-full'
          />
          <div className='text-bold18 absolute bottom-16 left-13 text-start text-white-solid'>
            퐁당 글로벌
            <br />
            <span className='text-primary-500'>후원하기</span>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};
export default MoMainVisual;
