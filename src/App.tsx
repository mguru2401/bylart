import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Introduction = lazy(() => import("./pages/remedies/Introduction"));
const Essences = lazy(() => import("./pages/remedies/Essences"));
const HowToUse = lazy(() => import("./pages/remedies/HowToUse"));
const SevenGroups = lazy(() => import("./pages/remedies/SevenGroups"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const ExpertAdvice = lazy(() => import("./pages/ExpertAdvice"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Resources = lazy(() => import("./pages/Resources"));
const FindTherapist = lazy(() => import("./pages/therapists/FindTherapist"));
const AboutTherapists = lazy(
  () => import("./pages/therapists/AboutTherapists"),
);
const BookAppointment = lazy(
  () => import("./pages/therapists/BookAppointment"),
);

// Route change loading wrapper
function RouteChangeHandler({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isChangingRoute, setIsChangingRoute] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      setIsChangingRoute(true);
      setPrevLocation(location.pathname);
    }
  }, [location, prevLocation]);

  return (
    <>
      {isChangingRoute && (
        <LoadingScreen
          duration={1000}
          onComplete={() => setIsChangingRoute(false)}
        />
      )}
      {children}
    </>
  );
}

function App() {
  const [showInitialLoading, setShowInitialLoading] = useState(true);

  return (
    <>
      {/* Initial 2.5-second loading screen */}
      {showInitialLoading && (
        <LoadingScreen
          duration={1500}
          onComplete={() => setShowInitialLoading(false)}
        />
      )}

      {/* Main app */}
      <Router>
        <RouteChangeHandler>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                  path="/remedies/introduction"
                  element={<Introduction />}
                />
                <Route path="/remedies/essences" element={<Essences />} />
                <Route path="/remedies/how-to-use" element={<HowToUse />} />
                <Route
                  path="/remedies/seven-groups"
                  element={<SevenGroups />}
                />
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
        </RouteChangeHandler>
      </Router>
    </>
  );
}

export default App;
