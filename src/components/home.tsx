import React, { useEffect, useReducer, useRef, useState } from 'react';

const Home = () => {
  const verticalBox = useRef();
  const [position, setPosition] = useState('0');

  useEffect(() => {
    const positionCalc = () => {
      if (verticalBox) {
        const getPositon = verticalBox.current.getBoundingClientRect();
        const calcedPosition = (getPositon.top / getPositon.height) * -100;
        if (calcedPosition < 0) {
          console.log('스크롤 준비');
        } else if (calcedPosition > 0 && calcedPosition < 90) {
          setPosition(calcedPosition);
          console.log('스크롤중');
        } else if (calcedPosition > 90) {
          console.log('스크롤 끝남');
        }
        console.log(calcedPosition);
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
            className={`flex items-start justify-start gap-30`}
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
