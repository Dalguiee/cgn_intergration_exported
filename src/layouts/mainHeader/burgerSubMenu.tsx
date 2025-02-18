import React from 'react';
import { useNavigate } from 'react-router-dom';

const BurgerSubMenu = ({ burger, centerMenu, setBurger }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`fixed top-128 z-20 flex h-full w-full flex-col items-start justify-start gap-8 overflow-hidden bg-white-solid px-24 pt-16 ${burger ? 'block' : 'hidden'}`}
    >
      {centerMenu.map((menu, key) => (
        <div key={key}>
          <div className={`w-full py-14`}>
            <span className={`text-bold18 text-grey-900`}>{menu.text}</span>
          </div>
          <div className={`flex flex-wrap items-center justify-start`}>
            {menu.subMenu.map((subMenu, key) => (
              <div
                key={key}
                className={`h-32 w-115 [&:nth-child(1)]:text-bold14`}
              >
                <button
                  onClick={() => {
                    navigate(subMenu.link);
                    setBurger(false);
                  }}
                  className={`text-regular14 text-grey-600`}
                >
                  {subMenu.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BurgerSubMenu;
