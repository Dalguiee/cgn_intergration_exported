const MainFooter = () => {
  return (
    <footer className='flex h-296 w-full items-center justify-center bg-white-solid'>
      <div className={`flex h-96 w-1560 items-center justify-center`}>
        <div className='flex h-full w-180 items-start justify-start max-lg:absolute max-md:hidden'>
          <img
            src='/public/images/logo/footer_logo.png'
            className='h-36 w-76'
            width='76px'
            height='36px'
            alt=''
          />
        </div>

        <div className={`flex flex-col items-start justify-center gap-4`}>
          <div className={`flex w-1380 justify-between`}>
            <div className={`flex h-48 gap-40`}>
              <button>
                <span className={`text-bold14`}>공지사항</span>
              </button>
              <button>
                <span className={`text-bold14`}>FAQ</span>
              </button>
              <button>
                <span className={`text-bold14`}>채용</span>
              </button>
              <button>
                <span className={`text-regular14`}>이용약관</span>
              </button>
              <button>
                <span className={`text-regular14`}>개인정보 처리 방침</span>
              </button>
            </div>
            <div className={`flex items-center justify-center`}>
              <div className={`flex items-center justify-center gap-8`}>
                <button>
                  <img
                    src='/public/images/logo/pondang_logo_1.png'
                    width='40px'
                    height='40px'
                    alt=''
                  />
                </button>
                <button>
                  <img
                    src='/public/images/logo/youtube_logo_1.png'
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
                    src='/public/images/icon/arrow_under_grey900.svg'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-center gap-8`}>
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
      </div>
    </footer>
  );
};

export default MainFooter;
