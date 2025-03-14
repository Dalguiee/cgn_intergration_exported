// 훅
import React from 'react';

// 컴포넌트
import MediaDescriptionMainTitle from '@/components/mediaCenter/mediaDescription/mediaDescriptionMainTitle';
import MediaAboutFondant from '@/components/mediaCenter/mediaDescription/mediaAboutFondant';
import MediaHowToUse from '@/components/mediaCenter/mediaDescription/mediaHowToUse';
import MediaBroadcastSystem from '@/components/mediaCenter/mediaDescription/mediaBroadcastSystem';
import MediaSocialPlatform from './mediaSocialPlatform';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const MediaDescription = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  return (
    <section className={`w-full`}>
      <MediaDescriptionMainTitle mobile={mobile} />
      <MediaAboutFondant />
      <MediaHowToUse />
      <MediaBroadcastSystem mobile={mobile} />
      <MediaSocialPlatform />
    </section>
  );
};

export default MediaDescription;
