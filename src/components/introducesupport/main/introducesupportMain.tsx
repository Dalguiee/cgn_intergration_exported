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

  // 현재 후원하기 탭 상태
  const [supportTab, setSupportTab] = useState(null);

  // 현재 후원하기 탭 상태에 따른 스크롤 방지
  useEffect(() => {
    if (supportTab) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [supportTab]);

  return (
    <section className={`relative`}>
      <section
        className={`flex h-fit w-full flex-col items-center justify-start`}
        data-comment='후원페이지'
      >
        {/* 메인 비주얼 */}
        {!mobile ? (
          <PcMainVisual setSupportTab={setSupportTab} />
        ) : (
          <MoMainVisual supportTab={supportTab} setSupportTab={setSupportTab} />
        )}
        {/* 방송 & 플랫폼 후원 */}
        <AnimatePresence>
          {supportTab === 1 && (
            <>
              {!mobile ? (
                <motion.div
                  className='fixed left-0 top-0 z-[100] h-[100vh] w-[100vw] bg-white-solid'
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
              {!mobile ? (
                <motion.div
                  className='fixed left-0 top-0 z-[100] h-[100vh] w-[100vw] bg-white-solid'
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
              {!mobile ? (
                <motion.div
                  className='fixed left-0 top-0 z-[100] h-[100vh] w-[100vw] bg-white-solid'
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
          className={`${mobile ? `flex max-lg:flex` : `hidden`} ${isVisible ? `absolute bottom-0 flex max-lg:flex` : `fixed flex max-lg:flex`} bottom-0 z-10 h-88 w-full justify-center bg-primary-300 pt-16`}
          data-comment='후원페이지 FOOTER 플로팅 MO'
        >
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/cXfOQDm`, `_blank`);
            }}
            className='text-bold16 me-8 h-40 w-full max-w-101 rounded-4 border-1 border-grey-900 bg-white-solid text-grey-900'
          >
            정기후원
          </button>
          <button
            onClick={() => {
              window.open(`https://cgndev.onflou.co.kr/offermore`, `_blank`);
            }}
            className='text-bold16 me-8 h-40 w-full max-w-101 rounded-4 border-1 border-grey-900 bg-white-solid text-grey-900'
          >
            증액후원
          </button>
          <button
            onClick={() => {
              window.open(`https://online.mrm.or.kr/YGoCXF0`, `_blank`);
            }}
            className='text-bold16 h-40 w-full max-w-101 rounded-4 border-1 border-grey-900 bg-white-solid text-grey-900'
          >
            일시후원
          </button>
        </div>
      )}
      {/* 후원하기 Footer Anchor */}
      <div data-comment='하단 플로팅 앵커' ref={intersectionRef}></div>
    </section>
  );
};

export default IntroducesupportMain;
