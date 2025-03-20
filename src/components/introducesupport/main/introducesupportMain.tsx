import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//메인 비주얼
import MoMainVisual from '@/components/introducesupport/main/moMainVisual';
import PcMainVisual from '@/components/introducesupport/main/pcMainVisual';

//각 후원 탭
//pc
import PcTabBroadcastPlatform from '@/components/introducesupport/main/pcTabBroadcastPlatform';
import PcTabContents from '@/components/introducesupport/main/pcTabContents';
import PcTabGlobal from '@/components/introducesupport/main/pcTabGlobal';
//mo
import MoTabBroadcastPlatform from '@/components/introducesupport/main/moTabBroadcastPlatform';
import MoTabContents from '@/components/introducesupport/main/moTabContents';
import MoTabGlobal from '@/components/introducesupport/main/moTabGlobal';

// 컴포넌트
import IntersectionObserverScanner from '@/components/common/intersectionObserverScanner';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const IntroducesupportMain = () => {
  const { intersectionRef, isVisible } = IntersectionObserverScanner();
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //현재 후원하기 탭 상태
  const [supportTab, setSupportTab] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section
        className={`flex h-fit w-full flex-col items-center justify-start`}
        data-comment='후원페이지'
      >
        {/* 메인 비주얼 */}
        {windowWidth >= 1024 ? (
          <PcMainVisual setSupportTab={setSupportTab} />
        ) : (
          <MoMainVisual supportTab={supportTab} setSupportTab={setSupportTab} />
        )}
        {/* 방송 & 플랫폼 후원 */}
        <AnimatePresence>
          {supportTab === 1 && (
            <>
              {windowWidth >= 1024 ? (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PcTabBroadcastPlatform setSupportTab={setSupportTab} />
                </motion.div>
              ) : (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoTabBroadcastPlatform setSupportTab={setSupportTab} />
                </motion.div>
              )}
            </>
          )}
          {/* 콘텐트 제작 후원 */}
          {supportTab === 2 && (
            <>
              {windowWidth >= 1024 ? (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PcTabContents setSupportTab={setSupportTab} />
                </motion.div>
              ) : (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoTabContents setSupportTab={setSupportTab} />
                </motion.div>
              )}
            </>
          )}
          {/* 퐁당 글로벌 후원 */}
          {supportTab === 3 && (
            <>
              {windowWidth >= 1024 ? (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PcTabGlobal setSupportTab={setSupportTab} />
                </motion.div>
              ) : (
                <motion.div
                  className='absolute z-10 h-auto w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoTabGlobal setSupportTab={setSupportTab} />
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </section>
      {!supportTab && (
        <div
          className={`${mobile ? `` : `hidden`} ${isVisible ? `flex` : `fixed bottom-0 max-lg:flex`} z-10 h-88 w-full justify-center bg-white-solid pt-16`}
          data-comment='후원페이지 FOOTER 플로팅'
        >
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
            }}
            className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            정기후원
          </button>
          <button
            onClick={() => {
              window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
            }}
            className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            증액후원
          </button>
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
            }}
            className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'
          >
            일시후원
          </button>
        </div>
      )}
      {/* 후원하기 Footer Anchor */}
      <div data-comment='하단 플로팅 앵커' ref={intersectionRef}></div>
    </>
  );
};

export default IntroducesupportMain;
