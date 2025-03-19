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
import MaintenancePage from '@/pages/malfunction/maintenance/page';
import OutOfServicePage from '@/pages/malfunction/OutOfService/page';

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
  }, [window?.PopStateEvent, location?.pathname]);

  // 페이지 변환시 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return (
    <Routes>
      <Route path='/*' element={<DefaultLayer />}>
        {/* 홈 */}
        <Route path='' element={<HomePage />}></Route>
        <Route path='home' element={<HomePage />}></Route>

        {/* 증액후원 */}
        <Route path='offermore' element={<SubscribePaymentPage />}></Route>

        {/* 후원안내 */}
        <Route path='donation/media' element={<IntroducesupportPage />}></Route>
        <Route
          path='donation/anniversary'
          element={<IntroducesupportAnniversaryPage />}
        ></Route>
        <Route
          path='donation/global'
          element={<IntroducesupportOverseasPage />}
        ></Route>
        <Route
          path='donation/report'
          element={<IntroducesupportReportPage />}
        ></Route>

        {/* 소개 */}
        <Route path='about/mission' element={<IntroduceVisionPage />}></Route>
        <Route
          path='about/organization'
          element={<IntroduceOrganizationPage />}
        ></Route>
        <Route
          path='about/organization/:subDepth'
          element={<IntroduceOrganizationPage />}
        ></Route>
        <Route path='about/branch' element={<IntroduceWorldwidePage />}></Route>
        <Route
          path='about/ambassador'
          element={<IntroduceAmbassadorPage />}
        ></Route>
        <Route path='about/recruit' element={<IntroduceRecruitPage />}></Route>
        <Route
          path='about/recruit/detail'
          element={<RecruitDetailPage />}
        ></Route>

        {/* 소식 */}
        <Route path='news/campaign' element={<TidingsCampaignPage />}></Route>
        <Route path='news/story' element={<TidingsMissionPage />}></Route>
        <Route path='news/supporter' element={<TidingsSupportPage />}></Route>
        <Route path='news/press' element={<TidingsBroadcastPage />}></Route>
        <Route
          path='news/:subDepth/detail'
          element={<TidingsDetailPage />}
        ></Route>

        {/* 참여 */}
        <Route path='participate/event' element={<ActivityVisitPage />}></Route>

        {/* 시청안내 */}
        <Route path='media/guide' element={<MediaDescriptionPage />}></Route>

        {/* 고객센터 */}
        <Route
          path='customer/notice'
          element={<CustomerCenterNoticePage />}
        ></Route>
        <Route
          path='customer/faq'
          element={<CustomerCenterQuestionsPage />}
        ></Route>
        <Route
          path='customer/notice/detail'
          element={<CustomerCenterNoticeDetailPage />}
        ></Route>

        {/* 이용 약관 */}
        <Route path='policy/:subDepth' element={<PolicyPage />}></Route>

        {/* 점검중 */}
        <Route path='maintenance' element={<MaintenancePage />}></Route>

        {/* 잘못된 접근 */}
        {/* <Route path='outofservice' element={<OutOfServicePage />}></Route> */}
        <Route path='*' element={<OutOfServicePage />}></Route>
      </Route>
    </Routes>
  );
}
