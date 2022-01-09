import Navbar from "./components/Navbar";
import ReviewsPage from "./components/ReviewsPage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import { useLayoutEffect } from "react";
import About from "./components/About";
import { Flex } from "@chakra-ui/react";

// For Going to top when route changes
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="app">
      <Router>
        {/* Adding Router for going to different routes in the website */}
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>

          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;