import Navbar from "./components/Navbar";
import ReviewsList from "./components/ReviewList/ReviewsList";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import HomePage from './components/Hompage'

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
