import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const verticalBox = useRef();
  const [position, setPosition] = useState('0');

  useEffect(() => {
    const positionCalc = () => {
      if (verticalBox) {
        const getPositon = verticalBox.current.getBoundingClientRect();
        const calculatedPosition = (getPositon.top / getPositon.height) * -100;
        if (calculatedPosition < 0) {
          console.log('스크롤 준비');
        } else if (calculatedPosition > 0 && calculatedPosition < 90) {
          setPosition(calculatedPosition);
          console.log('스크롤중');
        } else if (calculatedPosition > 90) {
          console.log('스크롤 끝남');
        }
        console.log(calculatedPosition);
      }
    };

    window.addEventListener('scroll', positionCalc);
    return () => window.removeEventListener('scroll', positionCalc);
  }, []);
  return (
    <>
      <div></div>
      <div ref={verticalBox} className={`h-[1000vh] w-full`}>
        <div
          className={`sticky top-0 flex h-[100vh] w-full flex-col items-start justify-center overflow-hidden`}
        >
          <div
            style={{ transform: `translateX( calc(-${position}% * 2.8) )` }}
            className={`duration-600 flex items-start justify-start gap-30 pl-280 transition ease-in-out`}
          >
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
            <img
              className={``}
              src='/public/images/tidings/card_content_small.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
