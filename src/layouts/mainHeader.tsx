import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const [langActive, setLangActive] = useState(false); // 언어 선택 활성화 상태
  return (
    <div
      className={`flex h-48 w-full max-w-1560 items-center justify-end gap-10 max-md:hidden`}
    >
      <button>
        <p className='text-regular14 text-grey-400'>퐁당</p>
      </button>
      <span className='separator'></span>
      <div>
        <span className={`text-regular14 text-grey-400`}>나의 후원 보기</span>
      </div>
      <span className='separator'></span>
      <button
        className={`group flex items-center justify-center`}
        onClick={() => {
          setLangActive(!langActive);
        }}
      >
        <span className={`text-regular14 text-grey-400`}>KOR</span>
        <img
          className={`ml-4 ${langActive ? '' : 'rotate-180'}`}
          src={`/public/images/icon/orange_tri.svg`}
          alt=''
        />
      </button>
    </div>
  );
};

const BottomHeader = ({
  centerMenu,
  setDepthActive,
  depthActive,
  burger,
  setBurger,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative z-20 flex w-full max-w-1560 flex-col items-center justify-center max-md:h-64 max-md:w-full`}
    >
      <div
        className={`flex h-80 w-full items-center justify-between max-md:h-full`}
      >
        <button
          onClick={() => {
            navigate('/home');
          }}
          className='h-36 w-76'
        >
          <img
            className={`${burger ? 'hidden' : ''} h-full w-full`}
            src={`/public/images/logo/main_logo.png`}
            alt=''
            width='36px'
            height='73px'
          />
        </button>
        <div
          onMouseEnter={() => {
            setDepthActive(true);
          }}
          className={`absolute right-[50%] flex translate-x-[50%] transform items-center justify-between gap-88 max-lg:gap-56 max-md:hidden`}
        >
          {centerMenu.map((menu, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center`}
            >
              <button
                onClick={() => {
                  navigate(menu.link);
                }}
              >
                <span className={`text-bold18`}>{menu.text}</span>
              </button>
              <div
                className={`absolute gap-8 ${depthActive ? '' : 'hidden'} top-79 flex flex-col items-center justify-center`}
              >
                {menu.subMenu.map((subMenu, key) => (
                  <button
                    key={key}
                    onClick={() => {
                      navigate(subMenu.link);
                      setDepthActive(false);
                    }}
                    className={`text-nowrap text-regular14 text-primary-100`}
                  >
                    {subMenu.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`flex items-center justify-center gap-8`}>
          <button
            className={`${burger ? 'hidden' : ''} h-40 w-89 rounded-4 border-1 border-grey-900 text-grey-900 max-md:h-32`}
          >
            On-Air
          </button>
          <button
            className={`${burger ? 'hidden' : ''} h-40 w-89 rounded-4 bg-primary-500 text-regular14 text-white-solid max-md:h-32`}
          >
            후원하기
          </button>
          <div
            className={`flex items-center justify-center gap-12 ${burger ? '' : 'hidden'}`}
          >
            <button className={`text-regular16 text-white-solid`}>KN</button>
            <span className={`border-pirmary-100 h-16 w-1 border-l-2`}></span>
            <button className={`text-regular16 text-white-solid`}>EN</button>
          </div>
          <button
            onClick={() => {
              setBurger(item => {
                return !item;
              });
            }}
            className={`hidden h-32 w-32 items-center justify-center px-6 max-md:block`}
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

const DepthSubMenu = ({ depthActive, setDepthActive }) => {
  return (
    <div
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`absolute max-md:hidden ${depthActive ? '' : 'hidden'} top-130 z-10 flex h-276 w-full items-center justify-center gap-20 bg-[url('/public/images/bg/header_2depth.svg')] bg-cover bg-center bg-no-repeat`}
    >
      {/* {centerMenu.map(menu => (
        <div
          className='flex flex-col items-center justify-start h-full'
          key={menu.key}
        ></div>
      ))} */}
    </div>
  );
};

const MobileBottom = ({ burger }) => {
  return (
    <section
      className={`flex items-center justify-center ${burger ? '' : 'hidden'} h-64 w-full gap-12`}
    >
      <button
        className={`border-white-so flex h-40 w-174 items-center justify-center rounded-4 border-1 text-bold14 text-white-solid`}
      >
        퐁당
      </button>
      <button
        className={`flex h-40 w-174 items-center justify-center rounded-4 bg-white-solid text-bold14 text-grey-900`}
      >
        나의 후원 보기
      </button>
    </section>
  );
};

const BurgerSubMenu = ({ burger, centerMenu, setBurger }) => {
  const navigate = useNavigate();
  return (
    <section
      className={`justyfy-start fixed top-128 z-10 flex h-full w-full flex-col items-start gap-8 overflow-hidden bg-white-solid px-24 pt-16 md:hidden ${burger ? 'block' : 'hidden'}`}
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

const MainHeader = () => {
  const [depthActive, setDepthActive] = useState(false); // 2depth 활성여부
  const [burger, setBurger] = useState(false);

  const centerMenu = [
    {
      key: 0,
      text: '후원안내',
      link: '/support',
      subMenu: [
        {
          text: '미디어선교 후원',
          link: '/support',
        },
        {
          text: '기념일 후원',
          link: '/support',
        },
        {
          text: '교회/기업 후원',
          link: '/support',
        },
        {
          text: '유산 후원',
          link: '/support',
        },
        {
          text: '해외지사 후원',
          link: '/support',
        },
        {
          text: '후원내역보고',
          link: '/support',
        },
      ],
    },
    {
      key: 1,
      text: '소개',
      link: '/support',
      subMenu: [
        {
          text: '미션&비전',
          link: '/support',
        },
        {
          text: '기관 소개',
          link: '/support',
        },
        {
          text: '해외지사 소개',
          link: '/support',
        },
        {
          text: '홍보 대사',
          link: '/support',
        },
        {
          text: '채용',
          link: '/support',
        },
      ],
    },
    {
      key: 2,
      text: '소식',
      link: '/tidings/campaign',
      subMenu: [
        {
          text: '캠페인/이벤트',
          link: '/tidings/campaign',
        },
        {
          text: '선교 스토리',
          link: '/tidings/mission',
        },
        {
          text: '후원 스토리',
          link: '/tidings/support',
        },
        {
          text: '보도 자료',
          link: '/support',
        },
        {
          text: '외부 소식',
          link: '/support',
        },
        {
          text: '매거진',
          link: '/support',
        },
      ],
    },
    {
      key: 3,
      text: '참여',
      link: '/support',
      subMenu: [
        {
          text: '중보기도 신청',
          link: '/support',
        },
        {
          text: '자원봉사단 신청',
          link: '/support',
        },
        {
          text: '행사/견학 신청',
          link: '/support',
        },
      ],
    },
    {
      key: 4,
      text: '시청 안내',
      link: '/support',
      subMenu: [
        {
          text: '퐁당 웹/앱/스마트TV',
          link: '/support',
        },
        {
          text: '케이블/IPTV',
          link: '/support',
        },
        {
          text: '위성',
          link: '/support',
        },
        {
          text: '소셜&오픈 플랫폼',
          link: '/support',
        },
      ],
    },
  ];

  return (
    <header
      className={`px-20 ${burger ? 'fixed top-0 max-md:bg-primary-500' : ''} z-10 flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat max-md:border-b-2 max-md:border-grey-100 max-md:px-20`}
      data-comment='메인헤더'
    >
      <TopHeader />
      <BottomHeader
        burger={burger}
        setBurger={setBurger}
        centerMenu={centerMenu}
        depthActive={depthActive}
        setDepthActive={setDepthActive}
      />
      <MobileBottom burger={burger} />
      <DepthSubMenu setDepthActive={setDepthActive} depthActive={depthActive} />
      <BurgerSubMenu
        setBurger={setBurger}
        centerMenu={centerMenu}
        burger={burger}
      />
    </header>
  );
};

export default MainHeader;
