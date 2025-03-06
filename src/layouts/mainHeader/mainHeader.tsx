import { useEffect, useState, useSyncExternalStore } from 'react';

// 컴포넌트
import TopHeader from '@/layouts/mainHeader/topHeader';
import BottomHeader from '@/layouts/mainHeader/bottomHeader';
import DepthBackground from '@/layouts/mainHeader/depthBackground';
import MoBottomHeader from '@/layouts/mainHeader/moBottomHeader';
import MoBurgerSubMenu from '@/layouts/mainHeader/moBurgerSubMenu';
import ResponsiveScanner from '@/components/common/responsiveScanner';

// pc 버전일때 사용되는 DepthBackground, topHeader botomHeader 가 있으며,
// 모바일 버전에서 사용되는 burderSubMenu 와 mobileBottom 으로 나뉘어 있습니다
// burger 는 모바일로 노출되는 상단 버거 메뉴를 누를 경우 active 를 전환시키는 역할을 하는 boolean 값입니다.
// depthActive 는 pc 버전에서 글자뒤의 주황색 박스 배경에 해당합니다. 헤더의 글자를 누르면 on , 하단 2depth 컨테이너에서 마우스가 나올 시 off 됩니다.

const centerMenu = [
  {
    key: 0,
    text: '후원안내',
    path: '/introducesupport/',
    link: '/introducesupport',
    subMenu: [
      {
        text: '미디어선교 후원',
        link: '/introducesupport/support',
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
        link: '/introduce/vision',
      },
      {
        text: '기관 소개',
        link: '/introduce/organization?articleId=0',
      },
      {
        text: '해외지사 소개',
        link: '/introduce/worldwide',
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
        link: '/tidings/broadcast',
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
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);

  // 2depth 활성화
  useEffect(() => {
    if (mobile === false) {
      setBurger(false);
    }
  }, [mobile]);

  // 버거 visible 유무
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [burger]);

  return (
    <header
      className={`px-20 ${burger ? 'fixed top-0 max-lg:bg-primary-500' : 'bg-primary-50'} z-20 flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat max-lg:px-20`}
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
      <DepthBackground
        setDepthActive={setDepthActive}
        depthActive={depthActive}
      />
      {/* 모바일일 경우 버거 */}
      {burger ? (
        <>
          <MoBottomHeader />
          <MoBurgerSubMenu setBurger={setBurger} centerMenu={centerMenu} />
        </>
      ) : null}
    </header>
  );
};

export default MainHeader;
