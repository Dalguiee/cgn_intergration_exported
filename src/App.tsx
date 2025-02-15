import MainRouter from '@/routers';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // 애니메이션 지속 시간 (ms)
      once: false, // 한 번만 실행 (스크롤 시 반복 X)
      easing: 'ease-in-out', // 애니메이션 속도 조정
    });
  }, []);
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
