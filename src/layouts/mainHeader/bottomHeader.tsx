import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MoTopHeader from './moTopHeader';

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
          className={`h-36 w-76`}
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
                    className={`${location?.pathname?.includes(subMenu?.link) ? 'text-bold16 text-white-solid' : 'text-regular16 text-primary-200'} text-nowrap hover:text-primary-100`}
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
            onClick={() => {
              window.open(`https://online.mrm.or.kr/DhDGO0b`, `_blank`);
            }}
            className={`${burger ? 'hidden' : ''} text-bold14 max-lg:text-bold14 h-40 w-96 rounded-4 bg-primary-500 text-white-solid max-lg:h-32 max-lg:w-67`}
          >
            후원하기
          </button>
          {/* 모바일 전환영역 */}
          <MoTopHeader
            burger={burger}
            setBurger={setBurger}
            languageActiveIdx={languageActiveIdx}
            setLanguageActiveIdx={setLanguageActiveIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
