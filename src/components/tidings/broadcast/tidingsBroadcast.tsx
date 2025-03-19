// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import TidingsBroadcastCard from '@/components/tidings/broadcast/tidingsBroadcastCard';
import DefaultInput from '@/components/common/defaultInput';
import Pagination from '@/components/common/pagination';
import NoSearchResult from '@/components/common/noSearchResult';

const TidingsBroadcast = () => {
  const location = useLocation();
  const [findedMockupData, setFindedMockupData] = useState([]); // 목업데이터
  const [searchText, setSearchText] = useState(''); // 검색어 텍스트

  // 컨텐츠 항목 10개들이 시작 및 종료 설정, 초기숫자가 나오는 리스트 갯수 index, 페이지네이션 가운데항목에서 event 걸림
  const [listStartNum, setListStartNum] = useState(0);
  const [listEndNum, setListEndNum] = useState(5);

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  const mockupExport = mockupData.filter(item => {
    return location.pathname.includes(item?.path);
  });
  const mockupExportedData = mockupExport?.[0]?.data;

  // init
  useEffect(() => {
    // setFindedMockupData(mockupExportedData);
    setFindedMockupData([]);
  }, [location?.pathname]);

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
        {findedMockupData?.length > 0 ? (
          findedMockupData
            ?.slice(listStartNum, listEndNum)
            ?.map((item, key, all) => (
              <TidingsBroadcastCard key={key} item={item} idx={key} all={all} />
            ))
        ) : (
          <NoSearchResult />
        )}
      </div>
      <Pagination
        className={`${findedMockupData?.length > 0 ? `` : `hidden`}`}
        listData={findedMockupData}
        setListStartNum={setListStartNum}
        setListEndNum={setListEndNum}
        bucketNumber={5}
      />
    </section>
  );
};

export default TidingsBroadcast;
