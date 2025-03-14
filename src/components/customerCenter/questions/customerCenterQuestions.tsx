// 훅
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터
import { questionsData } from '@/db/mockup';
const categoryName = [
  {
    id: 0,
    value: `전체`,
  },
  { id: 1, value: `후원` },
  { id: 2, value: `기부금 영수증` },
  { id: 3, value: `드림온 안테나` },
  { id: 4, value: `기타` },
];

// 컴포넌트
import DefaultInput from '@/components/common/defaultInput';
import Pagination from '@/components/common/pagination';
import SelectBox from '@/components/common/selectBox';

const CustomerCenterQuestions = () => {
  const location = useLocation();
  const [findedMockupData, setFindedMockupData] = useState([]); // 목업데이터
  const [searchText, setSearchText] = useState(''); // 검색어 텍스트
  // 컨텐츠 항목 10개들이 시작 및 종료 index, 페이지네이션 가운데항목에서 event 걸림
  const [listStartNum, setListStartNum] = useState(0);
  const [listEndNum, setListEndNum] = useState(10);

  // 선택박스 항목
  const listData = [
    {
      id: 0,
      text: '전체',
      value: 1,
    },
    { id: 1, text: '후원', value: 2 },
    { id: 1, text: '기부금 영수증', value: 3 },
    { id: 1, text: '드림온 안테나', value: 4 },
    { id: 1, text: '기타', value: 5 },
  ];

  const [listCategory, setListCategory] = useState([]);
  const [listOpen, setListOpen] = useState(null);

  const listTypeFind = categoryId => {
    return categoryName?.find(item => item?.id === categoryId);
  };

  // init 및 selectBox 통한 데이터 필터링
  useEffect(() => {
    console.log(listCategory?.id);
    if (listCategory?.id === 0) {
      setFindedMockupData(questionsData);
    } else {
      const filteredData = questionsData?.filter(
        item => item?.category === listCategory?.id
      );
      setFindedMockupData(filteredData);
    }
  }, [location, listCategory]);

  return (
    <section
      data-aos='fade-up'
      className={`flex w-full flex-col items-center justify-start pb-160 max-lg:px-16 max-lg:pb-60`}
    >
      <div className={`w-full max-w-1200`}>
        <div
          className={`flex w-full items-start justify-between pb-24 pt-80 max-lg:mt-24 max-lg:gap-8 max-lg:py-10`}
        >
          <SelectBox
            listData={listData}
            selectedItem={listCategory}
            setSelectedItem={setListCategory}
            className='w-full max-w-290 max-lg:max-w-129'
          />
          <DefaultInput
            placeholder='검색어를 입력해 주세요.'
            textClearBtn={true}
            inputText={searchText}
            setInputText={setSearchText}
            className={`max-lg:w-full max-lg:rounded-4`}
          />
        </div>
        <div
          className={`mb-60 w-full border-t-3 border-grey-900 max-lg:border-t-1`}
        >
          <table className={`w-full table-fixed`}>
            <colgroup>
              <col className={`w-80 max-lg:w-24`} />
              <col className={`w-full`} />
            </colgroup>
            <thead className={`border-b-2 border-grey-200 max-lg:hidden`}>
              <tr className={`h-80`}>
                <th>
                  <div>
                    <span className={`text-bold18 text-grey-900`}>구분</span>
                  </div>
                </th>
                <th>
                  <div>
                    <span className={`text-bold18 text-grey-900`}>제목</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {findedMockupData
                ?.slice(listStartNum, listEndNum)
                ?.map((item, idx) => (
                  <>
                    <tr
                      style={{ transition: `0.5s` }}
                      onClick={() => {
                        if (listOpen === idx) {
                          setListOpen(null);
                        } else {
                          setListOpen(idx);
                        }
                      }}
                      key={idx}
                      className={`h-fit cursor-pointer`}
                    >
                      <td>
                        <div
                          style={{ transition: `0.5s` }}
                          className={`${listOpen === idx ? `mt-16` : ``} flex w-full items-center justify-center py-24 max-lg:py-16`}
                        >
                          <span
                            className={`text-regular16 max-lg:text-bold12 text-grey-500`}
                          >
                            {listTypeFind(item?.category)?.value
                              ? listTypeFind(item?.category)?.value
                              : `전체`}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{ transition: `0.5s` }}
                          className={`${listOpen === idx ? `mt-16` : ``} flex w-full items-center justify-between py-24 pl-40 pr-24 max-lg:py-16 max-lg:pl-16 max-lg:pr-0`}
                        >
                          <span
                            className={`text-regular16 line-clamp-1 text-grey-900`}
                          >
                            {item?.title}
                          </span>
                          <img
                            width={32}
                            height={32}
                            style={{ transition: `0.5s` }}
                            className={`${listOpen === idx ? `rotate-[-180deg]` : `rotate-0`} pointer-events-none h-32 w-32 transform select-none object-contain max-lg:h-24 max-lg:w-24`}
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_under_grey900.svg`}
                            alt=''
                          />
                        </div>
                      </td>
                    </tr>
                    <tr
                      style={{ transition: `0.5s` }}
                      className={`${listOpen === idx ? `` : `pointer-events-none select-none`} h-fit border-b-2 border-grey-100`}
                    >
                      <td colSpan={2}>
                        <div
                          style={{ transition: `0.5s` }}
                          className={`${listOpen === idx ? `py-40 max-lg:mb-16 max-lg:py-24` : `pointer-events-none h-0 select-none py-0`} flex w-full items-center justify-start overflow-hidden bg-grey-50 pl-120 scrollbar-hide max-lg:px-16`}
                        >
                          <span
                            style={{ transition: `0.5s` }}
                            className={`${listOpen === idx ? `opacity-100` : `pointer-events-none select-none opacity-0`} text-regular16 max-lg:text-regular14 whitespace-pre-line text-grey-900 max-lg:text-grey-500`}
                          >
                            {item?.text}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
        <Pagination
          listData={findedMockupData}
          setListStartNum={setListStartNum}
          setListEndNum={setListEndNum}
          className={`max-lg:hidden`}
        />
      </div>
    </section>
  );
};

export default CustomerCenterQuestions;
