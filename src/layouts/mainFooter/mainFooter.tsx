// 훅
import { useEffect, useState } from 'react';

// 컴포넌트
import MainFooterPc from './mainFooterPc';
import MainFooterMo from './mainFooterMo';

const linkData = [
  {
    text: `USA`,
    link: `http://www.cgnfoundation.com/`,
  },
  {
    text: `Japan`,
    link: `http://japan.cgntv.net/`,
  },
  {
    text: `Taiwan`,
    link: `http://chinese.cgntv.net/`,
  },
  {
    text: `Thailand`,
    link: `https://cgnthai.net/`,
  },
  {
    text: `Indonesia`,
    link: `https://www.cgnindonesia.com/`,
  },
  {
    text: `France`,
    link: `https://www.youtube.com/@cgn_francophone`,
  },
];

const MainFooter = () => {
  const [selectedLand, setSelectedLand] = useState(undefined);

  // 하단부 링크 선택시 이동
  useEffect(() => {
    if (selectedLand !== undefined) {
      window.open(selectedLand?.link, '_blank');
      setSelectedLand(undefined);
    }
  }, [selectedLand]);

  return (
    <>
      {/* pc footer */}
      <MainFooterPc
        linkData={linkData}
        selectedLand={selectedLand}
        setSelectedLand={setSelectedLand}
      />
      {/* mo footer */}
      <MainFooterMo
        linkData={linkData}
        selectedLand={selectedLand}
        setSelectedLand={setSelectedLand}
      />
    </>
  );
};

export default MainFooter;
