import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const [langActive, setLangActive] = useState(false); // 언어 선택 활성화 상태
  return (
    <div className={`flex h-48 w-1560 items-center justify-end gap-10`}>
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

const BottomHeader = ({ depthActive, setDepthActive }) => {
  const navigate = useNavigate();
  const centerMenu = [
    {
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
      ],
    },
    {
      text: '소개',
      link: '/support',
    },
    {
      text: '소식',
      link: '/tidings',
    },
    {
      text: '참여',
      link: '/support',
    },
    {
      text: '시청 안내',
      link: '/support',
    },
  ];

  return (
    <div className={`relative w-1560`}>
      <div className={`flex h-80 w-full items-center justify-between`}>
        <button className='h-36 w-76'>
          <img
            className='h-full w-full'
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
          className={`flex items-center justify-between gap-88`}
        >
          {centerMenu.map((menu, index) => (
            <button
              onClick={() => {
                navigate(menu.link);
              }}
              key={index}
            >
              <span className={`text-bold18`}>{menu.text}</span>
            </button>
          ))}
        </div>
        <div className={`flex items-center justify-center`}>
          <button
            className={`h-40 w-89 rounded-4 border-1 border-grey-900 text-grey-900`}
          >
            On-Air
          </button>
          <button
            className={`text-regular14 ml-4 h-40 w-89 rounded-4 bg-primary-500 text-white-solid`}
          >
            후원하기
          </button>
        </div>
      </div>
      <DepthSubMenu setDepthActive={setDepthActive} depthActive={depthActive} />
    </div>
  );
};

const DepthSubMenu = ({ depthActive }) => {
  return (
    <div
      className={`absolute ${depthActive ? '' : 'hidden'} top-80 h-276 w-full bg-[url('/public/images/bg/header_2depth.svg')]`}
    ></div>
  );
};

const MainHeader = () => {
  const [depthActive, setDepthActive] = useState(false); // 2depth 활성여부

  return (
    <header
      onMouseLeave={() => {
        setDepthActive(false);
      }}
      className={`flex h-128 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat`}
      data-comment='메인헤더'
    >
      <TopHeader />
      <BottomHeader setDepthActive={setDepthActive} depthActive={depthActive} />
    </header>
  );
};

export default MainHeader;
