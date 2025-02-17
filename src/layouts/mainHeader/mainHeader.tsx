import { useEffect, useState } from 'react';
import TopHeader from '@/layouts/mainHeader/topHeader';
import BottomHeader from '@/layouts/mainHeader/bottomHeader';
import DepthSubMenu from './depthSubMenu';
import MobileBottom from './mobileBottom';
import BurgerSubMenu from './burgerSubMenu';

const centerMenu = [
  {
    key: 0,
    text: '후원안내',
    path: '/introducesupport/',
    link: '/introducesupport',
    subMenu: [
      {
        text: '미디어선교 후원',
        link: '/introducesupport',
      },
      {
        text: '기념일 후원',
        link: '/introducesupport',
      },
      {
        text: '교회/기업 후원',
        link: '/introducesupport',
      },
      {
        text: '유산 후원',
        link: '/introducesupport',
      },
      {
        text: '해외지사 후원',
        link: '/introducesupport',
      },
      {
        text: '후원내역보고',
        link: '/introducesupport',
      },
    ],
  },
  {
    key: 1,
    text: '소개',
    path: '/introduce/',
    link: '/introduce/vision',
    subMenu: [
      {
        text: '미션&비전',
        link: '/introduce',
      },
      {
        text: '기관 소개',
        link: '/introduce',
      },
      {
        text: '해외지사 소개',
        link: '/introduce',
      },
      {
        text: '홍보 대사',
        link: '/introduce',
      },
      {
        text: '채용',
        link: '/introduce',
      },
    ],
  },
  {
    key: 2,
    text: '소식',
    path: `/tidings/`,
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
    path: `/invite/`,
    link: '/invite',
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
    path: '/media/',
    link: '/media',
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

const MainHeader = () => {
  const [depthActive, setDepthActive] = useState(false); // 2depth 활성여부
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const resizeSetting = () => {
      if (window.innerWidth >= 1024) {
        setBurger(false);
      }
    };
    window.addEventListener('resize', resizeSetting);
    return () => {
      window.removeEventListener('resize', resizeSetting);
    };
  }, []);

  return (
    <header
      className={`px-20 ${burger ? 'fixed top-0 max-lg:bg-primary-500' : ''} z-10 flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat max-lg:border-b-2 max-lg:border-grey-100 max-lg:px-20`}
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
