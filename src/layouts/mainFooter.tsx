import { useNavigate } from 'react-router-dom';

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* pc footer */}
      <footer className='flex h-296 w-full items-center justify-center border-t-1 border-grey-200 bg-white-solid px-20 max-lg:hidden'>
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
                    navigate(`/customercenter/notice`);
                  }}
                >
                  <span className={`text-bold14`}>공지사항</span>
                </button>
                <button>
                  <span className={`text-bold14`}>FAQ</span>
                </button>
                <button>
                  <span className={`text-bold14`}>채용</span>
                </button>
                <button>
                  <span className={`text-regular14`}>이용 약관</span>
                </button>
                <button>
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
                (재) 온누리 선교재단
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
                <button className={`w-40`}>
                  <img
                    className={`w-full object-cover`}
                    src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/pondang_logo_1.png`}
                    width='40px'
                    height='40px'
                    alt=''
                  />
                </button>
                <button className={`w-40`}>
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/youtube_logo_1.png`}
                    className={`w-full object-cover`}
                    width='40px'
                    height='40px'
                    alt=''
                  />
                </button>
              </div>
              <div
                className={`ml-32 flex w-217 items-center justify-between rounded-4 border-1 border-grey-200 px-12 py-12`}
              >
                <span className={`text-regular14 text-grey-400`}>
                  placeholder
                </span>
                <button>
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_under_grey900.svg`}
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* mo footer */}
      <footer
        className={`hidden w-full flex-col items-center justify-center gap-24 bg-grey-50 px-16 py-32 max-lg:flex`}
      >
        <div
          className={`flex w-full flex-wrap items-start justify-start gap-4`}
        >
          <button
            onClick={() => {
              navigate(`/customercenter/notice`);
            }}
          >
            <span className={`text-bold14 px-12 py-4 pr-12 text-grey-900`}>
              공지사항
            </span>
          </button>
          <span className={`text-bold14 px-12 py-4 text-grey-900`}>FAQ</span>
          <span className={`text-bold14 px-12 py-4 text-grey-900`}>채용</span>
          <span className={`text-regular14 px-12 py-4 text-grey-900`}>
            이용 약관
          </span>
          <span className={`text-regular14 px-12 py-4 text-grey-900`}>
            개인정보 처리방침
          </span>
          <span className={`text-regular14 px-12 py-4 text-grey-900`}>
            이메일무단수집거부
          </span>
        </div>
        <div className={`flex w-full items-center justify-between px-12`}>
          <div className={`flex items-center justify-center gap-8`}>
            <img
              className={`h-40 w-40`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/pondang_logo_1.png`}
              width={`40px`}
              height={`40px`}
              alt=''
            />
            <img
              className={`h-40 w-40`}
              src={`${import.meta.env.VITE_PUBLIC_URL}images/logo/youtube_logo_1.png`}
              width={`40px`}
              height={`40px`}
              alt=''
            />
          </div>
          <div
            className={`ml-32 flex h-48 w-217 items-center justify-between rounded-4 border-1 border-grey-200 px-12 py-12`}
          >
            <span className={`text-regular14 text-grey-400`}>placeholder</span>
            <button>
              <img
                className={`h-24 w-24`}
                src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_under_grey900.svg`}
                width={`24px`}
                height={`24px`}
                alt=''
              />
            </button>
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
            Copyright (C) CGN. All right reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
