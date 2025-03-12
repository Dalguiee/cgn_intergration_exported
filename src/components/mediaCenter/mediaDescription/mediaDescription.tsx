// 훅
import React from 'react';

// 컴포넌트
import MediaDescriptionSection1 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection1';
import MediaDescriptionSection2 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection2';
import MediaDescriptionSection3 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection3';
import MediaDescriptionSection4 from '@/components/mediaCenter/mediaDescription/mediaDescriptionSection4';
import MediaDescriptionSection5 from './mediaDescriptionSection5';
import ResponsiveScanner from '@/components/common/responsiveScanner';

const MediaDescription = () => {
  const mobile = ResponsiveScanner(`(max-width:1024px)`);
  return (
    <section className={`w-full`}>
      <MediaDescriptionSection1 mobile={mobile} />
      <MediaDescriptionSection2 />
      <MediaDescriptionSection3 />
      <MediaDescriptionSection4 mobile={mobile} />
      <MediaDescriptionSection5 />
    </section>
  );
};

export default MediaDescription;
