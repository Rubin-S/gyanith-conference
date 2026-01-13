// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

// --- Layout Components ---
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// --- Pages ---
import Home from "./pages/Home";
import About from "./pages/About";
import CommitteesPage from "./pages/Committees";
import CallForPapers from "./pages/CallForPaper"; // Ensure file name matches your structure
import SubmissionPage from "./pages/SubmissionPage";
import Publication from "./pages/Publication";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration"; // Ensure file name matches
import TBDPage from "./pages/TBD";
import ContactUs from "./pages/Contact";
import NoPage from "./components/Nopage";

// --- Utilities ---
// Automatically scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main Layout Wrapper ---
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-gray-900 font-body">
      {/* Navbar (Fixed position handled inside component) */}
      <Navbar />
      
      {/* Main Content Area - Grow to fill space */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer (Always at bottom) */}
      <Footer />
    </div>
  );
};

// --- App Root ---
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Information Routes */}
          <Route path="about-us" element={<About />} />
          <Route path="committees" element={<CommitteesPage />} />
          <Route path="important-dates" element={<ImportantDates />} />
          <Route path="contact-us" element={<ContactUs />} />
          
          {/* Action Routes */}
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="submission" element={<SubmissionPage />} />
          <Route path="publications" element={<Publication />} />
          
          {/* Transaction Routes */}
          <Route path="registration" element={<Registration />} />
          
          {/* Placeholder/System Routes */}
          <Route path="sponsors" element={<TBDPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;