// 훅
import { useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';

// 컴포넌트
import TagIcon from '@/components/common/tagIcon';
import StyledButtons from '@/components/common/styledButtons';

// 데이터
import { recruitData } from '@/db/mockup';
const recruitStepData = [
  {
    id: 0,
    text: `서류전형`,
  },
  {
    id: 1,
    text: `1차 면접<br />(실무부서)`,
  },
  {
    id: 2,
    text: `2차 면접<br />(임원(대표))`,
  },
  {
    id: 3,
    text: `합격통보`,
  },
  {
    id: 4,
    text: `입사`,
  },
];

const RecruitDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const queryData = Object.fromEntries(querySearch);
  const [currentData, setCurrentData] = useState([]);

  // 제출양식 다운로드
  const documentDownload = () => {
    const url = `${import.meta.env.VITE_PUBLIC_URL}data/recruit_data.hwp`;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CGN_new_resume_form_2023.hwp'; // 다운로드할 파일 이름
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // query 추적하여 기사 load
  useEffect(() => {
    const result = recruitData?.filter(
      item => item?.id == Number(queryData?.articleId)
    );
    if (result?.length > 0) {
      setCurrentData(result?.[0]);
    }
  }, [location?.pathname]);

  // 맨 위로 스크롤 올림
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      className={`flex w-full flex-col items-center justify-center px-20 pb-160 pt-40 max-lg:mb-0 max-lg:px-20 max-lg:py-0`}
    >
      <div className='w-full max-w-1200'>
        {/* 상단 헤더 */}
        <div
          className={`flex items-center justify-between border-b-1 border-t-3 border-grey-900 px-4 py-24 max-lg:flex-col max-lg:items-start max-lg:gap-8 max-lg:border-b-1 max-lg:border-t-0 max-lg:border-b-grey-100 max-lg:px-0 max-lg:pb-16 max-lg:pt-24`}
        >
          <div className={`flex justify-center gap-16`}>
            {currentData?.tag?.map((obj, key) => {
              if (obj?.id !== 1 && obj?.id !== 3) {
                return (
                  <div key={key} className={`h-full max-lg:hidden`}>
                    <TagIcon
                      text={obj?.text}
                      id={obj?.id}
                      mode={obj?.mode}
                      key={key}
                    />
                  </div>
                );
              }
            })}
            <span className={`text-bold24 line-clamp-1 text-grey-900`}>
              {currentData?.title}
            </span>
          </div>
          <div
            className={`text-regular14 ml-40 flex w-fit items-center justify-center gap-8 whitespace-nowrap text-grey-900 max-lg:ml-0`}
          >
            <span className={`text-bold14 max-lg:w-72`}>
              {currentData?.recruitType}
            </span>
            <span
              className={`h-13 border-l-1 border-grey-200 max-lg:hidden`}
            ></span>
            <span className={`max-lg:text-grey-500`}>
              {currentData?.startDate}~{currentData?.endDate}
            </span>
            <span></span>
          </div>
        </div>
        {/* 본문영역 */}
        <div
          className={`flex flex-col-reverse items-start justify-center py-60 max-lg:flex-col max-lg:pb-0 max-lg:pt-0`}
        >
          {/* <div className={`w-full`}>
            <SwiperSec currentData={currentData} />
          </div> */}
          <div className={`mb-16 w-full max-lg:mb-0 max-lg:mt-24`}>
            <div
              className={`mb-24 flex items-center justify-between max-lg:mt-0`}
            >
              <span
                className={`text-bold24 max-lg:text-bold16 text-primary-500`}
              >
                모집내용
              </span>
              <StyledButtons
                text={`제출 서류 다운로드`}
                formMode={`mode2`}
                colorMode={`mode3`}
                className={`w-197 max-lg:w-153`}
                downloadMode={true}
                onClick={() => {
                  documentDownload();
                }}
              />
            </div>
            {/* 테이블 영역 pc */}
            <section className={`mb-40 w-full max-lg:hidden`}>
              <table className={`w-full table-fixed`}>
                <colgroup>
                  <col className={`w-160`} />
                  <col className={`w-360`} />
                  <col className={`w-160`} />
                  <col className={`w-full`} />
                </colgroup>
                <thead className={`h-80 bg-primary-100`}>
                  <tr className={`border-b-1 border-t-1 border-grey-900`}>
                    <th scope='col' className={`border-r-1 border-grey-900`}>
                      부서
                    </th>
                    <th scope='col' className={`border-r-1 border-grey-900`}>
                      담당업무
                    </th>
                    <th scope='col' className={`border-r-1 border-grey-900`}>
                      모집인원
                    </th>
                    <th scope='col'>자격요건</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.details?.map((obj, key) => (
                    <tr
                      className={`min-h-182 border-b-1 border-grey-900 bg-white-solid`}
                      key={key}
                    >
                      <td className={`border-r-1 border-grey-900`}>
                        <div
                          className={`flex flex-col items-center justify-center px-24 py-36`}
                        >
                          {obj?.center?.map((centerItem, centerIdx) => (
                            <span
                              className={`text-bold16 text-grey-900`}
                              key={centerIdx}
                            >
                              {centerItem}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className={`border-r-1 border-grey-900`}>
                        <div
                          className={`flex flex-col items-center justify-center px-24 py-36`}
                        >
                          <span className={`text-regular16 text-grey-900`}>
                            {obj?.workType}
                          </span>
                        </div>
                      </td>
                      <td className={`border-r-1 border-grey-900`}>
                        <div
                          className={`flex items-center justify-center px-24`}
                        >
                          <span className={`text-regular16 text-grey-900`}>
                            {obj?.amount}
                          </span>
                          <span className={`text-regular16 text-grey-900`}>
                            명
                          </span>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`flex flex-col items-center justify-center px-24 py-36`}
                        >
                          <span className={`text-regular16 text-grey-900`}>
                            {obj?.qualifications}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 테이블 영역 모바일 */}
            <section className={`w-full lg:hidden`}>
              {currentData?.details?.map((item, idx) => (
                <div
                  key={idx}
                  className={`mb-24 flex flex-col items-center justify-start gap-16 border-b-1 border-grey-900`}
                >
                  <div className={`w-full`}>
                    <div
                      className={`flex items-center justify-center border-b-1 border-t-1 border-grey-900 bg-primary-100 px-24 py-8`}
                    >
                      <span className={`text-bold14 text-grey-900`}>부서</span>
                    </div>
                    <div
                      className={`flex items-center justify-center bg-white-solid px-24 py-8`}
                    >
                      {item?.center?.map((centerObj, centerIdx) => (
                        <span
                          className={`text-bold16 text-grey-900`}
                          key={centerIdx}
                        >
                          {centerObj}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`w-full`}>
                    <div
                      className={`flex items-center justify-center border-t-1 border-grey-900 bg-primary-100 px-24 py-8`}
                    >
                      <span className={`text-bold14 text-grey-900`}>
                        담당업무
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center bg-white-solid px-24 py-8`}
                    >
                      <span className={`text-regular14 text-grey-900`}>
                        {item?.workType}
                      </span>
                    </div>
                  </div>
                  <div className={`w-full`}>
                    <div
                      className={`flex items-center justify-center border-t-1 border-grey-900 bg-primary-100 px-24 py-8`}
                    >
                      <span className={`text-bold14 text-grey-900`}>
                        모집인원
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center bg-white-solid px-24 py-8`}
                    >
                      <span className={`text-regular14 text-grey-900`}>
                        {item?.amount}명
                      </span>
                    </div>
                  </div>
                  <div className={`w-full`}>
                    <div
                      className={`flex items-center justify-center border-t-1 border-grey-900 bg-primary-100 px-24 py-8`}
                    >
                      <span className={`text-bold14 text-grey-900`}>
                        자격요건
                      </span>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center bg-white-solid px-24 py-8`}
                    >
                      <span className={`text-regular14 text-grey-900`}>
                        {item?.qualifications}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* 하단 텍스트 영역 */}
            <div className={`w-full`}>
              <div className={`mb-40 max-lg:mb-24`}>
                <p
                  className={`text-bold24 max-lg:text-bold16 mb-24 text-primary-500 max-lg:mb-16`}
                >
                  공통 지원자격 및 우대사항
                </p>
                <div className={``}>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ①기독교 세례교인
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ②해외여행 결격 사유가 없는 자, 남자는 병력필 또는 면제자
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ③국가보훈대상자 및 장애인은 증빙서 제출시 관계법에 의해 우대
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ④제작PD분야 포트폴리오 필수제출
                  </p>
                </div>
              </div>
              <div className={`mb-40 max-lg:mb-24`}>
                <p
                  className={`text-bold24 max-lg:text-bold16 mb-24 text-primary-500 max-lg:mb-16`}
                >
                  지원 방법 및 제출서류
                </p>
                <div>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ①지원기간: ~채용시까지
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ②지원방법: 이메일 접수
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ③제출서류: 자사양식(이력서, 자기소개서,신앙고백서 각 1부)
                  </p>
                  <p
                    className={`text-regular18 max-lg:text-regular14 text-grey-500 max-lg:text-grey-900`}
                  >
                    ④기타 <br />- 자사양식 외 양식으로 제출할 경우, 심사대상에서
                    제외
                  </p>
                </div>
              </div>
              <div className={`max-lg:mb-24`}>
                <p
                  className={`text-bold24 max-lg:text-bold16 mb-24 text-primary-500 max-lg:mb-16`}
                >
                  진행방법
                </p>
                <div
                  className={`flex w-full flex-col items-end justify-start max-lg:items-start`}
                >
                  <div
                    className={`flex items-center justify-center gap-24 max-lg:flex-wrap max-lg:gap-7`}
                  >
                    {recruitStepData?.map((item, idx) => (
                      <Fragment key={idx}>
                        <div
                          className={`flex h-175 w-175 flex-col items-center justify-center rounded-999 bg-white-solid max-lg:h-82 max-lg:w-82`}
                        >
                          <span
                            className={`text-regular18 max-lg:text-regular14 text-center text-grey-700`}
                          >
                            {HTMLReactParser(item?.text)}
                          </span>
                        </div>
                        {item?.id === 4 ? (
                          ``
                        ) : (
                          <img
                            className={`h-32 w-32`}
                            src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/arrow_bar_right_grey200.svg`}
                            alt='오른쪽화살표'
                            width={32}
                            height={32}
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <div
                    className={`text-regular16 max-lg:text-regular12 mt-10 flex flex-col items-start justify-start text-grey-500 max-lg:mt-20`}
                  >
                    <p>※서류 합격자에 한해 면접일정은 개별 통보합니다.</p>
                    <p>
                      ※1년 이상 채용에 한해 2개월의 시용 평가 기간이 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`mb-40 max-lg:mb-24`}>
                <p
                  className={`text-bold24 max-lg:text-bold16 mb-24 text-primary-500 max-lg:mb-16`}
                >
                  신청접수
                </p>
                <div
                  className={`flex items-start justify-start max-lg:flex-col max-lg:gap-6`}
                >
                  <span className={`text-regular16 mr-24 text-grey-900`}>
                    운영관리팀
                  </span>
                  <p
                    className={`text-regular16 flex items-center justify-start text-grey-900`}
                  >
                    <img
                      className={`h-24 w-24 object-cover`}
                      src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/call_primary_500.svg`}
                      alt=''
                      width={24}
                      height={24}
                    />
                    02-3275-9214
                  </p>
                  <p
                    className={`text-regular16 flex items-center justify-start text-grey-900`}
                  >
                    <img
                      className={`h-24 w-24 object-cover`}
                      src={`${import.meta.env.VITE_PUBLIC_URL}images/icon/post_secondary_pink.svg`}
                      alt=''
                      width={24}
                      height={24}
                    />
                    cgntv_hr@naver.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 돌아가기 버튼영역 */}
        <div
          className={`flex w-full items-start justify-center max-lg:mt-24 max-lg:justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/about/recruit`);
            }}
            className={`mt-60 flex h-64 w-full max-w-300 items-center justify-center rounded-8 bg-primary-500 max-lg:mb-60 max-lg:mt-0 max-lg:h-52`}
          >
            <span className={`text-bold24 text-white-solid`}>목록</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecruitDetail;
