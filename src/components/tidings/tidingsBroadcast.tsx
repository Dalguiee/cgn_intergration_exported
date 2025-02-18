//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중
//개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중개발중

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import TagIcon from '@/components/common/tagBtn';

const TidingsBroadcast = () => {
  // const location = useLocation();
  // const [findedMockupData, setfindedMockupData] = useState([]);

  // // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  // const mockupExport = mockupData.filter(item => {
  //   return item.path.includes(location.pathname);
  // });
  // const mockupExportedData = mockupExport?.[0]?.data;

  // // 불러온 mockUp 데이터를 categorylist 에서 find 연동을 위하여 state 에 한번 넣습니다.
  // useEffect(() => {
  //   setfindedMockupData(mockupExportedData);
  //   console.log('데이터 로딩');
  // }, [location]);

  return <>개발중</>;
  if (!findedMockupData) return <></>;
  return (
    <section className={`flex w-full flex-col items-center justify-start`}>
      <div className={`w-full max-w-1200`}>
        <div>
          {findedMockupData?.tag?.map((item, key) => (
            <TagIcon id={item.id} mode={item.mode} />
          ))}
        </div>
        {findedMockupData.map(item => (
          <div className={`border-t-2 border-grey-900`}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TidingsBroadcast;
