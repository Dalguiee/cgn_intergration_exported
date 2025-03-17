// 훅
import React from 'react';

// 컴포넌트
import SelectBox from '@/components/common/selectBox';
import { useNavigate } from 'react-router-dom';

const MainFooterMo = ({ linkData, selectedLand, setSelectedLand }) => {
  const navigate = useNavigate();

  return (
    <footer
      className={`hidden w-full flex-col items-center justify-center gap-24 bg-grey-50 px-16 py-32 max-lg:flex`}
    >
      <div className={`flex w-full flex-wrap items-start justify-start gap-4`}>
        <button
          className={`px-12 py-4`}
          onClick={() => {
            navigate(`/customercenter/notice`);
          }}
        >
          <span className={`text-bold14 text-grey-900`}>공지사항</span>
        </button>
        <button
          className={`px-12 py-4`}
          onClick={() => {
            navigate(`/customercenter/questions`);
          }}
        >
          <span className={`text-bold14 text-grey-900`}>FAQ</span>
        </button>
        <button
          className={`px-12 py-4`}
          onClick={() => {
            navigate(`/introduce/recruit`);
          }}
        >
          <span className={`text-bold14 text-grey-900`}>채용</span>
        </button>
        <button
          className={`px-12 py-4`}
          onClick={() => {
            navigate(`/policy/terms`);
          }}
        >
          <span className={`text-regular14 text-grey-900`}>이용 약관</span>
        </button>
        <button
          onClick={() => {
            navigate(`/policy/privacy`);
          }}
          className={`px-12 py-4`}
        >
          <span className={`text-regular14 text-grey-900`}>
            개인정보 처리방침
          </span>
        </button>
      </div>
      <div
        className={`flex w-full flex-wrap items-center justify-between gap-y-12 px-12`}
      >
        <div className={`flex items-center justify-center gap-8`}>
          <button
            className={`flex-shrink-0`}
            onClick={() => {
              window.open(`https://www.fondant.kr`, `_blank`);
            }}
          >
            <img
              className={`h-40 w-40`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/pondang_logo_1.png`}
              width={`40px`}
              height={`40px`}
              alt=''
            />
          </button>
          <button
            className={`flex-shrink-0`}
            onClick={() => {
              window.open(`https://www.youtube.com/@cgn`, `_blank`);
            }}
          >
            <img
              className={`h-40 w-40`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/youtube_logo_1.png`}
              width={`40px`}
              height={`40px`}
              alt=''
            />
          </button>
        </div>
        <div
          className={`flex w-full min-w-150 max-w-217 items-center justify-between`}
        >
          <SelectBox
            selectedItem={selectedLand}
            setSelectedItem={setSelectedLand}
            listData={linkData}
            defaultValue={`해외지사 바로가기`}
            className={`w-full`}
            height={`48`}
            upMode={true}
          />
        </div>
      </div>
      <div className='flex w-full flex-col items-start justify-center px-12'>
        <span className={`text-regular14 text-grey-500`}>
          서울특별시 용산구 서빙고로 269(서빙고동)
        </span>
        <div className='flex'>
          <span className={`text-regular14 mr-12 text-grey-500`}>
            사업자등록번호 : 106-82-11892
          </span>
          <span className={`text-regular14 text-grey-500`}>
            (재)온누리 선교재단
          </span>
        </div>
      </div>
      <div
        className={`flex w-full flex-col items-start justify-center gap-8 px-12`}
      >
        <span className={`text-bold16 text-grey-900`}>대표자 이재훈</span>
        <span className={`text-bold16 text-grey-900`}>
          대표전화 02-796-9800
        </span>
        <span className={`text-bold16 text-grey-900`}>
          이메일 cs@cgnmail.net
        </span>
      </div>
      <div className={`h-1 w-full px-12`}>
        <span
          className={'flex h-full w-full gap-8 border-t-1 border-grey-100'}
        ></span>
      </div>
      <div className={`w-full px-12`}>
        <span className={`text-regular12 text-grey-500`}>
          CopyrightⓒCGN. All Reserved.
        </span>
      </div>
    </footer>
  );
};

export default MainFooterMo;
