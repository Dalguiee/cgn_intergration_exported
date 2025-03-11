// 훅
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
import HomePage from '@/pages/home/page';
// 소식
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';
// 소개
import IntroducePage from '@/pages/introduce/vision/page';
import IntroduceOrganizationPage from '@/pages/introduce/organization/page';
// 후원
import IntroducesupportPage from '@/pages/introducesupport/main/page';
import IntroducesupportAnniversaryPage from '@/pages/introducesupport/anniversary/page';
import IntroducesupportOverseasPage from '@/pages/introducesupport/overseas/page';
import IntroducesupportReportPage from '@/pages/introducesupport/report/page';

import IntroduceVisionPage from '@/pages/introduce/vision/page';
import IntroduceWorldwidePage from '@/pages/introduce/worldwide/page';
import IntroduceRecruitPage from '@/pages/introduce/recruit/page';
import RecruitDetailPage from '@/pages/introduce/recruitDetail/page';
import IntroduceAmbassadorPage from '@/pages/introduce/ambassador/page';
import CustomerCenterNoticePage from '@/pages/customerCenter/customerCenterNotice/page';
import CustomerCenterNoticeDetailPage from '@/pages/customerCenter/customerCenterNoticeDetail/page';
import CustomerCenterQuestionsPage from '@/pages/customerCenter/customerCenterQuestions/page';
import SubscribePaymentPage from '@/pages/subscribePayment/page';
import MediaDescriptionPage from '@/pages/mediaCenter/mediaDescription/page';

export default function MainRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  // 홈으로 바인딩
  useEffect(() => {
    if (location?.pathname === `` || location.pathname === `/`) {
      navigate(`/home`);
    }
  }, [location?.pathname]);

  // 팝업에 의한 스크롤 잠김 풀기
  useEffect(() => {
    const scrollRetore = () => {
      document.body.style.overflow = 'auto';
    };

    window?.addEventListener('popstate', scrollRetore);

    return () => window?.removeEventListener('popstate', scrollRetore);
  }, [window?.PopStateEvent]);

  // 페이지 변환시 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        {/* 홈 */}
        <Route path='home' element={<HomePage />}></Route>
        {/* 소식 */}
        <Route
          path='tidings/campaign'
          element={<TidingsCampaignPage />}
        ></Route>
        <Route path='tidings/mission' element={<TidingsMissionPage />}></Route>
        <Route path='tidings/support' element={<TidingsSupportPage />}></Route>
        <Route
          path='tidings/broadcast'
          element={<TidingsBroadcastPage />}
        ></Route>
        <Route
          path='tidings/:subDepth/detail'
          element={<TidingsDetailPage />}
        ></Route>
        {/* 소개 */}
        <Route
          path='introduce/vision'
          element={<IntroduceVisionPage />}
        ></Route>
        <Route
          path='introduce/organization'
          element={<IntroduceOrganizationPage />}
        ></Route>
        {/* 후원 */}
        <Route
          path='introducesupport/main'
          element={<IntroducesupportPage />}
        ></Route>
        {/* <Route
          path='introduce/organization'
          element={<IntroduceOrganizationPage />}
          ></Route> */}

        <Route
          path='introducesupport/anniversary'
          element={<IntroducesupportAnniversaryPage />}
        ></Route>
        <Route
          path='introducesupport/overseas'
          element={<IntroducesupportOverseasPage />}
        ></Route>
        <Route
          path='introducesupport/report'
          element={<IntroducesupportReportPage />}
        ></Route>
        <Route
          path='introduce/worldwide'
          element={<IntroduceWorldwidePage />}
        ></Route>
        <Route
          path='introduce/ambassador'
          element={<IntroduceAmbassadorPage />}
        ></Route>
        <Route
          path='introduce/recruit'
          element={<IntroduceRecruitPage />}
        ></Route>
        <Route
          path='introduce/recruit/detail'
          element={<RecruitDetailPage />}
        ></Route>

        <Route
          path='customercenter/notice'
          element={<CustomerCenterNoticePage />}
        ></Route>
        <Route
          path='customercenter/questions'
          element={<CustomerCenterQuestionsPage />}
        ></Route>

        <Route
          path='customercenter/notice/detail'
          element={<CustomerCenterNoticeDetailPage />}
        ></Route>

        <Route
          path='subscribepayment'
          element={<SubscribePaymentPage />}
        ></Route>

        <Route
          path='mediacenter/description'
          element={<MediaDescriptionPage />}
        ></Route>
      </Route>
    </Routes>
  );
}
