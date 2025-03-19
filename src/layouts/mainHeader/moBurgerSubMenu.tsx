import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MoBurgerSubMenu = ({
  headerTopBannerAvailable,
  centerMenu,
  setBurger,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section
      style={{
        transition: `0.15s`,
      }}
      className={`fixed ${headerTopBannerAvailable ? `top-[calc(88px+120px)]` : `top-120`} z-[80] flex h-full w-full flex-col items-start justify-start gap-8 overflow-y-scroll bg-white-solid pb-200 pt-16`}
    >
      {centerMenu?.map((menu, key) => {
        return (
          <div key={key} className='w-full px-24 border-b-1'>
            <div className={`w-full py-14`}>
              <span className={`text-bold18 text-grey-900`}>{menu?.text}</span>
            </div>
            <div
              className={`mb-16 flex flex-wrap items-center justify-start gap-x-12 gap-y-8`}
            >
              {menu?.subMenu?.map((subMenu, key) => (
                <div key={key} className={`h-32 w-115`}>
                  <button
                    onClick={() => {
                      navigate(
                        subMenu?.query
                          ? `${subMenu?.link}?${subMenu?.query}`
                          : `${subMenu?.link}`
                      );
                      setBurger(false);
                    }}
                    className={`${location?.pathname?.includes(subMenu?.link) ? 'text-bold14 text-primary-900' : 'text-regular14 text-grey-600'}`}
                  >
                    {subMenu?.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MoBurgerSubMenu;
