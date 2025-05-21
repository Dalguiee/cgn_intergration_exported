// 반응형 감지기, 매개변수로 들어온 matchMedia 정규식에 대한 boolean 을 return.
import { useSyncExternalStore } from 'react';

const ResponsiveScanner = query => {
  const subscribe = callback => {
    const media = window.matchMedia(query);
    media.addEventListener('change', callback);

    return () => window.removeEventListener(`change`, callback);
  };
  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default ResponsiveScanner;
