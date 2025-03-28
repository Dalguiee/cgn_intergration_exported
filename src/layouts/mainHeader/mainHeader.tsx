// 훅
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 컴포넌트
import TopHeader from '@/layouts/mainHeader/topHeader';
import BottomHeader from '@/layouts/mainHeader/bottomHeader';
import DepthBackground from '@/layouts/mainHeader/depthBackground';
import MoBottomHeader from '@/layouts/mainHeader/moBottomHeader';
import MoBurgerSubMenu from '@/layouts/mainHeader/moBurgerSubMenu';
import ResponsiveScanner from '@/components/common/responsiveScanner';
import ScrollTopScanner from '@/components/common/scrollTopScanner';
import ScrollDirectionScanner from '@/components/common/scrollDirectionScanner';
import MainHeaderTopBanner from '@/layouts/mainHeader/mainHeaderTopBanner';

// pc 버전일때 사용되는 DepthBackground, topHeader botomHeader 가 있으며,
// 모바일 버전에서 사용되는 burderSubMenu 와 mobileBottom 으로 나뉘어 있습니다
// burger 는 모바일로 노출되는 상단 버거 메뉴를 누를 경우 active 를 전환시키는 역할을 하는 boolean 값입니다.
// depthActive 는 pc 버전에서 글자뒤의 주황색 박스 배경에 해당합니다. 헤더의 글자를 누르면 on , 하단 2depth 컨테이너에서 마우스가 나올 시 off 됩니다.

// 데이터
const centerMenu = [
  {
    key: 0,
    text: '후원안내',
    path: '/donation/',
    link: '/donation/media',
    query: ``,
    subMenu: [
      {
        text: '미디어선교 후원',
        link: '/donation/media',
        query: ``,
      },
      {
        text: '기념일 후원',
        link: '/donation/anniversary',
        query: ``,
      },
      // {
      //   text: '교회/기업 후원',
      //   link: '/donation/legacy',
      //   query: ``
      // },
      // {
      //   text: '유산 후원',
      //   link: '/donation/unknown',
      //   query: ``
      // },
      {
        text: '해외지사 후원',
        link: '/donation/global',
        query: ``,
      },
      {
        text: '후원내역 보고',
        link: '/donation/report',
        query: ``,
      },
    ],
  },
  {
    key: 1,
    text: '소개',
    path: '/about/',
    link: '/about/mission',
    query: ``,
    subMenu: [
      {
        text: '미션&비전',
        link: '/about/mission',
        query: ``,
      },
      {
        text: '기관 소개',
        link: '/about/organization',
        query: ``,
      },
      {
        text: '해외지사 소개',
        link: '/about/branch',
        query: ``,
      },
      {
        text: '홍보대사',
        link: '/about/ambassador',
        query: ``,
      },
      {
        text: '채용',
        link: '/about/recruit',
        query: ``,
      },
    ],
  },
  {
    key: 2,
    text: '소식',
    path: `/news/`,
    link: '/news/campaign',
    query: ``,
    subMenu: [
      {
        text: '캠페인/이벤트',
        link: '/news/campaign',
        query: ``,
      },
      {
        text: '선교 스토리',
        link: '/news/story',
        query: ``,
      },
      {
        text: '후원 스토리',
        link: '/news/supporter',
        query: ``,
      },
      {
        text: '보도 자료',
        link: '/news/press',
        query: ``,
      },
      // {
      //   text: '외부 소식',
      //   link: '/news/partner',
      //   query: ``
      // },
      // {
      //   text: '매거진',
      //   link: '/news/magazine',
      //   query: ``
      // },
    ],
  },
  {
    key: 3,
    text: '참여',
    path: `/participate/`,
    link: '/participate/event',
    query: ``,
    subMenu: [
      // {
      //   text: '중보기도 신청',
      //   link: '/activity/intercessoryprayer',
      //   query: ``
      // },
      // {
      //   text: '자원봉사단 신청',
      //   link: '/activity/serviceteam',
      //   query: ``
      // },
      {
        text: '행사/견학 신청',
        link: '/participate/event',
        query: ``,
      },
    ],
  },
  {
    key: 4,
    text: '시청안내',
    path: '/media/',
    link: '/media/guide',
    query: `action=0`,
    subMenu: [
      {
        text: '퐁당 웹/앱/스마트TV',
        link: '/media/guide',
        query: `action=0`,
      },
      {
        text: '케이블/IPTV',
        link: '/media/guide',
        query: `action=1`,
      },
      {
        text: '위성',
        link: '/media/guide',
        query: `action=2`,
      },
      {
        text: '소셜&오픈 플랫폼',
        link: '/media/guide',
        query: `action=3`,
      },
    ],
  },
];

