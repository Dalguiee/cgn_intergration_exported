import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomHeader = ({
  centerMenu,
  depthActive,
  setDepthActive,
  burger,
  setBurger,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [languageActiveIdx, setLanguageActiveIdx] = useState(0); // 활성화된 언어 인덱스

  return (
    <div
      className={`relative z-[80] flex h-80 w-full max-w-1560 flex-col items-center justify-center max-lg:h-56 max-lg:w-full`}
    >
      <div className={`flex h-full w-full items-center justify-between`}>
        <button
          onClick={() => {
            navigate('/');
          }}
          className='h-36 w-76'
        >
          <img
            className={`${burger ? 'hidden' : ''} h-full w-full`}
            src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/main_logo.png`}
            alt=''
            width='36px'
            height='73px'
          />
        </button>
        <div
          onMouseEnter={() => {
            setDepthActive(true);
          }}
          style={{ transition: `0.5s` }}
          className={`${depthActive ? `lg:gap-90 xl:gap-120` : `lg:gap-60 xl:gap-80`} absolute right-[50%] flex translate-x-[50%] transform items-center justify-between max-lg:hidden max-lg:gap-50`}
        >
          {centerMenu?.map((menu, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center`}
            >
              <button
                onClick={() => {
                  navigate(menu?.link);
                }}
              >
                <span
                  className={`${location.pathname.includes(menu?.path) ? 'text-primary-500' : 'text-grey-900'} text-bold18 text-nowrap`}
                >
                  {menu?.text}
                </span>
              </button>
              <div
                style={{ transition: `0.5s` }}
                className={`absolute gap-8 ${depthActive ? 'opacity-100' : 'pointer-events-none select-none opacity-0'} top-79 flex flex-col items-center justify-center`}
              >
                {menu?.subMenu?.map((subMenu, key) => (
                  <button
                    style={{ transition: `0.5s` }}
                    key={key}
                    onClick={() => {
                      navigate(subMenu?.link);
                      setDepthActive(false);
                    }}
                    className={`${location?.pathname?.includes(subMenu?.link) ? 'text-bold16' : 'text-regular16'} text-nowrap text-primary-100`}
                  >
                    {subMenu?.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`flex items-center justify-center gap-12`}>
          <button
            onClick={() => {
              window.open(`https://www.fondant.kr/live`, `_blank`);
            }}
            className={`${burger ? 'hidden' : ''} text-bold14 max-lg:text-bold14 h-40 w-91 rounded-4 border-1 border-grey-900 text-grey-900 max-lg:h-32 max-lg:w-67`}
          >
            On-Air
          </button>
          <button
            className={`${burger ? 'hidden' : ''} text-bold14 max-lg:text-bold14 h-40 w-96 rounded-4 bg-primary-500 text-white-solid max-lg:h-32 max-lg:w-67`}
          >
            후원하기
          </button>
          <div
            className={`flex items-center justify-center gap-12 ${burger ? '' : 'hidden'}`}
          >
            <button
              className={`text-white-solid ${languageActiveIdx === 0 ? 'text-bold16 underline decoration-[1.5px] underline-offset-[2px]' : 'text-regular16'}`}
              onClick={() => {
                setLanguageActiveIdx(0);
              }}
            >
              KR
            </button>
            <span className={`border-pirmary-100 h-12 w-1 border-l-1`}></span>
            <button
              className={`text-white-solid ${languageActiveIdx === 1 ? 'text-bold16 underline decoration-[1.5px] underline-offset-[2px]' : 'text-regular16'}`}
              onClick={() => {
                setLanguageActiveIdx(1);
              }}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => {
              setBurger(item => {
                return !item;
              });
            }}
            className={`hidden h-32 w-32 items-center justify-center px-6 max-lg:block`}
          >
            <div className={`flex flex-col items-end justify-center gap-4`}>
              <span
                className={`w-full rounded-10 transition ${burger ? 'translate-y-3 rotate-[-45deg] transform border-white-solid' : ''} border-t-3 border-grey-900`}
              ></span>
              <span
                className={`w-[50%] rounded-10 border-t-3 ${burger ? 'hidden' : ''} border-grey-900`}
              ></span>
              <span
                className={`w-full rounded-10 border-t-3 ${burger ? 'translate-y-[-4px] rotate-[45deg] transform border-white-solid' : ''} border-grey-900`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
