import React, { useEffect, useState } from 'react';
import { mockupData } from '@/db/mockup';
import TidingsCard from './tidingsCard';
import CategoryList from '../common/categoryList';
import { useLocation } from 'react-router-dom';

const TidingsMain = () => {
  const location = useLocation();
  const [findedMockupData, setfindedMockupData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  // 초기 데이터를 불러오고 페이지 경로에 따라 맞는 데이터를 부르는 부분입니다.
  const mockupExport = mockupData.filter(item => {
    return item.path.includes(location.pathname);
  });
  const mockupExportedData = mockupExport[0].data;

  // 불러온 mockUp 데이터를 categorylist 에서 find 연동을 위하여 state 에 한번 넣습니다.
  useEffect(() => {
    setfindedMockupData(mockupExportedData);
    console.log('데이터 로딩');
  }, [location, selectedId]);

  // category list 에서 selectedId 에 따라 filter 연동을 위하여 state 에 update 합니다.
  useEffect(() => {
    if (selectedId === 0) {
      setfindedMockupData(mockupExportedData);
    } else {
      setfindedMockupData(
        mockupExportedData.filter(item => {
          return item.tag.some(obj => obj.id === Number(selectedId));
        })
      );
    }
    console.log('카테고리 데이터 로딩 필터링');
  }, [selectedId]);

  if (!findedMockupData) return <></>;
  return (
    <>
      <CategoryList setSelectedId={setSelectedId} />
      <section
        data-aos='fade-up'
        className={`flex w-full items-center justify-center px-20 pb-0 pb-160 pt-80 max-lg:pb-0 max-lg:pt-0`}
      >
        <div
          className={`grid w-1200 max-w-1560 grid-cols-3 flex-wrap items-start justify-center gap-24 max-lg:grid-cols-1`}
        >
          {findedMockupData?.map(item => (
            <TidingsCard
              key={item.id}
              allData={mockupExportedData}
              item={item}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TidingsMain;
