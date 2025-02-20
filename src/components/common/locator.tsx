// 헤더 아래 각 페이지 이동할 수 있는 로케이터 입니다.

import React, { useEffect, useState, Fragment } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Locator = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { subDepth } = useParams();
  const [changedPathName, setChangedPathName] = useState([]);

  useEffect(() => {
    let pathStack = '';
    let pathPiece = '';
    const pageData = location.pathname.split('/');
    // 페이지 로케이팅을 담당하는 분기 데이터 입니다.
    if (location.pathname.includes('/tidings/')) {
      setChangedPathName(
        pageData.map(data => {
          if (data === 'tidings') {
            pathPiece = data;
            data = '소식';
            pathStack = 'tidings/campaign';
          }
          if (data === 'campaign') {
            pathPiece = data;
            data = '캠페인/이벤트';
            pathStack = 'tidings/campaign';
          }
          if (data === 'mission') {
            pathPiece = data;
            data = '선교캠페인';
            pathStack = 'tidings/mission';
          }
          if (data === 'support') {
            pathPiece = data;
            data = `후원스토리`;
            pathStack = `tidings/support`;
          }
          if (data === 'broadcast') {
            pathPiece = data;
            data = `보도 자료`;
            pathStack = `tidings/broadcast`;
          }

          if (data === 'detail') {
            pathPiece = subDepth;
            data = '';
            pathStack = `tidings/${subDepth}`;
          }

          return { bPath: pathPiece, name: data, path: pathStack };
        })
      );
    }
  }, [location]);

  return (
    <section className='flex items-center justify-center w-full px-20 pt-16 max-lg:hidden max-lg:px-20'>
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