// 하얀 헤더 배경 pathname 리스트
const whiteModeList = [
  `/home`,
  // `/offermore`,
  `/customer/faq`,
  `/customer/notice`,
  `/media/guide`,
  `/customer/notice/detail`,
];

const MainHeader = () => {
  const location = useLocation();
  const [depthActive, setDepthActive] = useState(false); // 2depth 활성여부
  const [burger, setBurger] = useState(false);
  const [whiteMode, setWhiteMode] = useState(false);
  // 탑배너 여부
  const [headerTopBannerAvailable, setHeaderTopBannerAvailable] =
    useState(false);
  // 커스텀 훅
  const mobile = ResponsiveScanner(`(max-width: 1024px)`);
  const scrollTopStatus = ScrollTopScanner();
  const scrollDirection = ScrollDirectionScanner();

  useEffect(() => {
    setWhiteMode(false);
    whiteModeList?.forEach(list => {
      if (location?.pathname?.includes(list)) {
        setWhiteMode(true);
      }
    });
  }, [location?.pathname]);

  // 2depth 활성화
  useEffect(() => {
    if (mobile === false) {
      setBurger(false);
    }
  }, [mobile]);

  // 스크롤시 2depth 닫기
  useEffect(() => {
    const depthClose = () => {
      setDepthActive(false);
    };

    window.addEventListener(`scroll`, depthClose);
    return () => {
      window.removeEventListener(`scroll`, depthClose);
    };
  }, [location?.pathname]);

  // 버거 visible 유무
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [burger]);

  return (
    <>
      <MainHeaderTopBanner
        headerTopBannerAvailable={headerTopBannerAvailable}
        setHeaderTopBannerAvailable={setHeaderTopBannerAvailable}
      />
      <div
        style={{
          transition: `0.15s`,
        }}
        className={`${headerTopBannerAvailable ? `h-[calc(128px+140px)] max-lg:h-[calc(58px+88px)]` : `h-[calc(128px)] max-lg:h-[calc(58px)]`} ${whiteMode ? `bg-white-solid` : `bg-primary-50`} ${scrollTopStatus ? `` : `relative !h-0`} w-full`}
      ></div>
      <header
        style={{
          transition: `0.15s`,
        }}
        className={`${burger ? 'max-lg:bg-primary-500' : ''} ${scrollTopStatus ? (headerTopBannerAvailable ? `top-[calc(140px)] max-lg:top-[calc(88px)]` : `top-[calc(0px)]`) : ``} ${headerTopBannerAvailable ? (scrollDirection ? `top-[calc(140px)] max-lg:top-[calc(88px)]` : `top-[calc((-128px)+(-140px))] max-lg:top-[(-58px)+(-88px)]`) : scrollDirection ? `top-[calc(0px)]` : `top-[calc((-128px))] max-lg:top-[(-58px)]`} ${whiteMode ? `bg-white-solid` : `bg-primary-50`} fixed z-[80] flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-20 max-lg:px-24`}
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
            <MoBurgerSubMenu
              headerTopBannerAvailable={headerTopBannerAvailable}
              setBurger={setBurger}
              centerMenu={centerMenu}
            />
          </>
        ) : null}
      </header>
    </>
  );
};

export default MainHeader;
