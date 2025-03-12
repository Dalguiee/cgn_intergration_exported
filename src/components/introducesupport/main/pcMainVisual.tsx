import React from 'react';
import { motion } from 'framer-motion';

const PcMainVisual = props => {
  const { setSupportTab } = props;

  // 애니메이션을 순차적으로 시작하려면 `variants`를 설정합니다.
  const itemVariants1 = {
    hidden: { opacity: 1 }, // 초기 상태
    visible: {
      opacity: 0,
      transition: {
        duration: 1, // 애니메이션의 시간
        delay: 5,
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

  return (
    <motion.div
      className='relative aspect-[2100_/_960] w-full'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div
        className='absolute top-0 aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_main_bg.jpg)`,
        }}
      ></div>
      <motion.div
        className='absolute top-0 aspect-[2100_/_960] w-full bg-cover bg-top bg-repeat'
        variants={itemVariants1}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL}images/introducesupport/pc_main_bg2.jpg)`,
        }}
      ></motion.div>
      <motion.div className=''></motion.div>
    </motion.div>
  );
};
export default PcMainVisual;
