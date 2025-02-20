// 개발중인 컴포넌트입니다.

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import TidingsBroadcastCard from './tidingsBroadcastCard';
import DefaultInput from '@/components/common/defaultInput';

const TidingsBroadcast = () => {
  const location = useLocation();
  const [findedMockupData, setFindedMockupData] = useState([]); // 목업데이터
  const [searchText, setSearchText] = useState(''); // 검색어 텍스트

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  const mockupExport = mockupData.filter(item => {
    return location.pathname.includes(item?.path);
  });
  const mockupExportedData = mockupExport?.[0]?.data;

  // init
  useEffect(() => {
    setFindedMockupData(mockupExportedData);
  }, [location]);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start pb-160 max-lg:pb-60`}
    >
      <div className={`w-full max-w-1200`}>
        <div
          className={`flex w-full items-center justify-end pb-24 pt-40 max-lg:px-16 max-lg:py-0`}
        >
          <DefaultInput
            placeholder='검색어를 입력해 주세요.'
            textClearBtn={true}
            inputText={searchText}
            setInputText={setSearchText}
          />
        </div>
        {findedMockupData?.map((item, key) => (
          <TidingsBroadcastCard key={key} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TidingsBroadcast;
