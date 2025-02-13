import React, { useEffect, useState, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Locator = () => {
  const [changedPathName, setChangedPathName] = useState([]);
  const location = useLocation();
  const pageData = location.pathname.split('/');
  const navigation = useNavigate();

  console.log(location);

  useEffect(() => {
    let pathStack = '';
    let pathBackup = '';
    // 소식 페이지 로케이팅
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
            data = '캠페인 / 이벤트';
            pathStack = 'tidings/campaign';
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
    <section className='flex w-full items-center justify-center'>
      <div className={`flex w-1560 items-center justify-start gap-6`}>
        <button
          onClick={() => {
            navigation('/');
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
