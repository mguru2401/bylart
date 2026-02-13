import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Introduction = lazy(() => import('./pages/remedies/Introduction'));
const Essences = lazy(() => import('./pages/remedies/Essences'));
const HowToUse = lazy(() => import('./pages/remedies/HowToUse'));
const SevenGroups = lazy(() => import('./pages/remedies/SevenGroups'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const ExpertAdvice = lazy(() => import('./pages/ExpertAdvice'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Resources = lazy(() => import('./pages/Resources'));
const FindTherapist = lazy(() => import('./pages/therapists/FindTherapist'));
const AboutTherapists = lazy(() => import('./pages/therapists/AboutTherapists'));
const BookAppointment = lazy(() => import('./pages/therapists/BookAppointment'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/remedies/introduction" element={<Introduction />} />
            <Route path="/remedies/essences" element={<Essences />} />
            <Route path="/remedies/how-to-use" element={<HowToUse />} />
            <Route path="/remedies/seven-groups" element={<SevenGroups />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/expert-advice" element={<ExpertAdvice />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/therapists/find" element={<FindTherapist />} />
            <Route path="/therapists/about" element={<AboutTherapists />} />
            <Route path="/therapists/book" element={<BookAppointment />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
