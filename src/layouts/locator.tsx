import React, { useEffect, useState, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Locator = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [changedPathName, setChangedPathName] = useState([]);

  useEffect(() => {
    let pathStack = '';
    let pathBackup = '';
    const pageData = location.pathname.split('/');
    // 페이지 로케이팅을 담당하는 분기 데이터 입니다.
    if (location.pathname.includes('tidings')) {
      setChangedPathName(
        pageData.map(data => {
          if (data === 'tidings') {
            pathBackup = data;
            data = '소식';
            pathStack = 'tidings/campaign';
          }
          if (data === 'campaign') {
            pathBackup = data;
            data = '캠페인/이벤트';
            pathStack = 'tidings/campaign';
          }
          if (data === 'mission') {
            pathBackup = data;
            data = '선교캠페인';
            pathStack = 'tidings/mission';
          }
          if (data === 'detail') {
            pathBackup = '';
            data = '';
            pathStack = '';
          }

          return { bPath: pathBackup, name: data, path: pathStack };
        })
      );
    }
  }, [location]);

  return (
    <section className='flex w-full items-center justify-center px-20 pt-16 max-md:hidden max-md:px-20'>
      <div className={`flex w-1560 items-center justify-start gap-6`}>
        <button
          onClick={() => {
            navigation('/home');
          }}
        >
          <img src='/public/images/icon/home_locator_grey300.svg' alt='' />
        </button>
        {changedPathName.map((item, index) => {
          if (item.name !== '') {
            return (
              <Fragment key={index}>
                <img src='/public/images/icon/arrow_right_grey200.svg' alt='' />
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
