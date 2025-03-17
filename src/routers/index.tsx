// 훅
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 페이지
import DefaultLayer from '@/layouts/defaultLayer';
// 홈
import HomePage from '@/pages/home/page';
import SubscribePaymentPage from '@/pages/subscribePayment/page';
// 후원
import IntroducesupportPage from '@/pages/introducesupport/main/page';
import IntroducesupportAnniversaryPage from '@/pages/introducesupport/anniversary/page';
import IntroducesupportOverseasPage from '@/pages/introducesupport/overseas/page';
import IntroducesupportReportPage from '@/pages/introducesupport/report/page';
// 소식
import TidingsBroadcastPage from '@/pages/tidings/broadcast/page';
import TidingsCampaignPage from '@/pages/tidings/campaign/page';
import TidingsMissionPage from '@/pages/tidings/mission/page';
import TidingsSupportPage from '@/pages/tidings/support/page';
import TidingsDetailPage from '@/pages/tidings/detailPage';
// 소개
import IntroduceVisionPage from '@/pages/introduce/vision/page';
import IntroduceOrganizationPage from '@/pages/introduce/organization/page';
import IntroduceWorldwidePage from '@/pages/introduce/worldwide/page';
import IntroduceRecruitPage from '@/pages/introduce/recruit/page';
import IntroduceAmbassadorPage from '@/pages/introduce/ambassador/page';
import RecruitDetailPage from '@/pages/introduce/recruitDetail/page';
// 참여
import ActivityVisitPage from '@/pages/activity/visit/page';
// 고객센터
import CustomerCenterNoticePage from '@/pages/customerCenter/customerCenterNotice/page';
import CustomerCenterNoticeDetailPage from '@/pages/customerCenter/customerCenterNoticeDetail/page';
import CustomerCenterQuestionsPage from '@/pages/customerCenter/customerCenterQuestions/page';
// 시청 안내
import MediaDescriptionPage from '@/pages/mediaCenter/mediaDescription/page';
import PolicyPage from '@/pages/policy/page';

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
        <Route
          path='subscribepayment'
          element={<SubscribePaymentPage />}
        ></Route>

        {/* 후원 */}
        <Route
          path='introducesupport/main'
          element={<IntroducesupportPage />}
        ></Route>
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
        <Route
          path='introduce/organization/:subDepth'
          element={<IntroduceOrganizationPage />}
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

        {/* 참여 */}
        <Route path='activity/visit' element={<ActivityVisitPage />}></Route>

        {/* 시청안내 */}
        <Route
          path='mediacenter/description'
          element={<MediaDescriptionPage />}
        ></Route>

        {/* 고객센터 */}
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

        {/* 이용 약관 */}
        <Route path='policy/:subDepth' element={<PolicyPage />}></Route>
      </Route>
    </Routes>
  );
}
