// 훅
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 데이터
import { noticeData } from '@/db/mockup';

// 컴포넌트
import DefaultInput from '@/components/common/defaultInput';
import Pagination from '@/components/common/pagination';

const CustomerCenterNotice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [findedMockupData, setFindedMockupData] = useState([]); // 목업데이터
  const [searchText, setSearchText] = useState(''); // 검색어 텍스트
  // 컨텐츠 항목 10개들이 시작 및 종료 index, 페이지네이션 가운데항목에서 event 걸림
  const [listStartNum, setListStartNum] = useState(0);
  const [listEndNum, setListEndNum] = useState(10);

  // init
  useEffect(() => {
    setFindedMockupData(noticeData);
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
        <div className={`mb-60 w-full border-t-3 border-grey-900`}>
          <table className={`w-full table-fixed`}>
            <colgroup>
              <col className={`w-80`} />
              <col className={`w-full`} />
              <col className={`w-120`} />
            </colgroup>
            <thead className={`border-b-2 border-grey-200`}>
              <tr className={`h-80`}>
                <th>
                  <div>
                    <span>번호</span>
                  </div>
                </th>
                <th>
                  <div>
                    <span>제목</span>
                  </div>
                </th>
                <th>
                  <div>
                    <span>날짜</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {findedMockupData
                ?.slice(listStartNum, listEndNum)
                ?.map((item, key) => (
                  <tr key={key} className={`h-80 border-b-2 border-grey-200`}>
                    <td>
                      <div className={`flex items-center justify-center`}>
                        <span className={`text-regular16 text-grey-500`}>
                          {item?.id}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className={`flex items-center justify-center`}>
                        <button
                          onClick={() => {
                            navigate(
                              `/customercenter/notice/detail?articleId=${item?.id}`
                            );
                          }}
                        >
                          <span className={`text-regular16 text-grey-900`}>
                            {item?.title}
                          </span>
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className={`flex items-center justify-center`}>
                        <span className={`text-regular16 text-grey-400`}>
                          {item?.date}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Pagination
          listData={findedMockupData}
          setListStartNum={setListStartNum}
          setListEndNum={setListEndNum}
        />
      </div>
    </section>
  );
};

export default CustomerCenterNotice;
