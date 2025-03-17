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
    link: '/donation/mediaMission',
    subMenu: [
      {
        text: '미디어선교 후원',
        link: '/donation/mediaMission',
      },
      {
        text: '기념일 후원',
        link: '/donation/anniversary',
      },
      // {
      //   text: '교회/기업 후원',
      //   link: '/donation/legacy',
      // },
      // {
      //   text: '유산 후원',
      //   link: '/donation/unknown',
      // },
      {
        text: '해외지사 후원',
        link: '/donation/global',
      },
      {
        text: '후원내역 보고',
        link: '/donation/report',
      },
    ],
  },
  {
    key: 1,
    text: '소개',
    path: '/about-us/',
    link: '/about-us/missionVision',
    subMenu: [
      {
        text: '미션&비전',
        link: '/about-us/missionVision',
      },
      {
        text: '기관 소개',
        link: '/about-us/organization',
      },
      {
        text: '해외지사 소개',
        link: '/about-us/branch',
      },
      {
        text: '홍보대사',
        link: '/about-us/ambassador',
      },
      {
        text: '채용',
        link: '/about-us/recruit',
      },
    ],
  },
  {
    key: 2,
    text: '소식',
    path: `/news/`,
    link: '/news/campaignEvent',
    subMenu: [
      {
        text: '캠페인/이벤트',
        link: '/news/campaignEvent',
      },
      {
        text: '선교 스토리',
        link: '/news/cgnStory',
      },
      {
        text: '후원 스토리',
        link: '/news/supporter',
      },
      {
        text: '보도 자료',
        link: '/news/press',
      },
      // {
      //   text: '외부 소식',
      //   link: '/news/partner',
      // },
      // {
      //   text: '매거진',
      //   link: '/news/magazine',
      // },
    ],
  },
  {
    key: 3,
    text: '참여',
    path: `/participate/`,
    link: '/participate/event',
    subMenu: [
      // {
      //   text: '중보기도 신청',
      //   link: '/activity/intercessoryprayer',
      // },
      // {
      //   text: '자원봉사단 신청',
      //   link: '/activity/serviceteam',
      // },
      {
        text: '행사/견학 신청',
        link: '/participate/event',
      },
    ],
  },
  {
    key: 4,
    text: '시청안내',
    path: '/media/',
    link: '/media/description',
    subMenu: [
      {
        text: '퐁당 웹/앱/스마트TV',
        link: '/media/description',
      },
      {
        text: '케이블/IPTV',
        link: '/media/description',
      },
      {
        text: '위성',
        link: '/media/description',
      },
      {
        text: '소셜&오픈 플랫폼',
        link: '/media/description',
      },
    ],
  },
];

// 하얀 헤더 배경 pathname 리스트
const whiteModeList = [
  `/home`,
  `/subscribepayment`,
  `/customercenter/questions`,
  `/customercenter/notice`,
  `/mediacenter/description`,
  `/customercenter/notice/detail`,
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
        className={`${headerTopBannerAvailable ? `h-[calc(128px+140px)] max-lg:h-[calc(58px+88px)]` : `h-[calc(128px)] max-lg:h-[calc(58px)]`} ${whiteMode ? `bg-white-solid` : `bg-primary-50`} ${scrollTopStatus ? `` : `relative`} w-full`}
      ></div>
      <header
        style={{
          transition: `0.15s`,
        }}
        className={`${burger ? 'max-lg:bg-primary-500' : ''} ${scrollTopStatus ? (headerTopBannerAvailable ? `top-[calc(140px)] max-lg:top-[calc(88px)]` : `top-[calc(0px)]`) : ``} ${headerTopBannerAvailable ? (scrollDirection ? `top-[calc(140px)] max-lg:top-[calc(88px)]` : `top-[calc((-128px)+(-140px))] max-lg:top-[(-58px)+(-88px)]`) : scrollDirection ? `top-[calc(0px)]` : `top-[calc((-128px))] max-lg:top-[(-58px)]`} ${whiteMode ? `bg-white-solid` : `bg-primary-50`} fixed z-[80] flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-20 max-lg:px-20`}
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
