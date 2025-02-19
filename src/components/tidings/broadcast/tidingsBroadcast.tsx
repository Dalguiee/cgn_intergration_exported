// 개발중인 컴포넌트입니다.

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { mockupData } from '@/db/mockup';

// 컴포넌트
import TidingsBroadcastCard from './tidingsBroadcastCard';

const TidingsBroadcast = () => {
  const location = useLocation();
  const [findedMockupData, setFindedMockupData] = useState([]);
  const [searchedMockupData, setSearchedMockupData] = useState([]);

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  const mockupExport = mockupData.filter(item => {
    return location.pathname.includes(item?.path);
  });
  const mockupExportedData = mockupExport?.[0]?.data;

  // 불러온 mockUp 데이터를 categorylist 에서 find 연동을 위하여 state 에 한번 넣습니다.
  useEffect(() => {
    setFindedMockupData(mockupExportedData);
  }, [location]);

  const contentFiltering = e => {
    e.preventDefault();
    // 검색 작동
    const findKeyword = e.target.findKeyword.value.toLowerCase();
    if (findKeyword.length > 0) {
      const filteredData = mockupExportedData?.filter(
        item =>
          item?.title?.toLowerCase().includes(findKeyword) ||
          item?.content?.toLowerCase().includes(findKeyword)
      );
      if (filteredData?.length > 0) {
        // 검색결과 있다면 아래 state 로 입력
        setSearchedMockupData(filteredData);
      } else {
        // 결과가 없으므로 데이터 초기화
        alert(`검색 결과가 없습니다.`);
        setSearchedMockupData([]);
      }
    } else {
      // 검색값이 없으므로 데이터 초기화
      setSearchedMockupData([]);
    }
  };

  useEffect(() => {
    console.log(searchedMockupData);
  }, [searchedMockupData]);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start pb-160 max-lg:pb-60`}
    >
      <div className={`w-full max-w-1200`}>
        <div
          className={`flex w-full items-center justify-end px-16 pb-24 pt-40 max-lg:py-0`}
        >
          <form
            onSubmit={e => {
              contentFiltering(e);
            }}
            className={`flex h-56 w-320 items-center justify-between gap-8 rounded-8 border-1 border-grey-200 px-16 max-lg:h-48 max-lg:w-full`}
          >
            <input
              name={`findKeyword`}
              className={`text-regular16 text-grey-400`}
              placeholder='검색어를 입력해 주세요.'
              type='text'
            />
            <button>
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/finder.svg`}
                alt=''
              />
            </button>
          </form>
        </div>

        {searchedMockupData?.length > 0
          ? searchedMockupData?.map((item, key) => (
              <TidingsBroadcastCard key={key} item={item} />
            ))
          : findedMockupData?.map((item, key) => (
              <TidingsBroadcastCard key={key} item={item} />
            ))}
      </div>
    </section>
  );
};

export default TidingsBroadcast;
