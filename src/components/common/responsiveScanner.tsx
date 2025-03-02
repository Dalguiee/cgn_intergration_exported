import { useSyncExternalStore } from 'react';

const ResponsiveScanner = query => {
  const subscribe = callback => {
    const media = window.matchMedia(query);
    media.addEventListener('change', callback);

    return () => window.removeEventListener(`change`, callback);
  };
  const getSnapshot = () => {
    console.log(`현재 ${query}에 대한 반응형 변경 감지됨.`);
    return window.matchMedia(query).matches;
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default ResponsiveScanner;
