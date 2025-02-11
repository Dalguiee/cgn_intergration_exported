import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const [langActive, setLangActive] = useState(false); // 언어 선택 활성화 상태
  return (
    <div
      className={`flex h-48 w-full items-center justify-end gap-10 px-180 py-0`}
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

const BottomHeader = () => {
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
      link: '/support',
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
  const [depthActive, setDepthActive] = useState(false); // 2depth 활성여부

  return (
    <div className={`relative w-full`}>
      <div
        className={`flex h-80 w-full items-center justify-between px-180 py-0`}
      >
        <button className='h-36 w-76'>
          <img
            className='h-full w-full'
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
          onMouseLeave={() => {
            setDepthActive(false);
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
        <div>
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
      <div
        className={`absolute ${depthActive ? '' : 'hidden'} top-80 h-276 w-full bg-[url('/public/images/bg/header_2depth.svg')]`}
      ></div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <header
      className={`flex h-128 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat`}
      data-comment='메인헤더'
    >
      <TopHeader />
      <BottomHeader />
    </header>
  );
};

export default MainHeader;
