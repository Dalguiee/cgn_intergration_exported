// 훅
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import SelectBox from '@/components/common/selectBox';

const MainFooterPc = ({ linkData, selectedLand, setSelectedLand }) => {
  const navigate = useNavigate();

  return (
    <footer
      className={`flex h-fit w-full items-center justify-center border-t-1 border-grey-200 bg-white-solid px-20 py-70 max-lg:hidden`}
    >
      <div
        className={`flex h-96 w-full max-w-1560 items-center justify-between`}
      >
        <div className='flex h-full w-full max-w-180 items-start justify-start max-lg:hidden'>
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/footer_logo.png`}
            className='w-76'
            width='76px'
            height='36px'
            alt=''
          />
        </div>

        <div className={`flex flex-col items-start justify-center gap-4`}>
          <div className={`flex justify-between`}>
            <div className={`flex h-48 gap-40`}>
              <button
                onClick={() => {
                  navigate(`/customer/notice`);
                }}
              >
                <span className={`text-bold14`}>공지사항</span>
              </button>
              <button
                onClick={() => {
                  navigate(`/customer/faq`);
                }}
              >
                <span className={`text-bold14`}>FAQ</span>
              </button>
              <button
                onClick={() => {
                  navigate(`/introduce/recruit`);
                }}
              >
                <span className={`text-bold14`}>채용</span>
              </button>
              <button
                onClick={() => {
                  navigate(`/policy/terms`);
                }}
              >
                <span className={`text-regular14`}>이용 약관</span>
              </button>
              <button
                onClick={() => {
                  navigate(`/policy/privacy`);
                }}
              >
                <span className={`text-regular14`}>개인정보 처리방침</span>
              </button>
            </div>
          </div>

          <div className={`flex flex-wrap items-center justify-start gap-8`}>
            <span className={`text-regular14 text-grey-900`}>
              서울특별시 용산구 서빙고로 269(서빙고동)
            </span>
            <span className='h-12 w-1 border-1 border-grey-200'></span>
            <span className={`text-regular14 text-grey-900`}>
              사업자등록번호 : 106-82-11892
            </span>
            <span className='h-12 w-1 border-1 border-grey-200'></span>
            <span className={`text-regular14 text-grey-900`}>
              (재)온누리 선교재단
            </span>
            <span className='h-12 w-1 border-1 border-grey-200'></span>
            <span className={`text-regular14 text-grey-900`}>
              대표자 이재훈
            </span>
            <span className='h-12 w-1 border-1 border-grey-200'></span>
            <span className={`text-regular14 text-grey-900`}>
              이메일 : cs@cgnmail.net
            </span>
            <span className='h-12 w-1 border-1 border-grey-200'></span>
            <span className={`text-regular14 text-grey-900`}>
              대표전화 : 02 - 796 - 9800
            </span>
          </div>
          <div>
            <span className={`text-regular12 text-grey-400`}>
              CopyrightⓒCGN. All Reserved.
            </span>
          </div>
        </div>
        <div className='h-full w-fit'>
          <div className={`flex items-center justify-center`}>
            <div className={`flex items-center justify-center gap-8`}>
              <button
                onClick={() => {
                  window.open(`https://www.fondant.kr`, `_blank`);
                }}
                className={`w-40`}
              >
                <img
                  className={`w-full object-cover`}
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/pondang_logo_1.png`}
                  width='40px'
                  height='40px'
                  alt=''
                />
              </button>
              <button
                onClick={() => {
                  window.open(`https://www.youtube.com/@cgn`, `_blank`);
                }}
                className={`w-40`}
              >
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/youtube_logo_1.png`}
                  className={`w-full object-cover`}
                  width='40px'
                  height='40px'
                  alt=''
                />
              </button>
            </div>
            <div className={`ml-32 flex w-217 items-center justify-between`}>
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
        </div>
      </div>
    </footer>
  );
};

export default MainFooterPc;
