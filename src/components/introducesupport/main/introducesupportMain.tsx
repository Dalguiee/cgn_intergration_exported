import React, { useEffect, useState } from 'react';

//메인 비주얼
import MoMainVisual from '@/components/introducesupport/main/moMainVisual';
import PcMainVisual from '@/components/introducesupport/main/pcMainVisual';

//각 후원 탭
//pc
import TabBroadcastPlatform from '@/components/introducesupport/main/tabBroadcastPlatform';
import TabContents from '@/components/introducesupport/main/tabContents';
import TabGlobal from '@/components/introducesupport/main/tabGlobal';

const IntroducesupportMain = () => {
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
      {!supportTab ? (
        <>
          <section
            className={`flex h-fit w-full flex-col items-center justify-start`}
            data-comment='후원페이지'
          >
            {/* 메인 비주얼 */}
            {windowWidth >= 1024 ? (
              <PcMainVisual setSupportTab={setSupportTab} />
            ) : (
              <MoMainVisual setSupportTab={setSupportTab} />
            )}
          </section>
          <div
            className='bottom-0 flex h-88 w-full justify-center bg-white-solid pt-16 max-lg:fixed max-lg:z-10'
            data-comment='후원페이지 FOOTER'
          >
            <button className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
              정기후원
            </button>
            <button className='text-bold14 me-4 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
              증액후원
            </button>
            <button className='text-bold14 h-40 w-80 rounded-4 bg-primary-500 text-white-solid'>
              일시후원
            </button>
          </div>
        </>
      ) : (
        <>
          {/* 방송 & 플랫폼 후원 */}
          {supportTab === 1 && (
            <TabBroadcastPlatform setSupportTab={setSupportTab} />
          )}
          {/* 콘텐트 제작 후원 */}
          {supportTab === 2 && <TabContents setSupportTab={setSupportTab} />}
          {/* 퐁당 글로벌 후원 */}
          {supportTab === 3 && <TabGlobal setSupportTab={setSupportTab} />}
        </>
      )}
    </>
  );
};

export default IntroducesupportMain;
