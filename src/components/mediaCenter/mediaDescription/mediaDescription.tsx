// 훅
import React, { useEffect, useRef } from 'react';

// 컴포넌트
import MediaDescriptionMainTitle from '@/components/mediaCenter/mediaDescription/mediaDescriptionMainTitle';
import MediaAboutFondant from '@/components/mediaCenter/mediaDescription/mediaAboutFondant';
import MediaHowToUse from '@/components/mediaCenter/mediaDescription/mediaHowToUse';
import MediaBroadcastSystem from '@/components/mediaCenter/mediaDescription/mediaBroadcastSystem';
import MediaSocialPlatform from './mediaSocialPlatform';
import ResponsiveScanner from '@/components/common/responsiveScanner';
import { useLocation } from 'react-router-dom';

const MediaDescription = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  const motherSection = useRef();
  const sections = useRef([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(query);

  useEffect(() => {
    const scrolling = () => {
      if (sections?.current?.[queryData?.action]) {
        const objTop = sections?.current[queryData?.action].offsetTop;
        window?.scrollTo({
          behavior: 'smooth',
          top: objTop - 50,
        });
        // sections?.current?.[queryData?.action].scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   inline: 'nearest',
        // });
      }
    };

    setTimeout(scrolling, 0);
  }, [location?.pathname, queryData]);

  return (
    <section ref={motherSection} className={`w-full`}>
      <MediaDescriptionMainTitle sections={sections} mobile={mobile} />
      <MediaAboutFondant sections={sections} />
      <MediaHowToUse sections={sections} />
      <MediaBroadcastSystem sections={sections} mobile={mobile} />
      <MediaSocialPlatform sections={sections} />
    </section>
  );
};

export default MediaDescription;
