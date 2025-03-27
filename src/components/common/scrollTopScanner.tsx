// 화면 맨 위에 스크롤 상태인지 감지하여 boolean return
import { useSyncExternalStore } from 'react';

const ScrollTopScanner = () => {
  const subscribe = callback => {
    window.addEventListener('scroll', callback);

    return () => window.removeEventListener(`scroll`, callback);
  };

  const getSnapshot = () => {
    return !(window.scrollY > 0);
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default ScrollTopScanner;
