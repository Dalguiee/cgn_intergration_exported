// 훅
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트
import StyledButtons from '@/components/common/styledButtons';

// 데이터
import { homeOnePartedBannersData } from '@/db/mockup';

const HomeOnePartedBanner = ({ mobile }) => {
  const navigate = useNavigate();
  return (
    <div className='flex h-fit w-full items-start justify-center px-16'>
      <div
        className={`flex h-200 w-full max-w-1560 items-center justify-center max-lg:h-128`}
      >
        <div
          style={{
            backgroundImage: `${mobile ? `url(${homeOnePartedBannersData?.[0]?.moSrc})` : `url(${homeOnePartedBannersData?.[0]?.src})`} `,
          }}
          className={`flex h-full w-full items-center justify-center rounded-16 bg-cover bg-center bg-no-repeat px-80 max-lg:items-start max-lg:rounded-8 max-lg:pl-22 max-lg:pr-18 max-lg:pt-31`}
        >
          <div
            className={`flex h-full w-full flex-col justify-center gap-16 px-38 pb-0 max-lg:justify-start max-lg:gap-8 max-lg:px-0 max-lg:py-0`}
          >
            <div className={`flex w-full items-center justify-between`}>
              <p
                className={`text-bold32 max-lg:text-bold18 line-clamp-1 text-grey-900`}
              >
                기념일 후원
              </p>
              <span className={`lg:hidden`}>
                <StyledButtons
                  text={`기념일 후원하기`}
                  className='w-123'
                  formMode={`mode2-r`}
                  colorMode={`mode3`}
                  arrowMode={true}
                  onClick={() => {
                    navigate(`/donation/anniversary`);
                  }}
                />
              </span>
            </div>

            <p
              className={`text-regular18 max-lg:text-regular14 line-clamp-1 text-grey-500`}
            >
              {mobile
                ? `감사함이 가득한 오늘, 후원으로 더욱 특별하게`
                : `감사함이 가득한 오늘, 선교 후원으로 특별하게 기념해보세요.`}
            </p>
          </div>
          <div className={`max-lg:hidden`}>
            <StyledButtons
              text={`기념일 후원하기`}
              className={`w-150 max-lg:w-123`}
              formMode={`mode2-r`}
              colorMode={`mode3`}
              arrowMode={true}
              onClick={() => {
                navigate(`/donation/anniversary`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOnePartedBanner;
