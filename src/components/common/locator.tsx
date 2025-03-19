// 헤더 아래 각 페이지 이동할 수 있는 로케이터 입니다.

// 훅
import React, { useEffect, useState, Fragment } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Locator = ({ className = `` }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const { subDepth } = useParams();
  const [changedPathName, setChangedPathName] = useState([]);

  useEffect(() => {
    let pathStack = '';
    let pathPiece = '';
    const pageData = location.pathname.split('/');
    // 페이지 로케이팅을 담당하는 분기 데이터 입니다.

    // 후원
    if (location?.pathname?.includes('/donation/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'donation') {
            pathPiece = data;
            data = '후원안내';
            pathStack = 'donation/mediaMission';
          }
          if (data === 'global') {
            pathPiece = data;
            data = '해외지사 후원';
            pathStack = 'donation/global';
          }
          if (data === 'report') {
            pathPiece = data;
            data = '후원내역 보고';
            pathStack = 'donation/report';
          }
          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 소개
    if (location?.pathname?.includes('/about/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'about') {
            pathPiece = data;
            data = '소개';
            pathStack = 'about/mission';
          }
          if (data === 'mission') {
            pathPiece = data;
            data = '미션&비전';
            pathStack = 'about/mission';
          }
          if (data === 'organization') {
            pathPiece = data;
            data = '기관 소개';
            pathStack = 'about/organization/chairman';
          }
          if (data === 'chairman') {
            pathPiece = data;
            data = `이사장 인사`;
            pathStack = 'about/organization/chairman';
          }
          if (data === 'ceo') {
            pathPiece = data;
            data = `대표 인사`;
            pathStack = 'about/organization/ceo';
          }
          if (data === `people`) {
            pathPiece = data;
            data = `섬기는 분들`;
            pathStack = 'about/organization/people';
          }
          if (data === `history`) {
            pathPiece = data;
            data = `연혁`;
            pathStack = 'about/organization/history';
          }
          if (data === `location`) {
            pathPiece = data;
            data = `오시는 길`;
            pathStack = 'about/organization/location';
          }

          if (data === 'branch') {
            pathPiece = data;
            data = '해외지사 소개';
            pathStack = 'about/branch';
          }
          if (data === 'ambassador') {
            pathPiece = data;
            data = '홍보대사';
            pathStack = 'about/ambassador';
          }

          if (data === 'recruit') {
            pathPiece = data;
            data = '채용';
            pathStack = 'about/recruit';
          }

          if (data === 'detail') {
            pathPiece = `recruit`;
            data = '';
            pathStack = `about/recruit`;
          }

          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 소식
    if (location?.pathname?.includes('/news/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'news') {
            pathPiece = data;
            data = '소식';
            pathStack = 'news/campaign';
          }
          if (data === 'campaign') {
            pathPiece = data;
            data = '캠페인/이벤트';
            pathStack = 'news/campaign';
          }
          if (data === 'story') {
            pathPiece = data;
            data = '선교스토리';
            pathStack = 'news/story';
          }
          if (data === 'supporter') {
            pathPiece = data;
            data = `후원 스토리`;
            pathStack = `news/supporter`;
          }
          if (data === 'press') {
            pathPiece = data;
            data = `보도 자료`;
            pathStack = `news/press`;
          }

          if (data === 'detail') {
            pathPiece = subDepth;
            data = '';
            pathStack = `news/${subDepth}`;
          }

          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 참여
    if (location?.pathname?.includes('/participate/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'participate') {
            pathPiece = data;
            data = '참여';
            pathStack = 'participate/event';
          }
          if (data === 'event') {
            pathPiece = data;
            data = '행사/견학 신청';
            pathStack = 'participate/event';
          }

          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 시청 안내
    if (location?.pathname?.includes('/media/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'media') {
            pathPiece = data;
            data = '시청안내';
            pathStack = 'media/guide';
          }
          if (data === 'guide') {
            pathPiece = data;
            data = '퐁당 웹/앱/스마트TV';
            pathStack = 'media/guide';
          }

          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 약관
    if (location?.pathname?.includes('/policy/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'policy') {
            pathPiece = data;
            data = '약관';
            pathStack = 'policy/terms';
          }
          if (data === 'terms') {
            pathPiece = data;
            data = '이용 약관';
            pathStack = 'policy/terms';
          }
          if (data === 'privacy') {
            pathPiece = data;
            data = '개인정보 처리방침';
            pathStack = `policy/privacy`;
          }
          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }

    // 고객 센터
    if (location?.pathname?.includes('/customer/')) {
      setChangedPathName(
        pageData?.map(data => {
          if (data === 'customer') {
            pathPiece = data;
            data = '고객 센터';
            pathStack = 'customer/notice';
          }
          if (data === 'notice') {
            pathPiece = data;
            data = '공지 사항';
            pathStack = 'customer/notice';
          }
          if (data === 'faq') {
            pathPiece = data;
            data = '자주 묻는 질문';
            pathStack = `customer/faq`;
          }
          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }
  }, [location?.pathname]);

  return (
    <section
      className={`${className && className} flex w-full items-center justify-center px-20 pt-16 max-lg:hidden max-lg:px-20`}
    >
      <div className={`flex w-1560 items-center justify-start gap-6`}>
        <button
          onClick={() => {
            navigation('/home');
          }}
        >
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/home_locator_grey300.svg`}
            alt=''
          />
        </button>
        {changedPathName?.map((item, index) => {
          if (item?.name !== '') {
            return (
              <Fragment key={index}>
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_right_grey200.svg`}
                  alt=''
                />
                <button
                  className={`text-grey-400 ${item.bPath === changedPathName[changedPathName.length - 1].bPath ? 'text-grey-900' : ''} text-regular14`}
                  onClick={() => {
                    navigation(`/${item.path}`);
                  }}
                >
                  {item.name}
                </button>
              </Fragment>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Locator;
